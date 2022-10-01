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
    }
}