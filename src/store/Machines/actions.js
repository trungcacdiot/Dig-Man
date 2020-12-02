export default{
    addModel(context,payload){
        context.commit('addModel',payload);
    },
    addMachine(context,payload){
        context.commit('addMachine',payload);
    },
    chosedModel(context,payload){
        context.commit('chosedModel',payload)
        
    }
    
}