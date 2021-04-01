import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "7761d243-5e49-41a9-bdf3-6f571311a764"
  }
})

export const authAPI = {
  setAuth() {
    return instance.get(`auth/me`)
      .then(response => response.data)
  }
}

export const profileAPI = {
  setUser(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => response.data)
  }
}

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data)
  },

  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data)
  }
}

