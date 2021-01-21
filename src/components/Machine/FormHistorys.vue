<template>
<base-card>
<input placeholder="Add machine history" v-model="contents" />
<base-button @click="getTime()">Apply</base-button>
</base-card>
</template>
<script>
export default {
    props: ['id','model'],
    data(){
        return{
            date:'',
            hours: '',
            contents:''
        }
    },
    methods: {
        getTime(){
            let d= new Date();
            let month=d.getMonth()+1
            this.date=d.getDate()+'/'+month+"/"+d.getFullYear();
            this.hours=d.getHours()+":"+d.getMinutes();
            let history={
                id: this.id,
                model: this.model,
                date: this.date,
                hours: this.hours,
                contents: this.contents
            }
            this.$store.dispatch("machines/addHistory",history)
            this.contents=''
           
        }
    }
}
</script>
<style scoped>
input{
    height: 30px;
    width: 200px;
    padding: 5px;
    border-radius: 10px;
    font-size: 16px;
    margin-right: 20px;
}
</style>