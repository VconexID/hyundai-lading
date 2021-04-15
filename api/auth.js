import api from './api'

export const register = (payload) =>
  api.post('/visitors', {
    full_name: payload.full_name,
    email: payload.email,
    phone_number: payload.phone_number,
    bring_guest: payload.bring_guest,
    size: payload.size,
  })
