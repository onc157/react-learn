import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "7761d243-5e49-41a9-bdf3-6f571311a764"
    }
})

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

    login({email, password, rememberMe}) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },

    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put('profile/status', {status})
    }
}

