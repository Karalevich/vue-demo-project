export default {
    tutors(state) {
        return state.tutors
    },
    hasTutors(state) {
        return !state.isLoading && state.tutors && state.tutors.length > 0
    },
    isLoading(state) {
        return state.isLoading
    },
    isError(state) {
        return state.isError
    },
    errorMessage(state){
        return state.errorMessage
    },
    filter(state) {
        return state.filter
    },
    isTutor(state, getters, rootState) {
        const tutors = state.tutors;
        const userId = rootState.auth.userId;
        return tutors.some(tutor => tutor.id === userId);
    },
}