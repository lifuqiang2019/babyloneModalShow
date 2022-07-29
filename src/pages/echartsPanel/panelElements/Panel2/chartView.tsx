import React, { useState, useEffect, useRef } from 'react'
import getConfig from './config'
import useECharts from '@components/Panel/hooks/useECharts'
const chartData = {
    color: '#3DD36E',backGround: ['rgba(61, 211, 110, 0)', 'rgba(61, 211, 110, 0.3)'],
    allData: {
        yData: [{
            data: [30, 20, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 100, 90, 80, 70, 90, 60, 70, 80, 90, 100, 110]
        }],
        xData: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "23:59"]
    }
    
}

function Chart () {
    const [count, setCount] = useState(Math.random())
    const [toplit, setToplit] = useState([])
    const [x, setX] = useState([])
    const [y, setY] = useState([])
    const chartRef = useRef(null)
    const config = getConfig(chartData)
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