import getters from "@/store/authModule/getters";
import mutations from "@/store/authModule/mutations";
import actions from "@/store/authModule/actions";

export default {
    namespaced: true,
    state() {
        return {
            userId: null,
            idToken: null,
            expiresIn: null,
            isLoading: false,
            isError: false,
            errorMessage: ''
        }
    },
    getters,
    mutations,
    actions
}