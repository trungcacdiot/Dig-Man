export default {
    addModel(state,payload){
        state.machines.push(payload)
    },
    addMachine(state,payload){
        for(let machine of state.machines){
            if(machine.model===payload.model){
                machine.listModel.push(payload.listModel);
                
            }
        }
    }
}



