import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";


export default {

    namespaced: true,
    state(){
        return {

            machines: [ 
                {
                    model: 'MODIX',
                    listModel: [{
                        id: 'D11',
                        state:{
                        isRunning: true,
                        isError: false,
                        isMaintance: false,
                        isNice: false
                    },
                    history: {
                        date: '',
                        historyMaintance: ''
                    }
                    }]
                    }
            ]

            
        }
    }, 
    getters,
    actions,
    mutations

}
