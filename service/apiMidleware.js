import { create } from 'apisauce'

const apiSauce = create({
    baseURL: 'http://staging.service.ekskul.co.id/api/auth',
    headers: { Accept: 'application/json' },
})

const api = {
    postLogin: (data) => apiSauce.post('/login',data)
}

export default api