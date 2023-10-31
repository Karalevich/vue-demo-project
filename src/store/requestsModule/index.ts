import getters from '@/store/requestsModule/getters'
import mutations from '@/store/requestsModule/mutations'
import actions from '@/store/requestsModule/actions'

export type TRequestModuleState = {
    requests: Array<unknown>
    isLoading: boolean
    isError: boolean
    errorMessage: string
}

export default {
  namespaced: true,
  state(): TRequestModuleState {
    return {
      requests: [],
      isLoading: false,
      isError: false,
      errorMessage: ''
    }
  },
  getters,
  mutations,
  actions
}