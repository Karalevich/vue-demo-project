export default {
    async addRequestsAction(context, {newRequest}) {
        const userId = context.rootState.auth.userId
        const response = await fetch(`https://vue-demo-project-9ba31-default-rtdb.firebaseio.com/requests/${userId}.json`,
            {
                method: 'POST',
                body: JSON.stringify(newRequest)
            })

        if (!response.ok) {
            console.warn(response)
        }
    },
    async getRequestsAction(context) {
        context.commit('updateLoading', true)
        const arrTutors = []
        const userId = context.rootState.auth.userId
        const idToken = context.rootState.auth.idToken
        try {
            const response = await fetch(
                `https://vue-demo-project-9ba31-default-rtdb.firebaseio.com/requests/${userId}.json?auth=`
                + idToken)

            if (!response.ok) {
                throw new Error(`${response.statusText}`)
            }
            const requests = await response.json()
            for (const requestId in requests) {
                arrTutors.push({
                    ...requests[requestId],
                    id: requestId
                })
            }
        } catch (error) {
            context.commit('updateErrorMessage', error)
            context.commit('updateError', true)
        } finally {
            context.commit('updateLoading', false)
        }
        return arrTutors
    },
    async setRequestsAction(context) {
        const requests = await context.dispatch('getRequestsAction')
        context.commit('setRequests', requests)
    },
}
