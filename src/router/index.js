// 模板页面
import IndexView from '../components/index.vue'
import staticTableView from '../components/table/staticTable.vue'
import elDatasource from '../components/table/elDatatable.vue'
import vReadme from '../components/readme.vue'
import helloEcharts from '../components/echarts/HelloEcharts.vue'
import vDatatable from '../components/table/DataTable.vue'

const routes = [
  {path:"/",redirect: '/index'},
  {path: '/index',component: IndexView,
    children:[
      {
        path: '/staticTable',component: staticTableView
      },
      {
        path: '/elDatatable',component: elDatasource
      },
      {
        path:'/readme',component:vReadme
      },
      {
        path:'/helloEcharts',component:helloEcharts
      },
      {
        path:'/datatable',component:vDatatable
      },
      {
        path:'/',component:vReadme
      }
    ]
  }
]

export default routes
