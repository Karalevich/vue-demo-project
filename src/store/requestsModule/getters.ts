import type { TRequestModuleState } from '@/store/requestsModule/index'

export default {
    hasRequests(state: TRequestModuleState) {
        return state.requests.length > 0 && !state.isLoading
    },
    requests(state: TRequestModuleState) {
        return state.requests
    },
    isLoading(state: TRequestModuleState){
        return state.isLoading
    },
    isError(state: TRequestModuleState){
        return state.isError
    },
    errorMessage(state: TRequestModuleState){
        return state.errorMessage
    }
}