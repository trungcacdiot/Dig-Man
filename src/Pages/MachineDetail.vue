<template>
<section>
    <base-card :class="{nice_bg: state.isNice, 
                        running_bg: state.isRunning,
                        error_bg: state.isError,
                        maintance_bg: state.isMaintance}">
    <div class="container">
    <h1 class="name" >{{id}}</h1>
    </div>
    <div>
        <div class="container button">
            <button :class="{nice: state.isNice}" @click="nice()" >Máy in đẹp</button>
            <button :class="{running: state.isRunning}" @click="running()" >Máy hoạt động</button>
        </div>
        <div class="container button">
            <button :class="{ error: state.isError }" @click="error()" >Máy lỗi</button>
            <button :class="{maintance: state.isMaintance}" @click="maintance()">Máy bảo trì</button>
        </div>
    </div>
     <div class="container">
     <h1 class="name" >Machine history</h1>
    </div>
    <div class="apply_button">
    <!-- <base-button @click="stateMachine()">Get Data</base-button> -->
    <base-button @click="apply">Apply</base-button>
        </div>
    <machine-history :id="id" :model="model"></machine-history>
    </base-card>
</section>

</template>

<script>
import MachineHistory from "./MachineHistory"
export default {
    props: ['id', 'model'],
    emit: ['back-home'],
    components: {
        MachineHistory
    },
    data(){
        return{
           
            state:{
            isNice: false,
            isRunning: false,
            isError: false,
            isMaintance: false
            },
            history: {
                date: '',
                historyMaintance: ''
            }
        }
  
    },
   created(){
       this.stateMachine();
   },
    
    methods: {
        nice(){
             this.state.isNice = true;
                this.state.isRunning=false;
                this.state.isError=false;
                this.state.isMaintance=false;
        },
       
         stateMachine(){
          let getState= this.$store.getters['machines/stateMachine'].listModel.find(machine=>machine.id===this.id);
          this.state.isNice=getState.state.isNice;
          this.state.isRunning=getState.state.isRunning;
          this.state.isError=getState.state.isError;
          this.state.isMaintance=getState.state.isMaintance;
        },
        running(){
             this.state.isRunning=true;
                 this.state.isNice=false;
                 this.state.isError=false;
                 this.state.isMaintance=false;
                   
        },
        error(){
            this.state.isError=true;
           
                this.state.isNice=false;
                this.state.isRunning=false;
                this.state.isMaintance=false
  
        },
        maintance(){
             this.state.isMaintance=true;
             
                 this.state.isNice=false;
                 this.state.isRunning=false;
                 this.state.isError=false;
    
        },
        apply(){

            const newState={
                model:this.model,
                id: this.id,
                isNice: this.state.isNice,
                isRunning: this.state.isRunning,
                isError: this.state.isError,
                isMaintance: this.state.isMaintance
            }
            this.$store.dispatch('machines/newState', newState);
           this.$emit("back-home");
        }
    }
}
</script>

<style scoped>
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


