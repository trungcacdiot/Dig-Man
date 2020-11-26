<template>

<section>
    <base-card >
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
    <base-button @click="apply"  >Apply</base-button>
        </div>
    </base-card>
</section>

</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            name: this.id,
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
    
    computed:{
        stateMachine(){
           return this.$store.getters['machines/getState'];
        },
    },
    methods: {
        nice(){
             this.state.isNice = true;
            
                this.state.isRunning=false;
                this.state.isError=false;
                this.state.isMaintance=false;
            
            
            
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
            const newDetail={
                name: this.name,
                state: this.state,
                history: this.history
            }
            this.$store.dispatch('details/addDetail', newDetail);
           
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
</style>


