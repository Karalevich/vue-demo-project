export default {
    addRequestsAction(context, { newRequest }){
        context.commit('addRequests', newRequest)
    }
}