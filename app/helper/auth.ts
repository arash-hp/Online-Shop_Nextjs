import Cookies from 'universal-cookie';

const storeLoginToken = async (token: string, days: number = 10) => {
    let res = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
    })
    // const cookies = new Cookies()
    // cookies.set('shope_token', token, {
    //     path: '/',
    //     maxAge: (days * 24 * 3600) 
    // })
}

const removeLoginToken = async () => {
    //For clear token when saved without httpOnly
    // const cookie = new Cookies();
    // cookie.remove('shope_token')
    await fetch('/api/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })

}

export { storeLoginToken, removeLoginToken }