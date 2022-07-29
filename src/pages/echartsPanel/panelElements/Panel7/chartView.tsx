import React, { FC, useEffect, useState, useRef } from 'react';
import videoRTC from '@assets/modelAssets/video/jifangshipin01.mp4'

import "./chartView.css"
const faceData = {
    name: '谷岳聪',
    time: '2022.04.08 12:00:00',
    num: '2',
}

const monitoringData = [{
    data: '',
    status: '0',
    info: '',
    time: '00:00:00'
}, {
    data: '',
    status: '1',
    info: '该设备已离线',
    time: '00:00:00'
}, {
    data: '',
    status: '1',
    info: '该设备已离线',
    time: '00:00:00'
}, {
    data: '',
    status: '2',
    info: '无法找到视频流，请联系相关人员维修',
    time: '00:00:00'
}]

interface Iprops {
    SDStatus: number
}

const ChartView: FC<Iprops> = (props) => {
    const [chartData, setChartData] = useState([])
    let timeInterval = useRef(null).current
    const SDStatus = props.SDStatus || 0

    const timeStart = () => {
        let hour, minute, second;//时 分 秒
        hour = minute = second=0;
        let hourData,minuteData,secondData;
        hourData=minuteData=secondData="00";
        timeInterval = setInterval(() => {
            second++;
            if(second<10){
                secondData = "0"+second
            }else{
                secondData = second
            }
            if (second >= 60) {
                second = 0;
                secondData = "00"
                minute = minute + 1;
            }
            if(minute<10){
                minuteData = "0"+minute
            }else{
                minuteData = minute
            }

            if (minute >= 60) {
                minute = 0;
                minuteData = "00"
                hour = hour + 1;
            }
            if(hour<10){
                hourData = "0"+hour
            }else{
                hourData = hour
            }
            
            chartData.length && (chartData[0].time = hourData + ":" + minuteData + ":" + secondData)
            setChartData(chartData)
        }, 1000)
    }

    useEffect(() => {
        setChartData(monitoringData)
        timeStart()

        return () => {
            clearInterval(timeInterval)
        }
    }, [])
    
    return (
        <div className="model_charts_data">
            <div className="monitoringVideo">
                {
                    chartData.length && chartData[SDStatus].status !== '0' ?
                    <span>
                        {chartData[SDStatus].info}
                    </span> :
                    <video preload="metadata" muted loop autoPlay controls
                    src={videoRTC}></video>
                }
            </div>
            <div className="monitoring_information">
                <div>
                    <span>当前状态：</span>
                    <span
                        className={
                        chartData[SDStatus]?.status=='0' ? 
                            'moitoringSatusSuccess' : 
                            chartData[SDStatus]?.status=='1' ? 
                            'moitoringSatusOut' : 
                            'moitoringSatusError' + ' monitoring_status'}>

                            {chartData[SDStatus]?.status=='0' ? '正常' : chartData[SDStatus]?.status == '1' ? '离线' : '异常'}
                        </span>
                </div>
                <div>
                    <span
                        className={
                            chartData[SDStatus]?.status == '0' ? 
                                'monitoring_dianSuccess' : 
                                chartData[SDStatus]?.status == '1' ? 
                                'monitoring_dianOut' : 
                                'monitoring_dianError' + ' monitoring_dian'
                        }></span>
                    <span>
                        {chartData[SDStatus]?.time}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ChartView