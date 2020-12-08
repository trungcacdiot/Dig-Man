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
        
    },
    newState(state,payload){
       let stateChosed= state.machines.find(machine=>machine.model===payload.model).listModel.find(machine=>machine.id===payload.id).state;
       stateChosed.isRunning=payload.isRunning;
       stateChosed.isError= payload.isError;
       stateChosed.isMaintance=payload.isMaintance;
       stateChosed.isNice=payload.isNice;
    },
    historyIdentify(state,payload){
        state.findDate.model=payload.model;
        state.findDate.id=payload.id;
    }
}







