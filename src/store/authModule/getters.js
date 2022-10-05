export default {
    getUserId(state) {
        return state.userId
    },
    isLoading(state){
        return state.isLoading
    },
    isError(state){
        return state.isError
    },
    errorMessage(state){
        return state.errorMessage
    },
    isSignIn(state){
        return !!state.idToken
    }
}