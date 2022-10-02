export default {
    hasRequests(state) {
        return state.requests.length > 0 && !state.isLoading
    },
    requests(state) {
        return state.requests
    },
    isLoading(state){
        return state.isLoading
    },
    isError(state){
        return state.isError
    },
    errorMessage(state){
        return state.errorMessage
    }
}