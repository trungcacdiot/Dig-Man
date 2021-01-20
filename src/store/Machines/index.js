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
                        isRunning: false,
                        isError: false,
                        isMaintance: false,
                        isNice: true
                    },
                    history: [{
                        date: '4/12/2020',
                        hours: '22:25',
                        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        }
                        ],
                    
                    },
                    {
                        id: 'D12',
                        state:{
                        isRunning: false,
                        isError: true,
                        isMaintance: false,
                        isNice: false
                    },
                    history: [{
                        date: '4/12/2020',
                        hours: '22:25',
                        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        }
                        ],
                    
                    },
                    {
                        id: 'D13',
                        state:{
                        isRunning: false,
                        isError: false,
                        isMaintance: true,
                        isNice: false
                    },
                    history: [{
                        date: '4/12/2020',
                        hours: '22:25',
                        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        }
                        ],
                    
                    },
                    {
                        id: 'D14',
                        state:{
                        isRunning: true,
                        isError: false,
                        isMaintance: false,
                        isNice: false
                    },
                    history: [{
                        date: '4/12/2020',
                        hours: '22:25',
                        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        }
                        ],
                    
                    },
                    {
                        id: 'D15',
                        state:{
                        isRunning: false,
                        isError: true,
                        isMaintance: false,
                        isNice: false
                    },
                    history: [{
                        date: '4/12/2020',
                        hours: '22:25',
                        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        }
                        ],
                    
                    },
                    {
                        id: 'D16',
                        state:{
                        isRunning: false,
                        isError: false,
                        isMaintance: true,
                        isNice: false
                    },
                    history: [{
                        date: '4/12/2020',
                        hours: '22:25',
                        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        }
                        ],
                    
                    }]
                    },
                    {
                        model: 'GIGA',
                        listModel: [{
                            id: 'G11',
                            state:{
                            isRunning: true,
                            isError: false,
                            isMaintance: false,
                            isNice: false
                        },
                        history: [{
                            date: '4/12/2020',
                            hours: '22:25',
                            contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                            }
                            ],
                        
                        },
                        {
                            id: 'G12',
                            state:{
                            isRunning: false,
                            isError: true,
                            isMaintance: false,
                            isNice: false
                        },
                        history: [{
                            date: '4/12/2020',
                            hours: '22:25',
                            contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                            }
                            ],
                        
                        },
                        {
                            id: 'G13',
                            state:{
                            isRunning: false,
                            isError: false,
                            isMaintance: true,
                            isNice: false
                        },
                        history: [{
                            date: '4/12/2020',
                            hours: '22:25',
                            contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                            }
                            ],
                        
                        },
                        {
                            id: 'G14',
                            state:{
                            isRunning: true,
                            isError: false,
                            isMaintance: false,
                            isNice: false
                        },
                        history: [{
                            date: '4/12/2020',
                            hours: '22:25',
                            contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                            }
                            ],
                        
                        },
                        {
                            id: 'G15',
                            state:{
                            isRunning: false,
                            isError: true,
                            isMaintance: false,
                            isNice: false
                        },
                        history: [{
                            date: '4/12/2020',
                            hours: '22:25',
                            contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                            }
                            ],
                        
                        },
                        {
                            id: 'G16',
                            state:{
                            isRunning: false,
                            isError: false,
                            isMaintance: true,
                            isNice: false
                        },
                        history: [{
                            date: '4/12/2020',
                            hours: '22:25',
                            contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                            }
                            ],
                        
                        },
                        {
                            id: 'G17',
                            state:{
                            isRunning: true,
                            isError: false,
                            isMaintance: false,
                            isNice: false
                        },
                        history: [{
                            date: '4/12/2020',
                            hours: '22:25',
                            contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                            }
                            ],
                        
                        },
                        {
                            id: 'G18',
                            state:{
                            isRunning: false,
                            isError: true,
                            isMaintance: false,
                            isNice: false
                        },
                        history: [{
                            date: '4/12/2020',
                            hours: '22:25',
                            contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                            }
                            ],
                        
                        },
                        {
                            id: 'G19',
                            state:{
                            isRunning: false,
                            isError: false,
                            isMaintance: false,
                            isNice: true
                        },
                        history: [{
                            date: '4/12/2020',
                            hours: '22:25',
                            contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                            }
                            ],
                        
                        }]
                        }
            ]

            
        }
    }, 
    getters,
    actions,
    mutations

}
