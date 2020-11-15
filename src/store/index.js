import { createStore } from 'vuex';
import machinesModule from "./Machines/index";
import detailModule from "./MachineDetail/index";

const store = createStore({
    modules: {
        machines: machinesModule,
        detail: detailModule
    },
})


export default store;