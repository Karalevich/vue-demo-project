export default {
    setUser(state, userData){
        state.userId = userData.localId
        state.idToken = userData.idToken
        state.expiresDate = userData.expiresDate
    },
    updateLoading(state, value){
        state.isLoading = value
    },
    updateError(state, value){
        state.isError = value
    },
    updateErrorMessage(state, message){
        state.errorMessage = message
    },
    logOut(state){
        state.userId = null
        state.idToken = null
        state.expiresDate = null
    }
}