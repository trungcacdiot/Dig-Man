export default {
    listMachines(state){
        return state.machines;
    },
    stateMachine(state){
        return state.machines.find(machine=>machine.model===state.chosedModel);
    },
    getHistory(state){
    //    let payload={
    //         model: 'MODIX',
    //         id: "D11"
    //     }
       
       return state.machines.find(machine=>machine.model===state.findDate.model).listModel.find(machine=>machine.id===state.findDate.id).history;

    }
}