import { type TAuthModelState } from '@/store/authModule/index'

type TUserData = {
    localId: string
    idToken: string
    expiresDate: string
}

export default {
    setUser(state: TAuthModelState, userData: TUserData){
        state.userId = userData.localId
        state.idToken = userData.idToken
        state.expiresDate = userData.expiresDate
    },
    updateLoading(state: TAuthModelState, value: boolean){
        state.isLoading = value
    },
    updateError(state: TAuthModelState, value: boolean){
        state.isError = value
    },
    updateErrorMessage(state: TAuthModelState, message: string){
        state.errorMessage = message
    },
    logOut(state: TAuthModelState){
        state.userId = null
        state.idToken = null
        state.expiresDate = null
    }
}