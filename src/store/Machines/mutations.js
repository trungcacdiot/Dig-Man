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
    },
    chosedModel(state,payload){
       
        state.chosedModel = payload;
        console.log(state.chosedModel)
        
    }
}



