import superagent from 'superagent';
import resultUtil from '../../utils/resultUtil';
let base = '/VUE-ACT-ELEMENTUI';
//let base = 'http://localhost:8080';

export const login = params => {
    return superagent.post(`${base}/common/loginVue/login.do`).type('application/x-www-form-urlencoded').accept('application/json').send(params).then(res => resultUtil(res));
};




