export default {
    addTutor(state, newTutor) {
        console.log(newTutor)
        state.tutors.push(newTutor)
    }
}