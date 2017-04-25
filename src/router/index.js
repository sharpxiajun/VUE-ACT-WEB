// 模板页面
import IndexView from '../components/index.vue'
import TestView from '../components/table/staticTable.vue'
import vDatasource from '../components/table/elDatatable.vue'
import vReadme from '../components/readme.vue'
import helloEcharts from '../components/echarts/HelloEcharts.vue'

const routes = [
  {path:"/",redirect: '/index'},
  {path: '/index',component: IndexView,
    children:[
      {
        path: '/test',component: TestView
      },
      {
        path: '/elDatatable',component: vDatasource
      },
      {
        path:'/readme',component:vReadme
      },
      {
        path:'/helloEcharts',component:helloEcharts
      },
      {
        path:'/',component:vReadme
      }
    ]
  }
]

export default routes
