import {createRouter, createWebHistory} from "vue-router";
import ListMachine from "./Pages/ListMachine.vue";
import MachineDetail from "./Pages/MachineDetail.vue";
import FormModel from "./components/Machine/FormModel.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", redirect: "/machines"},
        {path: '/machines', component: ListMachine},
        {path: "/form-model", component: FormModel},
        {path: '/detail/:id',
         component: MachineDetail,
            props: true
        }
    ]
});

export default router;