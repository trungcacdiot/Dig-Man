import {createRouter, createWebHistory} from "vue-router";
import ListMachine from "./Pages/ListMachine.vue";
import MachineDetail from "./Pages/MachineDetail.vue";
import FormModel from "./components/Machine/FormModel.vue"
import FormDetail from "./components/Machine/FormDetail.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", redirect: "/machines"},
        {path: '/machines', component: ListMachine},
        {path: "/form-model", component: FormModel},
        {path: '/detail/:id',
         component: MachineDetail,
            props: true
        },
        {path: "/addMachine/:model/:id",
        component: FormDetail,
        props: {id: true,
                model:true}
        }
    ]
});

export default router;