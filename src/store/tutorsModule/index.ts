import getters from '@/store/tutorsModule/getters'
import mutations from '@/store/tutorsModule/mutations'
import actions from '@/store/tutorsModule/actions'

export type TTutorModuleState = {
  tutors: Array<unknown>
  isLoading: boolean
  isError: boolean
  errorMessage: string
  lastLoad: string | null
  filter: {
    frontend: boolean,
    backend: boolean,
    career: boolean
  }
}

export default {
  namespaced: true,
  state(): TTutorModuleState {
    return {
      tutors: [],
      isLoading: false,
      isError: false,
      errorMessage: '',
      lastLoad: null,
      filter: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  getters,
  mutations,
  actions
}