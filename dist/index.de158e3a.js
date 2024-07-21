// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("skills"));
// 指定图表的配置项和数据
var option = {
    radar: {
        // shape: 'circle',
        indicator: [
            {
                name: "\u9759\u6001\u9875\u9762",
                max: 100
            },
            {
                name: "Vue",
                max: 100
            },
            {
                name: "React",
                max: 100
            },
            {
                name: "\u7F16\u7A0B\u80FD\u529B",
                max: 100
            },
            {
                name: "\u5B66\u4E60\u80FD\u529B",
                max: 100
            },
            {
                name: "\u9879\u76EE\u5F00\u53D1",
                max: 100
            }
        ]
    },
    series: [
        {
            name: "\u80FD\u529B\u6BD4\u8F83",
            type: "radar",
            data: [
                {
                    value: [
                        90,
                        80,
                        80,
                        80,
                        90,
                        80,
                        80
                    ],
                    name: "\u80FD\u529B\u96F7\u8FBE"
                }
            ]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

//# sourceMappingURL=index.de158e3a.js.map
