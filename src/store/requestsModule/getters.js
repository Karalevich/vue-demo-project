export default {
    hasRequests(state) {
        return state.requests.length > 0
    },
     requests(state, getters, rootState, rootGetters) {
        const tutorId = rootGetters.getUserId
        return state.requests.filter(request => request.tutorId === tutorId)
     }
}