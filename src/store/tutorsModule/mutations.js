export default {
    addTutor(state, newTutor) {
        state.tutors.push(newTutor)
    },
    setTutors(state, tutors) {
        state.tutors = tutors
    },
    updateTutors(state, { filters, tutors }) {
        state.tutors = tutors.filter(tutor => {
            for (const filter in filters) {
                if (filters[filter] && tutor.areas.includes(filter)) {
                    return tutor
                }
            }
        })
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
    setLastLoad(state) {
        state.lastLoad = new Date().getTime()
    },
    updateFilter(state, { filterId, filterStatus }) {
        state.filter = {
            ...state.filter,
            [filterId]: filterStatus
        }
    }
}