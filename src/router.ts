import {createRouter, createWebHistory} from "vue-router";
import store from "@/store";

const TutorList = () => import("@/components/tutors/TutorList.vue");
const Requests = () => import( "@/components/requests/Requests.vue");
const TutorDetail = () => import( "@/components/tutors/TutorDetail.vue");
const Register = () => import( "@/components/register/Register.vue");
const TutorContact = () => import( "@/components/tutors/TutorContact.vue");
const NotFound = () => import( "@/components/notFound/notFound.vue");
const UserAuth = () => import( "@/components/auth/UserAuth.vue");


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/tutors'},
        {path: '/tutors', component: TutorList},
        {
            path: '/tutors/:id', component: TutorDetail, children: [
                {path: 'contact', component: TutorContact}
            ]
        },
        {path: '/register', component: Register, meta: {requiresAuth: true}},
        {path: '/requests', component: Requests, meta: {requiresAuth: true}},
        {path: '/auth', component: UserAuth, meta: {requiresUnAuth: true}},
        {path: '/:notFound(.*)', component: NotFound},
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.getters["auth/isSignIn"]) {
        next('/auth')
    }else if(to.meta.requiresUnAuth && store.getters["auth/isSignIn"]){
        next('/tutors')
    }
    next()

})

export default router