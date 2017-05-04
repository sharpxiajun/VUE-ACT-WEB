<template>
  <div class="desc">
    <div class="col-sm-6">
      <panel>
        <panel-header slot="header">
          <span class="label bg-danger pull-right m-t-xs">4 left</span>
          Table-进度条效果
        </panel-header>
        <table class="table table-striped m-b-none">
          <thead>
          <tr>
            <th>进度条</th>
            <th>描述</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <progress-bar percentage="80%" childCls="bg-success" cls="progress-sm progress-striped active m-t-xs m-b-none"></progress-bar>
            </td>
            <td>绿色，进度80%</td>
          </tr>
          <tr>
            <td>
              <progress-bar percentage="40%" childCls="bg-info" cls="progress-xs m-t-xs m-b-none"></progress-bar>
            </td>
            <td>蓝色，进度40%</td>
          </tr>
          <tr>
            <td>
              <progress-bar percentage="20%" childCls="bg-warning" cls="progress-xs m-t-xs m-b-none"></progress-bar>
            </td>
            <td>黄色，进度20%</td>
          </tr>
          <tr>
            <td>
              <progress-bar percentage="15%" childCls="bg-danger" cls="progress-xs m-t-xs m-b-none"></progress-bar>
            </td>
            <td>红色，进度15%</td>
          </tr>
          </tbody>
        </table>
        <panel-footer slot="footer">
          Table-进度条效果
        </panel-footer>
      </panel>
    </div>
    <div class="col-sm-6">
      <panel>
        <panel-header slot="header">
          Table-统计图
        </panel-header>
        <table class="table table-striped m-b-none">
          <thead>
            <tr>
              <th style="width:60px;" class="text-center">图表</th>
              <th>描述</th>
              <th style="width:70px;"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <jq-sparkline :params="{type:'bar',height:19,barWidth:4,barSpacing:2,barColor:'#27c24c'}" :data="[16,15,15,14,17,18,16,15,16]">loading...</jq-sparkline>
              </td>
              <td>柱状图</td>
              <td class="text-success">
                <i class="fa fa-level-up"></i> 40%
              </td>
            </tr>
            <tr>
              <td class="text-center">
                <jq-sparkline :params="{type:'pie',height:19,sliceColors:['#23b7e5','#fff','#fad733']}" :data="[60,30,10]">loading...</jq-sparkline>
              </td>
              <td>饼状图</td>
              <td class="text-success">
                <i class="fa fa-level-up"></i> 20%
              </td>
            </tr>
            <tr>
              <td>
                <jq-sparkline :data="[ 16,15,15,14,17,18,16,15,16 ]" :params="{type:'line', height:19, width:60, lineColor:'#7266ba', fillColor:'#fff'}" >loading...</jq-sparkline>
              </td>
              <td>折线图</td>
              <td class="text-warning">
                <i class="fa fa-level-down"></i> 5%
              </td>
            </tr>
            <tr>
              <td>
                <jq-sparkline :data="[ 16,15,15,14,17,18,16,15,16 ]" :params="{type:'discrete', height:19, width:60, lineColor:'#27c24c'}">loading...</jq-sparkline>
              </td>
              <td>散点图</td>
              <td class="text-danger">
                <i class="fa fa-level-down"></i> 20%
              </td>
            </tr>
          </tbody>
        </table>
        <panel-footer slot="footer">
          Table-统计图
        </panel-footer>
      </panel>
    </div>
      <div class="col-sm-12">
        <panel>
          <panel-header slot="header">
            静态的TABLE
          </panel-header>
          <div class="row wrapper">
            <div class="col-sm-5 m-b-xs">
              <select class="input-sm form-control w-sm inline v-middle">
                <option value="0">Bulk action</option>
                <option value="1">Delete selected</option>
                <option value="2">Bulk edit</option>
                <option value="3">Export</option>
              </select>
              <button class="btn btn-sm btn-default">过滤</button>
            </div>
            <div class="col-sm-4">
            </div>
            <div class="col-sm-3">
              <div class="input-group">
                <input type="text" class="input-sm form-control" placeholder="搜索...">
          <span class="input-group-btn">
            <button class="btn btn-sm btn-default" type="button">确定</button>
          </span>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-striped b-t b-light">
              <thead>
              <tr>
                <th style="width:20px;">
                  <label class="i-checks m-b-none">
                    <input type="checkbox"><i></i>
                  </label>
                </th>
                <th>项目</th>
                <th>任务</th>
                <th>日期</th>
                <th style="width:30px;"></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><label class="i-checks m-b-none"><input type="checkbox" name="post[]"><i></i></label></td>
                <td>Idrawfast</td>
                <td>4c</td>
                <td>{{now}}</td>
                <td>
                  <a href class="active" ><i class="fa fa-check text-success text-active"></i><i class="fa fa-times text-danger text"></i></a>
                </td>
              </tr>
              <tr>
                <td><label class="i-checks m-b-none"><input type="checkbox" name="post[]"><i></i></label></td>
                <td>Formasa</td>
                <td>8c</td>
                <td>{{now}}</td>
                <td>
                  <a href ><i class="fa fa-check text-success text-active"></i><i class="fa fa-times text-danger text"></i></a>
                </td>
              </tr>
              <tr>
                <td><label class="i-checks m-b-none"><input type="checkbox" name="post[]"><i></i></label></td>
                <td>Avatar system</td>
                <td>15c</td>
                <td>{{now}}</td>
                <td>
                  <a href class="active" ><i class="fa fa-check text-success text-active"></i><i class="fa fa-times text-danger text"></i></a>
                </td>
              </tr>
              <tr>
                <td><label class="i-checks m-b-none"><input type="checkbox" name="post[]"><i></i></label></td>
                <td>Throwdown</td>
                <td>4c</td>
                <td>{{now}}</td>
                <td>
                  <a href class="active" ><i class="fa fa-check text-success text-active"></i><i class="fa fa-times text-danger text"></i></a>
                </td>
              </tr>
              <tr>
                <td><label class="i-checks m-b-none"><input type="checkbox" name="post[]"><i></i></label></td>
                <td>Idrawfast</td>
                <td>4c</td>
                <td>{{now}}</td>
                <td>
                  <a href class="active" ><i class="fa fa-check text-success text-active"></i><i class="fa fa-times text-danger text"></i></a>
                </td>
              </tr>
              <tr>
                <td><label class="i-checks m-b-none"><input type="checkbox" name="post[]"><i></i></label></td>
                <td>Formasa</td>
                <td>8c</td>
                <td>{{now}}</td>
                <td>
                  <a href class="active" ><i class="fa fa-check text-success text-active"></i><i class="fa fa-times text-danger text"></i></a>
                </td>
              </tr>
              <tr>
                <td><label class="i-checks m-b-none"><input type="checkbox" name="post[]"><i></i></label></td>
                <td>Avatar system</td>
                <td>15c</td>
                <td>{{now}}</td>
                <td>
                  <a href class="active" ><i class="fa fa-check text-success text-active"></i><i class="fa fa-times text-danger text"></i></a>
                </td>
              </tr>
              <tr>
                <td><label class="i-checks m-b-none"><input type="checkbox" name="post[]"><i></i></label></td>
                <td>Videodown</td>
                <td>4c</td>
                <td>{{now}}</td>
                <td>
                  <a href class="active" ><i class="fa fa-check text-success text-active"></i><i class="fa fa-times text-danger text"></i></a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <footer class="panel-footer">
            <div class="row">
              <div class="col-sm-4 hidden-xs">
                <select class="input-sm form-control w-sm inline v-middle">
                  <option value="0">Bulk action</option>
                  <option value="1">Delete selected</option>
                  <option value="2">Bulk edit</option>
                  <option value="3">Export</option>
                </select>
                <button class="btn btn-sm btn-default">过滤</button>
              </div>
              <div class="col-sm-4 text-center">
                <small class="text-muted inline m-t-sm m-b-sm">显示20-30条，总共50条</small>
              </div>
              <div class="col-sm-4 text-right text-center-xs">
                <ul class="pagination pagination-sm m-t-none m-b-none">
                  <li><a href><i class="fa fa-chevron-left"></i></a></li>
                  <li><a href>1</a></li>
                  <li><a href>2</a></li>
                  <li><a href>3</a></li>
                  <li><a href>4</a></li>
                  <li><a href>5</a></li>
                  <li><a href><i class="fa fa-chevron-right"></i></a></li>
                </ul>
              </div>
            </div>
          </footer>
        </panel>
    </div>
  </div>
</template>
<script>
  import panel from '../panel/panel.vue';
  import panelHeader from '../panel/panel-header.vue';
  import panelFooter from '../panel/panel-footer.vue';
  import jqSparkline from '../jquerysparkline/jq-sparkline.vue';
  import progressBar from '../progressbar/progressbar.vue';
  import moment from '../../../node_modules/moment/moment'
  export default {
    data() {
      return {
        msg: 'Hello ACT-VUE!',
        now:""
      }
    },
    components:{
      panel,panelHeader,panelFooter,jqSparkline,progressBar,moment
    },
    mounted() {
      this.now = moment().format('YYYY-MM-DD HH:mm:ss');
    }
  }
</script>
