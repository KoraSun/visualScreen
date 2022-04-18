import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'
import { px } from '../shared/px';
import { createEchartsOptions } from '../shared/create-echarts-options';
import China from '../geo/china.json'

export const Chart6 =()=>{
    const divRef = useRef(null)
    const colors={
        '青海省':'linear-gradient(180deg, rgba(175,32,211,1) 0%, rgba(173,94,252,1) 100%)',
        '甘肃省':'linear-gradient(180deg, rgba(43,144,251,1) 0%, rgba(0,210,253,1) 100%)',
        '四川省':'linear-gradient(180deg, rgba(104,180,120,1) 0%, rgba(4,223,242,1) 100%)'}
    useEffect(()=>{
        var myChart = echarts.init(divRef.current)
        //@ts-ignore
        echarts.registerMap('CN',China)
        myChart.setOption(createEchartsOptions({
            xAxis:{show:false},
            yAxis:{show:false},
            series:[
                {
                    type:'map',
                    mapType:'CN',//自定义拓展图表类型
                    data:[
                        {name:'甘肃省',value:'1'}
                    ],
                    label:{show:false,color:'white'},
                    itemStyle:{
                        areaColor:'#010d3d',
                        color:new echarts.graphic.LinearGradient(0,0,0,1,[{
                            offset:0,
                            color:'#2b90fb'                 
                        },{
                            offset:1,
                            color:'#00d2fd'
                        }]),
                        borderColor:'#01a7f7',
                        emphasis:{
                            label:{color:'white'},
                            areaColor:'#5470c6'
                        }
                    }
                },
                {
                    type:'map',
                    mapType:'CN',//自定义拓展图表类型
                    data:[
                        {name:'四川省',value:'100'}
                    ],
                    label:{show:false,color:'white'},
                    itemStyle:{
                        areaColor:'#010d3d',
                        color:new echarts.graphic.LinearGradient(0,0,0,1,[{
                            offset:0,
                            color:'#68b478'                 
                        },{
                            offset:1,
                            color:'#04dff2'
                        }]),
                        borderColor:'yellow',
                        emphasis:{
                            label:{color:'white'},
                            areaColor:'#5470c6'
                        }
                    }
                },
                {
                    type:'map',
                    mapType:'CN',//自定义拓展图表类型
                    data:[
                        {name:'青海省',value:'100'}
                    ],
                    label:{show:false,color:'white'},
                    itemStyle:{
                        areaColor:'#010d3d',
                        color:new echarts.graphic.LinearGradient(0,0,0,1,[{
                            offset:0,
                            color:'#af20d3'                 
                        },{
                            offset:1,
                            color:'#ad5efc'
                        }]),
                        borderColor:'#01a7f7',
                        emphasis:{
                            label:{color:'white'},
                            areaColor:'#5470c6'
                        }
                    }
                },
                
            ]

        }))
    },[])
    return(
        <div className="bordered origin">
            <h2>全市犯罪人员籍贯分布地</h2>
            <div className="wrapper">
                 <div ref={divRef} className="chart"></div>
                 <div className="legend bordered">
                     <span className="icon" style={{background:colors['甘肃省']}}/>甘肃省
                     <span className="icon" style={{background:colors['四川省']}}/>四川省
                     <span className="icon" style={{background:colors['青海省']}}/>青海省
                 </div>
                 <div className='note'>
                     此地图展示中国部分区域
                 </div>
            </div>
        </div>
    )
}

