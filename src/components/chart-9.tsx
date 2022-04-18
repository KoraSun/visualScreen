import React, { useEffect } from 'react'
import { useRef } from 'react'
import * as echarts from 'echarts'

export const Chart9=()=>{
    const divRef = useRef(null)
    useEffect(()=>{
        var  myChart = echarts.init(divRef.current)
    },[])
    return (
        <div className="age-distributed3">9
            <div className="chart" ref={divRef}></div>
        </div>
    )
}