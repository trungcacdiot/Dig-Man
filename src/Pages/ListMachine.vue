<template>
    <base-card v-for="machine in machines" :key="machine" >
    <div class="name">
    <base-button id="name_button" >{{machine.name}}</base-button><br/>
    </div>
    <div class="list_machines">
    <div   v-for="id in machine.id" :key='id'>
    <base-button link to="/detail"  :id="id" >{{id}}</base-button>
    </div>
    </div>
    
    <div class="name">
    <base-button id="name_add" >ADD</base-button>
    </div>
    </base-card>
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
</style>