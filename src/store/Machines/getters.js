export default {
    listMachines(state){
        return state.machines;
    },
    getState(state){
        return state.machines.length>0 && state.machines[0].listModel.state;
    },
}