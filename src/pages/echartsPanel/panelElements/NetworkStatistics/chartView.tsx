import React, { useState, useEffect, useRef, FC } from 'react'
import getConfig from './config'
import useECharts from '@components/Panel/hooks/useECharts'


interface statusData {
    color: Array<string>,
    all: string,
    tlt: string,
    allData: Array<any>
}

interface Iprops {
    statusData: statusData;
}

const Chart: FC<Iprops> = (props) => {
    const { statusData } = props


    const chartRef = useRef(null)
    const config = getConfig(statusData)
    useECharts(chartRef, config)

    return (
        <div>
            <div style={{ width: "140px", height: "180px" }} ref={chartRef} />
        </div>
    )
}

export default Chart