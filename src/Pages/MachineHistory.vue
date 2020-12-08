<template>
    <base-card class="base-card" >
    <div v-if="!isShow">
 <base-button  class="button" v-for="date in getDate()" :key="date" @click="showHistory(date)" >
            {{date}}
        </base-button>
    </div>
    <div>
        <base-button v-if="isShow">{{dayHistory[0].date}}</base-button>
        <base-button class="otherday" v-if="isShow" @click="isShow=false">Other Day</base-button> 
    </div>
     
    <div v-if="isShow" >
        <base-card v-for="history in dayHistory " :key="history.hours" >
        <div>
           {{history.hours}} : "{{history.contents}}"
        </div>
        </base-card>
    </div>
    
    </base-card>
</template>
<script>
export default {
    props: ['id','model'],
    data(){
        return {
            history : [],
            isShow: false,
            dayHistory:[]
        }
    },
    created(){
        this.getHistory();
        this.getDate();
    },
    methods: {
        getHistory(){
             this.$store.dispatch('machines/historyIdentify',{model:this.model,id:this.id})
             this.history= this.$store.getters["machines/getHistory"]
        },
        getDate(){
           let dategroup =[];
           for(let i=0 ; i<this.history.length; i++){
               let check = true;
               for(let j=0; j<dategroup.length; j++ ){
                   if (this.history[i].date===this.history[j].date){
                       check = false;
                   }
               }
               if(check===true){
                   dategroup.push(this.history[i].date);
               }else{
                   check=true;
               }
           }
           return dategroup;
        },
        showHistory(day){
            this.isShow=!this.isShow
            this.dayHistory= this.history.filter(history=>history.date===day);
        }
    }
}
</script>
<style scoped>
.base-card{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.button{
    width: 120px;
}
.contents{
    width: 90%;
}
.otherday{
    background: #76a1ab;
}
</style>
