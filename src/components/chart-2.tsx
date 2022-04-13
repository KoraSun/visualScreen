import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'
import { px } from '../shared/px';
import { baseChartOptions } from '../shared/base-chart-options';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const Chart2 =()=>{
    const divRef =useRef(null)
    useEffect(()=>{
      var myChart = echarts.init(divRef.current)
      myChart.setOption(createEchartsOptions({
        ...baseChartOptions,
        grid:{
            x:px(40),
            y:px(40),
            x2:px(40),
            y2:px(40),
          },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine:{show:false},
            axisLabel:{
                margin:px(12),
              } 
        },
        yAxis: {
            type: 'category',
            data: ['巴西', '印度', '美国', '印尼', '中国', '世界'],
            axisTick:{show:false},
            axisLabel:{
                margin:px(12),
            },
            axisLine:{
                show:true,
                lineStyle:{color:'#093768'}
            },
        },
        series: [
            {
            name: '2011',
            type: 'bar',
            data: [182, 23, 29, 104, 131, 630]
            },
            {
            name: '2012',
            type: 'bar',
            data: [193, 23, 31, 121, 134, 681]
            }
        ],  
      })
      )},[])
    return(
        <div className="bordered statistics">
             <h2>案件破获排名</h2>
             <div ref={divRef} className="chart">
             </div>
        </div>
    )

}