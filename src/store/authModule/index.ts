import getters from '@/store/authModule/getters'
import mutations from '@/store/authModule/mutations'
import actions from '@/store/authModule/actions'

export type TAuthModelState = {
    userId: string | null,
    idToken: string | null,
    expiresDate: string | null,
    isLoading: boolean,
    isError: boolean,
    errorMessage: string
}

export default {
  namespaced: true,
  state(): TAuthModelState {
    return {
      userId: null,
      idToken: null,
      expiresDate: null,
      isLoading: false,
      isError: false,
      errorMessage: ''
    }
  },
  getters,
  mutations,
  actions
}