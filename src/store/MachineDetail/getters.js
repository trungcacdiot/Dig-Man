

export default {
    getState(state){
        return state.machineDetails.length>0 && state.machineDetails[0].state;
    },
    get(state){
        return state.machineDetails;
    }
}