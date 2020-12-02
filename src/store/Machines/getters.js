export default {
    listMachines(state){
        return state.machines;
    },
    stateMachine(state){
        return state.machines.find(machine=>machine.model===state.chosedModel);
      
        // return models.listModel.find(model=>model.id===payload).state
    }
}