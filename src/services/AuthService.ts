import client from "../utils/http";

export class AuthService {
    static login(data: Login.credentials) {
        return client.post('/auth/login', data)
    }

    static logout() {
        return client.post('/auth/logout')
    }
}