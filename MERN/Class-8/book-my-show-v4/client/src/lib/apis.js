import axios from 'axios';

const BASE_URL = 'http://localhost:3000'

export async function fetchMovies() {
    const res = await axios.get(`${BASE_URL}/api/v1/movies`);
    return res.data;
}

export async function registerUser(newUser) {
    const res = await axios.post(`${BASE_URL}/api/v1/users/register`, { ...newUser });
    return res.data;
}

export async function loginUser(userCredentials) {
    const res = await axios.post(`${BASE_URL}/api/v1/users/login`, { ...userCredentials });
    return res.data;
}

export async function fetchProfile() {
    const res = await axios.get(`${BASE_URL}/api/v1/users/profile`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return res.data;
}
