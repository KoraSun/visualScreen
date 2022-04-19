import React, { useEffect, useRef } from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import * as echarts from 'echarts'
const px =(n) => n/2420 * (window as any).pageWidth
import { Chart1  } from '../components/chart-1';
import { Chart2 } from '../components/chart-2';
import { Chart3 } from '../components/chart-3';
import { Chart4 } from '../components/chart-4';
import { Chart5 } from '../components/chart-5';
import { Chart6 } from '../components/chart-6';
import { Chart9 } from '../components/chart-9';
import { Chart7 } from '../components/chart-7';
import { Chart8 } from '../components/chart-8';
export const Home = () => {
  const year=new Date().getFullYear();
  return (
     <div className="home" >
       <header style={{backgroundImage:`url(${headerBg})`}}></header>
       <main>
         <section className="section1">
           <Chart1/>
           <Chart2/>
         </section>
         <section className="section2">
           <Chart3/>
           <Chart4/>
         </section>
         <section className="section3">
           <Chart5/>
         </section>
         <section className="section4">
          <Chart6/>
          <div className="age bordered">
            <h2>兰州市犯罪人员年龄段分布</h2>
            <div className="charts">
              <Chart7/>
              <Chart8/>
              <Chart9/>
            </div>
          </div>
         </section>
         <section className="section5">
           <div className="row1 bordered type">
             <h2>案发类型统计</h2>
             <div className="charts"></div>
           </div>
           <div className="row2 bordered street">
             <h2>案发街道统计</h2>
             <div className='charts'></div>
           </div>
           <div className="row3 bordered method">
             <h2>作案手段分析</h2>
           </div>


         </section>
       </main>
       <footer>
         koko 2020-{year}
       </footer>
 
     </div>
  );
};
