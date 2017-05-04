import superagent from 'superagent';
import resultUtil from '../../utils/resultUtil';
let base = '/VUE-ACT-ELEMENTUI';

export const getIrcsListPage = params => {
    return superagent.post(`${base}/common/vueTest/ircsList.do`).type('application/x-www-form-urlencoded').accept('application/json').send(params).then(res => resultUtil(res));
};

export const exportIrcsList = params => {
    return superagent.post(`${base}/common/vueTest/exportJson.do`).type('application/x-www-form-urlencoded').accept('application/json').send(params).then(res => resultUtil(res));
};

export const batchRemoveIrcs = params => {
    return superagent.post(`${base}/common/vueTest/delete.do`).type('application/x-www-form-urlencoded').accept('application/json').send(params).then(res => resultUtil(res));
};
export const editIrcs = params => {
    return superagent.post(`${base}/common/vueTest/editIrcs.do`).type('application/x-www-form-urlencoded; charset=UTF-8').accept('application/json').send(params).then(res => resultUtil(res));
};

