<template>
  <div>
    <div class="bg-light lter b-b wrapper-md">
      <h1 class="m-n font-thin h3">vue-echarts-v3展示</h1>
    </div>
    <div class="desc" style="height: 360px">
      <div class="col-md-6">
        <div class="panel panel-default" style="height: 360px">
          <div class="panel-heading font-bold">图表-柱状图</div>
          <div class="panel-body" style="height: 300px">
            <IEcharts :option="bar" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
          </div>
          <div class="panel-footer">
            <button class="btn btn-primary btn-addon btn-sm" @click="doRandom">变变变</button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel panel-default" style="height: 360px">
          <div class="panel-heading font-bold">图表-折线图</div>
          <div class="panel-body" style="height: 300px">
            <IEcharts :option="line" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
          </div>
          <div class="panel-footer">
            <button class="btn btn-danger btn-addon btn-sm" @click="doLine">变变变</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import IEcharts from 'vue-echarts-v3';
  export default {
    components: {
      IEcharts
    },
    props: {},
    data() {
      return {
        loading: false,
        bar: {
          color:['#5793f3', '#d14a61', '#675bba'],
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          legend: {
            data:['衣服','裤子','帽子']
          },
          yAxis: {},
          series: [{
            name: '衣服',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          },{
            name: '裤子',
            type: 'bar',
            data: [15, 30, 31, 50, 70, 10]
          },{
            name: '帽子',
            type: 'bar',
            data: [5, 15, 76, 31, 30, 89]
          }]
        },
        line:{
          title: {
            text: '折线图堆叠'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['邮件','联盟广告','视频','直接访问','搜索']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name:'邮件营销',
              type:'line',
              stack: '总量',
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'联盟广告',
              type:'line',
              stack: '总量',
              data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
              name:'视频广告',
              type:'line',
              stack: '总量',
              data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
              name:'直接访问',
              type:'line',
              stack: '总量',
              data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
              name:'搜索引擎',
              type:'line',
              stack: '总量',
              data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        }
      }
    },
    methods: {
      doRandom() {
        const that = this;
        let data = [];
        for (let i = 0, min = 5, max = 99; i < 6; i++) {
          data.push(Math.floor(Math.random() * (max + 1 - min) + min));
        }
        that.loading = !that.loading;
        that.bar.series[0].data = data;
      },
      doLine() {
        const that = this;
        let data = [];
        for (let i = 0, min = 99, max = 2000; i < 7; i++) {
          data.push(Math.floor(Math.random() * (max + 1 - min) + min));
        }
        that.loading = !that.loading;
        that.line.series[0].data = data;
      },
      onReady(instance) {
        console.log(instance);
      },
      onClick(event, instance, echarts) {
        console.log(arguments);
      }
    }
  };
</script>
