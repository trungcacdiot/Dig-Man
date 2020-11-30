<template>
    <base-card v-for="machine in machines" :key="machine.model" >
    <div class="name">
    <base-button id="name_button" >{{machine.model}}</base-button><br/>
    </div>
    <div class="list_machines">
    <div   v-for=" detail in machine.listModel" :key='detail.id'>
    <base-button link to="/detail"  :id="detail.id" >{{detail.id}}</base-button>
    </div>
    </div>
    <div class="name">
    <base-button link to="/addMachine" :id="machine.model" >ADD</base-button>
    </div>
    </base-card>
    <div class="button_add_model"> 
    <base-button link to ="/form-model" >Add model</base-button>
    </div>
</template>


<script>
export default {
    computed: {
        machines(){
            // console.log(this.$store.getters['machines/listMachines']);
            return this.$store.getters['machines/listMachines'];
        },
       
    },
    
}
</script>


<style scoped>
.name{
    width: 100%;
    
    display: flex;
    justify-content: center;
}
#name_button{
   background: #E5E5E5;
   color: black;
}
#name_add{
background: #FEFEFE;
color: black;
}
.list_machines{
    display: flex;
    flex-wrap: wrap;
    
}
.button_add_model{
    margin: auto auto;
    max-width: 9rem;
}
</style>