let timer = null

export default {
    async logIn(context, {user}) {
        await context.dispatch('auth', {
            url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_API_KEY}`,
            body: {
                email: user.email,
                password: user.password,
                returnSecureToken: true
            },
            mode: 'logIn'
        })
    },
    async signUpUser(context, {user}) {
        await context.dispatch('auth', {
            url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_API_KEY}`,
            body: {
                email: user.email,
                password: user.password,
                returnSecureToken: true
            },
            mode: 'signUp'
        })

    },
    async auth(context, payload) {
        context.commit('updateLoading', true)
        const checkExistUser = await context.dispatch('checkExistUser', payload.mode)
        const checkExpiresTime = await context.dispatch('checkExpiresTime')

        if(checkExpiresTime){
            await context.dispatch('logOut')
            context.commit('updateLoading', false)
            return
        }

        if (checkExistUser) {
            context.commit('updateLoading', false)
            return
        }
        try {
            const response = await fetch(payload.url, {
                method: 'POST',
                body: JSON.stringify(payload.body)
            })

            if (!response.ok) {
                throw new Error(`${response.statusText || 'An known error'}`)
            }
            const userData = await response.json()
            context.commit('setUser', userData)
            const expiresInMilliseconds = userData.expiresIn * 1000

            const expiresDate = new Date().getTime() + expiresInMilliseconds

            localStorage.setItem('userId', userData.localId)
            localStorage.setItem('idToken', userData.idToken)
            localStorage.setItem('expiresDate', expiresDate)

            timer = setTimeout(() => {
                context.dispatch('logOut')
            },  expiresInMilliseconds)


        } catch (err) {
            context.commit('updateError', true)
            context.commit('updateErrorMessage', err)
        } finally {
            context.commit('updateLoading', false)
        }
    },
    checkExistUser(context, mode) {
        const userId = localStorage.getItem('userId')
        const idToken = localStorage.getItem('idToken')
        const expiresDate = localStorage.getItem('expiresDate')

        if (mode === 'logIn' && userId && idToken && expiresDate) {
            context.commit('setUser', {
                localId: userId,
                idToken,
                expiresDate
            })
            return true
        }
        return false
    },
    checkExpiresTime() {
        const expiresDate = localStorage.getItem('expiresDate')
        const timeOffset = +expiresDate - new Date().getTime()
        return expiresDate && timeOffset < 0;

    },
    logOut(context) {
        localStorage.removeItem('userId')
        localStorage.removeItem('idToken')
        localStorage.removeItem('expiresDate')
        context.commit('logOut')
        clearTimeout(timer)
        timer = null
    }
}