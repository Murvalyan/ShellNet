import api from '../http/index';

class AuthServices {
    static async login(email, password) {
        return api.post('/login', { email, password });
    }

    static async reg(email, password) {
        return api.post('/reg', { email, password });
    }

    static async logout() {
        return api.post('/logout');
    }
}

export default AuthServices;