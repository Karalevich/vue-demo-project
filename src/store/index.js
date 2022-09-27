import {createStore} from "vuex";
import tutorsModule from "@/store/tutorsModule";
import requestsModule from "@/store/requestsModule";

const store = createStore({
    modules: {
        tutors: tutorsModule,
        requests: requestsModule
    }
})

export default store