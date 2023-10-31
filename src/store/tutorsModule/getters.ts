import type { TTutorModuleState } from '@/store/tutorsModule/index'
import type { RootState } from '@/store'
import type { GetterTree } from 'vuex'

export default {
  tutors(state: TTutorModuleState) {
    return state.tutors
  },
  hasTutors(state: TTutorModuleState) {
    return !state.isLoading && state.tutors && state.tutors.length > 0
  },
  isLoading(state: TTutorModuleState) {
    return state.isLoading
  },
  isError(state: TTutorModuleState) {
    return state.isError
  },
  errorMessage(state: TTutorModuleState) {
    return state.errorMessage
  },
  filter(state: TTutorModuleState) {
    return state.filter
  },
  isTutor(state: TTutorModuleState, getters: GetterTree<RootState, any>, rootState: RootState) {
    const tutors = state.tutors
    const userId = rootState.auth.userId
    return tutors.some(tutor => tutor.id === userId)
  }
}