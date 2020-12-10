export default{
    addModel(context,payload){
        context.commit('addModel',payload);
    },
    addMachine(context,payload){
        context.commit('addMachine',payload);
    },
    chosedModel(context,payload){
        context.commit('chosedModel',payload)
        
    },
    newState(context,payload){
        context.commit('newState',payload)
    },
    historyIdentify(context,payload){
        context.commit('historyIdentify',payload)
    },
    addHistory(context,payload){
        context.commit('addHistory',payload)
    }
    
}