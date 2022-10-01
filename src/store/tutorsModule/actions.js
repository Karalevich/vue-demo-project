export default {
    async addTutorAction(context, {newTutor}) {
        const userId = context.rootGetters.getUserId
        const response = await fetch(`https://vue-demo-project-9ba31-default-rtdb.firebaseio.com/tutors/${userId}.json`,
            {
                method: 'PUT',
                body: JSON.stringify(newTutor)
            })

        if (!response.ok) {
            console.warn(response)
        }
        context.commit('addTutor', newTutor)
    },
    async setTutorAction(context) {
        const tutors = await context.dispatch('getTutors')
        context.commit('setTutors', tutors)
    },
    async updateTutorsAction(context, {filters}) {
        const tutors = await context.dispatch('getTutors')
        context.commit('updateTutors', {filters, tutors})
    },
    async getTutors() {
        const response = await fetch('https://vue-demo-project-9ba31-default-rtdb.firebaseio.com/tutors.json')

        const tutors = await response.json()
        if (!tutors.ok) {
            console.warn(tutors)
        }

        const arrTutors = []

        for (const tutorId in tutors) {
            arrTutors.push({
                ...tutors[tutorId],
            })
        }
        return arrTutors
    }
}