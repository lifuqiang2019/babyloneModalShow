import React, { useState, useEffect, useRef, FC } from 'react'
import getConfig from './config'
import useECharts from '@components/Panel/hooks/useECharts'

interface xyData {
    yData: Array<any>,
    xData: Array<string>
}

interface statusData {
    color: string;
    backGround: Array<string>;
    allData: xyData
}

interface Iprops {
    statusData: statusData;
}


const Chart: FC<Iprops> = (props) =>{

    const { statusData } = props

    const chartRef = useRef(null)
    const config = getConfig(statusData)
    useECharts(chartRef, config)

    const updateData = () => {
        
    }

    return (
        <div>
            <div style={{width: "280px", height: "180px"}} ref={chartRef} />
        </div>
    )
}

export default Chart