export default {
    setUser(state, userData){
        state.userId = userData.localId
        state.idToken = userData.idToken
        state.expiresIn = userData.expiresIn
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