import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";


export default {

    namespaced: true,
    state(){
        return {

            machines: [ 
                { 
                    id: ['D11','D12','D13','D14','D15','D16','D17','D18','D19','D20'],
                    name: 'DINGMAN'
                },
                { 
                    id: ['M11','M12','M13','M14','M15','M16','M17','M18','M19','M20'],
                    name: 'MODIX'
                },
                { 
                    id: ['D11','D12','D13','D14','D15','D16','D17','D18','D19','D20'],
                    name: 'MÁY NHỎ'
                },
                { 
                    id: ['D11','D12','D13','D14','D15','D16','D17','D18','D19','D20'],
                    name: 'BIGREP'
                },
                { 
                    id: ['G1','G12','G13','G14','G15','G16','G17','G18','G19','G20'],
                    name: 'GIGA'
                },
            ]

            
        }
    }, 
    getters,
    actions,
    mutations

}
