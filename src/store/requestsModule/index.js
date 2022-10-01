import getters from "@/store/requestsModule/getters";
import mutations from "@/store/requestsModule/mutations";
import actions from "@/store/requestsModule/actions";

export default {
    namespaced: true,
    state() {
        return{
            requests: []
        }
    },
    getters,
    mutations,
    actions
}