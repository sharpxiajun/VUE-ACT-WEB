/**
 * Created by 俊 on 2017/5/4.
 */
import Mock from 'mockjs';
import ircs from './fuminjie/ircs.mock';

// 非ES6写法，以后要改过来
function addToMock(list) {
  list.forEach(n => {
    Mock.mock(n.path, n.data)
})
}

addToMock(ircs);

export default Mock
