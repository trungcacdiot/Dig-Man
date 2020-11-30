export default{
    addModel(context,payload){
        context.commit('addModel',payload);
    },
    addMachine(context,payload){
        context.commit('addMachine',payload);
    }
}