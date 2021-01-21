<template>
    <base-card :class="{nice_bg: listModel.state.isNice, 
                        running_bg: listModel.state.isRunning,
                        error_bg: listModel.state.isError,
                        maintance_bg: listModel.state.isMaintance}">
            <base-card class="base-card"  >


            <div class="error_container">
                <div>
                    <label for='id' >ID: </label>
                    <input type="text" name="id" id="id" v-model="listModel.id" /><br/>
                </div>
                <p v-if="Error" class="p1">You have to fill the Machine ID</p>
                <p v-if="duplucate" class="p1">This ID already exists, chose another</p>
            </div>

            </base-card>
            <div>
        <div class="container button">
            <button :class="{nice: listModel.state.isNice}" @click="nice" >Nice printer</button>
            <button :class="{running: listModel.state.isRunning}" @click="running" >Works normally</button>
        </div>
        <div class="container button">
            <button :class="{ error: listModel.state.isError }" @click="error" >Machine error</button>
            <button :class="{maintance: listModel.state.isMaintance}" @click="maintance">Needs maintenance</button>
        </div>
        <div class="container" >
            <div class="error_container">
                <p v-if="checkState" class="p1"> Chose machine state </p><br/>
                <router-link :to="link" ><button @click="addMachine">APPLY</button></router-link>
            </div>
      
        </div>
        
        </div>
      
    </base-card>
</template>
<script>
export default {
    props: ['id'],
    data(){
        return {
                    model: this.id,
                    listModel: {
                        id: '',
                        state:{
                        isRunning: false,
                        isError: false,
                        isMaintance: false,
                        isNice: false
                    },
                    history:[]
                    },
                    Error:false,
                    link:"",
                    duplucate:false,
                    checkState:'',
                    
        }
        },
     computed: {
        machines(){
            return this.$store.getters['machines/listMachines'];
            
        },
    },
    methods: {
       
       
        nice(){
           this.listModel.state.isNice=!this.listModel.state.isNice;
            if(this.listModel.state.isNice===true){
                this.listModel.state.isRunning=false;
                this.listModel.state.isError=false;
                this.listModel.state.isMaintance=false;
            }
           
            },
        running(){
            this.listModel.state.isRunning=!this.listModel.state.isRunning;
            if(this.listModel.state.isRunning===true){
                this.listModel.state.isError=false;
                this.listModel.state.isMaintance=false;
                this.listModel.state.isNice=false;
            }

        },
        error(){
            this.listModel.state.isError=!this.listModel.state.isError;
            if(this.listModel.state.isError===true){
                this.listModel.state.isMaintance=false;
                this.listModel.state.isNice=false;
                this.listModel.state.isMaintance=false;
            }
 

        },
        maintance(){
            this.listModel.state.isMaintance=!this.listModel.state.isMaintance;
            if(this.listModel.state.isMaintance===true){
                this.listModel.state.isRunning=false;
                this.listModel.state.isError=false;
                this.listModel.state.isNice=false
            }

        },
        addMachine(){
            const newModel={
                    model: this.model,
                    listModel: {
                        id: this.listModel.id,
                        state:{
                        isRunning: this.listModel.state.isRunning,
                        isError: this.listModel.state.isError,
                        isMaintance: this.listModel.state.isMaintance,
                        isNice: this.listModel.state.isNice
                    },
                    history: []
                    }  
            }
            let listModixMachine = this.machines.filter(machine =>machine.model===this.id);
            const even = (element)=>element.id===this.listModel.id;
           let check=listModixMachine[0].listModel.some(even);
            if(this.listModel.id===""){
                this.Error=true;
            }else{
                this.Error=false;
            }
            if(check===true){
                this.duplucate=true;
            }else{
                this.duplucate=false
            }
            if(this.listModel.state.isNice|| this.listModel.state.isRunning||this.listModel.state.isError||this.listModel.state.isMaintance){
                this.checkState=false;
            }else{
                this.checkState=true;
            }
            if(this.duplucate===false && this.Error===false&&this.checkState===false)
            {
                this.link="/"
             this.$store.dispatch('machines/addMachine',newModel);
            }
            
            
            
        },
        
        }
    }
</script>

<style scoped>
.enrror_container{
    display: flex;
    flex-direction: column;
}
.p1{
    color: red;
    padding-left: 10px;
}
.container{
    display: flex;
    justify-content: center;
}
button{
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font: inherit;
    border: 1px solid #3a0061;
    cursor: pointer;
    border-radius: 30px;
    margin-right: 0.5rem;
    display: inline-block;
    margin-bottom: 5px;
    width:150px;
}
input{
    border-style: solid;
    border-width: 2px;
    border-color: blue;
    border-radius: 5px;
    font-size: 20px;
    margin-left: 10px ;
    width: 150px;
}

.base-card{
    display: flex;
    justify-content: center;
    align-items: center;
    

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


