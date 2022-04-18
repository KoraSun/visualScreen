import React, { useEffect } from "react";
import { useRef } from "react";
import * as echarts from 'echarts'
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart8 =()=>{
    const divRef=useRef(null)
    const colors=['#856be9','#f46064','#f58e26','#1edb81','#31a4f7']
    useEffect(()=>{
        var myChart = echarts.init(divRef.current)
        myChart.setOption(createEchartsOptions({
            color:['#856be9','#f46064','#f58e26','#1edb81','#31a4f7'],
            xAxis:{show:false},
            yAxis:{show:false},
            legend:{show:false},
            tooltip: {
              trigger: 'item'
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: ['75%', '90%'],
                avoidLabelOverlap: false,
                label: {
                  show: true,
                  position: 'inside',
                  color:'white',fontSize:px(20),
                  formatter(options){
                      return (options.value * 100).toFixed(0) + '%';
                  }

                },
                labelLine: {
                  show: false
                },
                itemStyle: {
                    borderColor: '#0F113A',
                    borderWidth: px(4)
                  },
                data: [
                  { value:0.07, name: '10-20岁' },
                  { value:0.10, name: '20-30岁' },
                  { value:0.32, name: '30-40岁' },
                  { value:0.28, name: '40-50岁' },
                  { value:0.23, name: '50-60岁' },
                ]
              }
            ]
    }))
    },[])
    return (
        <div className="age-distributed2">
            <div className="chart">
                <div className="main" ref={divRef}></div>
                <div className="text">年龄段</div>
            </div>
            <div className="legend">
                <span style={{background:colors[0]}}/>10-20
                <span style={{background:colors[1]}}/>20-30
                <span style={{background:colors[2]}}/>30-40
                <span style={{background:colors[3]}}/>40-50
                <span style={{background:colors[4]}}/>50-60
            </div>
        </div>
    )
}