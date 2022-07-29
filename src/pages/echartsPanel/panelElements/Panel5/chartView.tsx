import React, { FC, useEffect, useState } from 'react';
import guyuecong from '@assets/modelAssets/SecurityMonitoring/guyuecong.jpg'
import time from '@assets/modelAssets/SecurityMonitoring/time.svg'
import name from '@assets/modelAssets/SecurityMonitoring/name.svg'
import jcNum from '@assets/modelAssets/SecurityMonitoring/jcNum.svg'
import "./chartView.css"
const faceData = {
    name: '谷岳聪',
    time: '2022.04.08 12:00:00',
    num: '2',
}

const ChartView: FC<{}> = () => {
    const [chartData, setChartData] = useState({
        name: '',
        time: '',
        num: ''
    })

    useEffect(() => {
        setChartData(faceData)
    }, [])
    
    return (
        <div className="Face_box">
            <div className="FaceImg">
                <img src={guyuecong} alt="" />
            </div>
            <div className="FaceData">
                <div className="FaceData_item">
                    <div className="FaceData_tlt">
                        <img src={name} alt="" />
                        <span>姓名</span>
                    </div>
                    <div className="FaceData_content FaceName">{chartData.name}</div>
                </div>
                <div className="FaceData_item">
                    <div className="FaceData_tlt">
                        <img src={time} alt="" />
                        <span>时间</span>
                    </div>
                    <div className="FaceData_content">{chartData.time}</div>
                </div>
                <div className="FaceData_item">
                    <div className="FaceData_tlt">
                        <img src={jcNum} alt="" />
                        <span>进出次数</span>
                    </div>
                    <div className="FaceData_content">{chartData.num}次</div>
                </div>
            </div>
        </div>
    )
}

export default ChartView