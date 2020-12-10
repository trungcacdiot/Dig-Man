import { createStore } from 'vuex';
import machinesModule from "./Machines/index";

const store = createStore({
    modules: {
        machines: machinesModule,
        
    },
})


export default store;