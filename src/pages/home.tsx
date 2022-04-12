import React, { useEffect, useRef } from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import * as echarts from 'echarts'
const px =(n) => n/2420 * (window as any).pageWidth

export const Home = () => {
  const divRef =useRef(null)
  useEffect(()=>{
    console.log(divRef.current)
    var myChart = echarts.init(divRef.current)
    myChart.setOption({
      textStyle:{
        fontSize:px(6),
        color:'#536dce'
      },
      title:{show:false},
      legend:{show:false},
      xAxis:{
        data:['兰州新区','兰州新区','兰州新区','兰州新区','兰州新区','兰州新区','兰州新区'],
        axisTick:{show:false},
        axisLine:{
          show:true,
          lineStyle:{color:'#093768'}
        },
        axisLabel:{
          fontSize:px(12),
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
      grid:{
        x:px(40),
        y:px(40),
        x2:px(40),
        y2:px(40),
      },
      yAxis:{
        splitLine:{show:false},
        axisLine:{
          show:true,
          lineStyle:{color:'#093768'}
        },
        axisLabel:{
          fontSize:px(12)
        }
      },
      series:[{
        name:'城市',
        type:'bar',
        data:['5','15','23','25','35','15','55'],
      }]
    })
  },[])
  return (
     <div className="home" >
       <header style={{backgroundImage:`url(${headerBg})`}}></header>
       <main>
         <section className="section1">
           <div className="bordered statistics">
             <h2>案发派出所管辖统计</h2>
             <div ref={divRef} className="chart">

             </div>
           </div>
          
         </section>
         <section className="bordered section2"></section>
         <section className="bordered section3"></section>
         <section className="bordered section4"></section>
         <section className="bordered section5"></section>
       </main>
 
     </div>
  );
};
