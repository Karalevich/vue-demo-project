export default {
    addTutorAction(context, {newTutor}) {
        context.commit('addTutor', newTutor)
    }
}