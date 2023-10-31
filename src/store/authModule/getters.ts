import type { TAuthModelState } from '@/store/authModule/index'

export default {
    getUserId(state: TAuthModelState) {
        return state.userId
    },
    isLoading(state: TAuthModelState){
        return state.isLoading
    },
    isError(state: TAuthModelState){
        return state.isError
    },
    errorMessage(state: TAuthModelState){
        return state.errorMessage
    },
    isSignIn(state: TAuthModelState){
        return !!state.idToken
    }
}