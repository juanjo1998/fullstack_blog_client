import api from "./auth";

export const registerRequest = (user) => api.post(`/register`, user);
export const loginRequest = (user) => api.post(`/login`, user);
export const verifyTokenRequest = () => api.get(`/verify-token`);
