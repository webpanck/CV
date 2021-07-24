// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('skills'));

// 指定图表的配置项和数据
var option = {
  radar: {
      // shape: 'circle',
      indicator: [
          { name: '静态页面', max: 100},
          { name: '编程能力', max: 100},
          { name: 'Vue 全家桶', max: 100},
          { name: 'Node.js', max: 100},
          { name: '项目开发', max: 100},
          { name: '沟通能力', max: 100}
      ]
  },
  series: [{
      name: '能力比较',
      type: 'radar',
      data: [
          {
              value: [80, 70, 80, 50, 60, 80],
              name: '能力雷达'
          }
      ]
  }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);