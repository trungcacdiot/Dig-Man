<template>
    <base-card class="base-card" >
    <div>
 <base-button class="button" v-for="date in getDate()" :key="date" >
            {{date}}
        </base-button>
    </div>  
  <!-- <button @click="getDate()">add data</button> -->
    </base-card>
</template>

<script>
export default {
    props: ['id','model'],
    data(){
        return {
            history : []
        }
    },
    created(){
        this.getHistory();
        this.getDate();
        
    },
    methods: {
        getHistory(){
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
</style>
