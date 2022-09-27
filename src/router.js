import {createRouter, createWebHistory} from "vue-router";
import TutorList from "@/components/tutors/TutorList";
import Requests from "@/components/requests/Requests";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/tutors'},
        {path: '/tutors', component: TutorList},
        {
            path: '/tutors/:id', component: null, children: [
                {path: 'contact', component: null}
            ]
        },
        {path: '/register', component: null},
        {path: '/requests', component: Requests},
        {path: '/:notFound(.*)', component: null},
    ]
})

export default router