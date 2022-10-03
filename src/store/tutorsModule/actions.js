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
        const lastLoad = context.state.lastLoad
        const currentTime = new Date().getTime()
        if((currentTime - lastLoad) / 1000 < 10){
            return
        }
        await context.dispatch('updateTutorsAction')
    },
    async updateTutorsAction(context) {
        const filters = context.getters['filter']
        const tutors = await context.dispatch('getTutors')
        context.commit('updateTutors', {filters, tutors})
    },
    async getTutors(context) {
        context.commit('updateLoading', true)
        const arrTutors = []
        try {
            const response = await fetch('https://vue-demo-project-9ba31-default-rtdb.firebaseio.com/tutors.json')

            const tutors = await response.json()
            for (const tutorId in tutors) {
                arrTutors.push({
                    ...tutors[tutorId],
                })
            }
        }catch (error){
            context.commit('updateErrorMessage', error)
            context.commit('updateError', true)
        }finally {
            context.commit('updateLoading', false)
            context.commit('setLastLoad')
        }
        return arrTutors
    }
}