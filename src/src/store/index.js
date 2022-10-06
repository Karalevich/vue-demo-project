import {createStore} from "vuex";
import tutorsModule from "@/store/tutorsModule";
import requestsModule from "@/store/requestsModule";
import authModule from "@/store/authModule";

const store = createStore({
    modules: {
        tutors: tutorsModule,
        requests: requestsModule,
        auth: authModule
    },
})

window.state = store.state

export default store