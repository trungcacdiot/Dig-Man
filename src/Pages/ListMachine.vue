<template>
     <div class="detail" v-if="displaycomponents">
        <machine-detail :model="modelChosed" :id="idChosed" @back-home="backHome()"></machine-detail>
    </div>
    <base-card v-for="machine in machines" :key="machine.model" >
    <div class="name">
    <base-button id="name_button" >{{machine.model}}</base-button><br/>
    </div>
    <div class="list_machines">
    <div   v-for=" detail in machine.listModel" :key='detail.id'>
             <base-button    
                @click="chosedModel(machine.model,detail.id)"
                :class="{nice_bg: detail.state.isNice, 
                running_bg: detail.state.isRunning,
                error_bg: detail.state.isError,
                maintance_bg: detail.state.isMaintance}"
                :id="detail.id" >{{detail.id}}
            </base-button>
           
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
import MachineDetail from './MachineDetail.vue';
export default {
  components: { MachineDetail },
    data(){
        return {
            displaycomponents: false,
            idChosed:'',
            modelChosed: ""
        }
    }
    ,
    computed: {
        machines(){
            return this.$store.getters['machines/listMachines'];
        },
        linkDetail(){
      return this.to + '/' +this.id
        }
    },
    methods: {
        chosedModel(model,idChosed){
            this.idChosed=idChosed;
            this.modelChosed=model
            this.displaycomponents=!this.displaycomponents;
            this.$store.dispatch('machines/chosedModel',model)
        },
        backHome(){
            this.displaycomponents=!this.displaycomponents;

        }
    }
    
}
</script>


<style scoped>
.detail{
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
}
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
.button{
    text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
  margin-bottom: 5px;
}
.button:hover,
.button:active {
     background-color: #ffb000;
    border-color: #270041;
}

.button_add_model{
    margin: auto auto;
    max-width: 9rem;
}
.nice_bg{
    background: #2DE53F;
}
.running_bg{
    background: #35C7F5;
}
.error_bg{
    background: #E81522;
}
.maintance_bg{
    background: #FEB979;}
</style>