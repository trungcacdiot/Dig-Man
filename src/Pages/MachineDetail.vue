<template>
<section class="machinedetail">
    <base-card :class="{nice_bg: state.isNice, 
                        running_bg: state.isRunning,
                        error_bg: state.isError,
                        maintance_bg: state.isMaintance}">
    <div class="container">
    <h1 class="name" >{{id}}</h1>
    </div>
    <div>
        <div class="container button">
            <button :class="{nice: state.isNice}" @click="nice()" >Nice printer</button>
            <button :class="{running: state.isRunning}" @click="running()" >Works normally</button>
        </div>
        <div class="container button">
            <button :class="{ error: state.isError }" @click="error()" >Machine error</button>
            <button :class="{maintance: state.isMaintance}" @click="maintance()">Needs maintenance</button>
        </div>
    </div>
    <base-card class="machine_history">
     <div class="container">
     <h1 class="name" >Machine history</h1>
    </div>
    <form-historys :id="id" :model="model"></form-historys>
    <machine-history :id="id" :model="model"></machine-history>
    </base-card>
    </base-card>
    <div >
    <base-button class="exit" @click="apply">Exit</base-button>
    </div>
</section>
</template>

<script>
import FormHistorys from '../components/Machine/FormHistorys.vue';

import MachineHistory from "./MachineHistory"
export default {
    props: ['id', 'model'],
    emit: ['back-home'],
    components: {
        MachineHistory,
        FormHistorys,
       
    },
    data(){
        return{
           
            state:{
            isNice: false,
            isRunning: false,
            isError: false,
            isMaintance: false
            },
           
        }
  
    },
   created(){
       this.stateMachine();
   },
    
    methods: {
        stateMachine(){
          let getState= this.$store.getters['machines/stateMachine'].listModel.find(machine=>machine.id===this.id);
          this.state.isNice=getState.state.isNice;
          this.state.isRunning=getState.state.isRunning;
          this.state.isError=getState.state.isError;
          this.state.isMaintance=getState.state.isMaintance;
        },
        nice(){
             this.state.isNice = true;
                this.state.isRunning=false;
                this.state.isError=false;
                this.state.isMaintance=false;
                let newState={
                model:this.model,
                id: this.id,
                isNice: this.state.isNice,
                isRunning: this.state.isRunning,
                isError: this.state.isError,
                isMaintance: this.state.isMaintance
            }
            this.$store.dispatch('machines/newState', newState);
        },
       
        running(){
             this.state.isRunning=true;
                 this.state.isNice=false;
                 this.state.isError=false;
                 this.state.isMaintance=false;
                let newState={
                model:this.model,
                id: this.id,
                isNice: this.state.isNice,
                isRunning: this.state.isRunning,
                isError: this.state.isError,
                isMaintance: this.state.isMaintance
            }
            this.$store.dispatch('machines/newState', newState);   
        },
        error(){
            this.state.isError=true;
           
                this.state.isNice=false;
                this.state.isRunning=false;
                this.state.isMaintance=false
  let newState={
                model:this.model,
                id: this.id,
                isNice: this.state.isNice,
                isRunning: this.state.isRunning,
                isError: this.state.isError,
                isMaintance: this.state.isMaintance
            }
            this.$store.dispatch('machines/newState', newState);
        },
        maintance(){
             this.state.isMaintance=true;
             
                 this.state.isNice=false;
                 this.state.isRunning=false;
                 this.state.isError=false;
    let newState={
                model:this.model,
                id: this.id,
                isNice: this.state.isNice,
                isRunning: this.state.isRunning,
                isError: this.state.isError,
                isMaintance: this.state.isMaintance
            }
            this.$store.dispatch('machines/newState', newState);
        },
        apply(){
           this.$emit("back-home");
        }
    }
}
</script>

<style scoped>
.machine_history{
    background-color:#d6d6d6;
}
.machinedetail{
    position: relative;
}
.exit{
    position: absolute;
    top: 30px;
    right: -10px;
    width: 80px;
    background: brown;
}
.name{
width: 294px;
height: 64px;
background: #E5E5E5;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
font-size: 36px;
}
button{
    width: 199px;
    height: 49px;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border: none;
}
.container{
    display: flex;
    justify-content: center;
}

.button{
    display: flex;
    justify-content: space-evenly;
    
}
.nice{
    background: #2DE53F;
}
.error{
    background: #E81522;
}
.running{
    background: #35C7F5;
}
.maintance{
    background: #FEB979;
}
.apply_button{
    display: flex;
    justify-content: center;
}
.nice_bg{
    background: #DCFEC2;
}
.running_bg{
    background: #E9FAFE;
}
.error_bg{
    background: #FEE9E9;
}
.maintance_bg{
    background: #FEF8E9;
}
</style>


