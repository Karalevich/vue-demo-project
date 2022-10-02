import getters from "@/store/tutorsModule/getters";
import mutations from "@/store/tutorsModule/mutations";
import actions from "@/store/tutorsModule/actions";

export default {
    namespaced: true,
    state() {
        return{
            tutors: [],
            isLoading: false,
            isError: false,
            errorMessage: ''
        }
    },
    getters,
    mutations,
    actions
}