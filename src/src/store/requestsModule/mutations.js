export default {
    setRequests(state, requests){
        state.requests = requests
    },
    updateLoading(state, value){
        state.isLoading = value
    },
    updateError(state, value){
        state.isError = value
    },
    updateErrorMessage(state, message){
        state.errorMessage = message
    }
}