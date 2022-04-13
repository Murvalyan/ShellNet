import api from '../http/index';

class UserServices {
    static async users() {
        return api.get('/users');
    }
}

export default UserServices;