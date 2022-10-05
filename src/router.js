import {createRouter, createWebHistory} from "vue-router";
import TutorList from "@/components/tutors/TutorList";
import Requests from "@/components/requests/Requests";
import TutorDetail from "@/components/tutors/TutorDetail";
import Register from "@/components/register/Register";
import TutorContact from "@/components/tutors/TutorContact";
import NotFound from "@/components/notFound/notFound";
import UserAuth from "@/components/auth/UserAuth";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/tutors'},
        {path: '/tutors', component: TutorList},
        {
            path: '/tutors/:id', component: TutorDetail, props: true, children: [
                {path: 'contact', component: TutorContact}
            ]
        },
        {path: '/register', component: Register},
        {path: '/requests', component: Requests},
        {path: '/auth', component: UserAuth},
        {path: '/:notFound(.*)', component: NotFound},
    ]
})

export default router