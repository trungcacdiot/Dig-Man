<template>

<section>
    <base-card >
    <div class="container">
     <h1 class="name" >{{id}}</h1>
    </div>
    <div>
        <div class="container button">
            <button :class="{nice: isNice}" @click="nice" >Máy in đẹp</button>
            <button :class="{running: isRunning}" @click="running" >Máy hoạt động</button>
        </div>
        <div class="container button">
            <button :class="{ error: isError }" @click="error" >Máy lỗi</button>
            <button :class="{maintance: isMaintance}" @click="maintance">Máy bảo trì</button>
        </div>
    </div>
     <div class="container">
     <h1 class="name" >Machine history</h1>
    </div>   

    </base-card>
</section>

</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            isNice: false,
            isRunning: false,
            isError: false,
            isMaintance: false
        }
    },
    methods: {
        nice(){
             this.isNice= !this.isNice;
            if(this.isNice===true){
                this.isRunning=false;
                this.isError=false;
                this.isMaintance=false;

            }
        },
        running(){
             this.isRunning=!this.isRunning;
             if(this.isRunning===true){
                 this.isNice=false;
                 this.isError=false;
                 this.isMaintance=false;
             }
        },
        error(){
            this.isError=!this.isError;
            if(this.isError===true){
                this.isNice=false;
                this.isRunning=false;
                this.isMaintance=false
            }
        },
        maintance(){
             this.isMaintance=!this.isMaintance;
             if(this.isMaintance===true){
                 this.isNice=false;
                 this.isRunning=false;
                 this.isError=false;
             }
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
.container{
    display: flex;
    justify-content: center;
}
button{
    width: 199px;
    height: 49px;
    border-radius: 10px;
    margin-bottom: 10px;
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
</style>


