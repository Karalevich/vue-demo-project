export default {
    async logIn(context, { user }){
        context.commit('updateLoading', true)
        try {
            const response = await fetch(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_API_KEY}`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: user.email,
                        password: user.password,
                        returnSecureToken: true
                    })
                })

            if (!response.ok) {
                throw new Error(`${response.statusText || 'An known error'}`)
            }
            const userData = await response.json()
            context.commit('setUser', userData)

        } catch (err) {
            context.commit('updateError', true)
            context.commit('updateErrorMessage', err)
        } finally {
            context.commit('updateLoading', false)
        }
    },
    async signUpUser(context, {user}) {
        context.commit('updateLoading', true)
        try {
            const response = await fetch(
                `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_API_KEY}`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: user.email,
                        password: user.password,
                        returnSecureToken: true
                    })
                })

            if (!response.ok) {
                throw new Error(`${response.statusText || 'An known error'}`)
            }
            const userData = await response.json()
            context.commit('setUser', userData)

        } catch (err) {
            context.commit('updateError', true)
            context.commit('updateErrorMessage', err)
        } finally {
            context.commit('updateLoading', false)
        }
    }
}