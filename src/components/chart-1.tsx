import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'
const px =(n) => n/2420 * (window as any).pageWidth
import { baseChartOptions } from '../shared/base-chart-options';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const Chart1 = ()=>{
    const divRef =useRef(null)
    useEffect(()=>{
      console.log(divRef.current)
      var myChart = echarts.init(divRef.current)
      myChart.setOption(createEchartsOptions({
        ...baseChartOptions,
        xAxis:{
          data:['兰州新区','兰州新区','兰州新区','兰州新区','兰州新区','兰州新区','兰州新区'],
          axisTick:{show:false},
          axisLine:{
            show:true,
            lineStyle:{color:'#093768'}
          },
          axisLabel:{
            margin:px(8),
            formatter(value){
              if (value.length > 2){
                const array = value.split('')
                array.splice(2,0,'\n')
                return array.join('')
              }else{
                return value
              }
            }
          },
        },
        yAxis:{
            splitLine:{show:false},
            axisLine:{
              show:true,
              lineStyle:{color:'#093768'}
            },
            axisLabel:{
              margin:px(12),
            }
        },
        series:[{
          name:'城市',
          type:'bar',
          data:['5','15','23','25','35','15','55'],
        }]
      })
    )},[])
    return(
        <div className="bordered statistics">
             <h2>案发派出所管辖统计</h2>
             <div ref={divRef} className="chart">

             </div>
        </div>
    )
}