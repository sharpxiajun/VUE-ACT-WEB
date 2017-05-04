/**
 * Created by 俊 on 2017/5/3.
 */
import Mock from 'mockjs';
import Login from './xiajun/login';

// 非ES6写法，以后要改过来
function addToMock(list) {
  list.forEach(n => {
    Mock.mock(n.path, n.data)
  })
}

addToMock(Login);

export default Mock
