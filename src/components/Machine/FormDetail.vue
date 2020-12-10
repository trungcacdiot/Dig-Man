<template>
    <base-card :class="{nice_bg: listModel.state.isNice, 
                        running_bg: listModel.state.isRunning,
                        error_bg: listModel.state.isError,
                        maintance_bg: listModel.state.isMaintance}">
            <base-card class="base-card" >
            <label for='id' >ID: </label>
            <input type="text" name="id" id="id" v-model="listModel.id" />
            </base-card>
            <div>
        <div class="container button">
            <button :class="{nice: listModel.state.isNice}" @click="nice" >Máy in đẹp</button>
            <button :class="{running: listModel.state.isRunning}" @click="running" >Máy hoạt động</button>
        </div>
        <div class="container button">
            <button :class="{ error: listModel.state.isError }" @click="error" >Máy lỗi</button>
            <button :class="{maintance: listModel.state.isMaintance}" @click="maintance">Máy bảo trì</button>
        </div>
        <div class="container">
        <router-link to="/"><button @click="addMachine">APPLY</button></router-link>
            
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
                    }   
        }
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
            this.$store.dispatch('machines/addMachine',newModel);
            
        },
        
        }
    }
</script>

<style scoped>
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


