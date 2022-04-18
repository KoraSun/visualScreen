import React, { useEffect } from 'react'
import { useRef } from 'react'
import * as echarts from 'echarts'
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart9=()=>{
    const divRef = useRef(null)
    useEffect(()=>{
        var  myChart = echarts.init(divRef.current)
        myChart.setOption(createEchartsOptions({
            xAxis: {
                type: 'category',
                axisTick:{show:false},
                splitLine: {show: true, lineStyle: {color: '#073E78'}},
                boundaryGap: false,
                axisLine: {show: false},
                data: [0, 10, 20, 30, 40, 50, 60],
              },
              yAxis: {
                type: 'value',
                splitLine: {show: true, lineStyle: {color: '#073E78'}},
                axisLabel: {
                    formatter(val) {
                      return val * 100 + '%';
                    }
                  }
              },
              series: [
                {
                    type: 'line',
                    data: [
                        0.19, 0.20, 0.26,
                        0.35, 0.26, 0.20,
                        0.08,
                    ],
                    symbol:'circle',
                    SymbolSize:px(12),
                    lineStyle:{width:px(2),color:'#f29e29'},
                    itemStyle:{color:'#f29e29'},
                    areaStyle:{
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#F7A110'
                          }, {
                            offset: 1,
                            color: '#1B1D52'
                          }])
                    }
                }]  
        }))
    },[])
    return (
        <div className="age-distributed3">
            <h3>犯罪年龄趋势图</h3>
            <div className="chart" ref={divRef}>
            </div>
        </div>
    )
}