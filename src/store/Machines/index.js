import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";


export default {

    namespaced: true,
    state(){
        return {
            chosedModel: '',
            findDate: {model: 'MODIX',
                        id: "D11"},
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
                    history: [{
                        date: '4/12/2020',
                        hours: '22:25',
                        contents: 'test test test test test test test'
                        },
                        {
                            date: '6/12/2020',
                            hours: '22:25',
                            contents: 'test test test test test test test'
                        },
                        {
                            date: '5/12/2020',
                            hours: '22:25',
                            contents: 'test test test test test test test'
                        },
                        {
                            date: '5/12/2020',
                            hours: '22:25',
                            contents: 'test test test test test test test'
                        },
                        {
                            date: '6/12/2020',
                            hours: '22:25',
                            contents: 'test test test test test test test'
                        },
                        {
                            date: '6/12/2020',
                            hours: '22:25',
                            contents: 'test test test test test test test'
                        },
                        {
                            date: '10/12/2020',
                            hours: '22:25',
                            contents: 'test test test test test test test'
                        },],
                    
                    }]
                    }
            ]

            
        }
    }, 
    getters,
    actions,
    mutations

}
