import { create } from 'apisauce'

const apiSauce = create({
    baseURL: 'http://staging.service.ekskul.co.id/api',
    headers: { Accept: 'application/json' },
})

const api = {
    postLogin: (data) => apiSauce.post('/login',data)
}

export default api