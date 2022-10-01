import {createStore} from "vuex";
import tutorsModule from "@/store/tutorsModule";
import requestsModule from "@/store/requestsModule";

const store = createStore({
    modules: {
        tutors: tutorsModule,
        requests: requestsModule
    },
    state() {
        return {
            userId: 'testId'
        }
    },
    getters: {
        getUserId(state){
            return state.userId
        }
    }
})

export default store