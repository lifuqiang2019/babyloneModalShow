import React, { FC } from 'react'
import './index.scss'
import videoRTC from '@assets/modelAssets/video/jifangshipin01.mp4'

interface statusData {
    status: string;
    title: string;
    times: string;
    number: string;
    location: string;
    video: string;
    info: string;
}

interface Iprops {
    statusData: statusData;
}

const MonitorCard: FC<Iprops> = (props) => {
    const statusData = props.statusData

    return (
        <div className={`monitor_boxOtr ${statusData.status=='0'?'monitor_contentSuccessOtr':statusData.status=='1'?'monitor_contentOutOtr':'monitor_contentErrorOtr'}`} >
            <div className="monitor_titleOtr">
                <img src="../../../assets/viedeDilog/title.svg" alt=""/>
                <span>{statusData.status=='0'?'正常视频流':statusData.status=='1'?'离线视频流':'异常视频流'}</span>
            </div>
            <div className="monitor_contentOtr">
                <div className="monitor_content_oneOtr">
                    <div className="monitor_content_one_leftOtr">
                        <span>运行状态:</span>
                        {/* <!-- <span className="monitor_content_one_left_status">{{statusData}}</span> --> */}
                        <span className='monitor_content_one_left_statusOtr'>{statusData.status=='0'?'正常':statusData.status=='1'?'离线':'异常'}</span>
                    </div>
                    <div className="monitor_content_one_rightOtr">
                        <span>在线时长:</span>
                        <span className="monitor_content_one_right_timeOtr">{statusData.times}</span>
                    </div>
                </div>
                <div className="monitor_content_towOtr">
                    <span>设备编号:</span>
                    <span>{statusData.number}</span>
                </div>
                <div className="monitor_content_towOtr">
                    <span>设备定位:</span>
                    <span>{statusData.location}</span>
                </div>
                <div className="monitor_content_threeOtr">
                    <div style={{width: '90px'}}>
                        <span>现场视频流:</span>
                    </div>
                    <div className="monitor_content_three_tiaoOtr">
                        <span></span>
                    </div>
                </div>
                <div className="monitor_content_videoOtr">
                    <span style={{display: statusData.status!=='0'?'inline-block':'none'}}>{statusData.info}</span>
                    <video style={{display: statusData.status=='0'?'inline-block':'none'}} preload="metadata" muted loop autoPlay controls src={videoRTC}></video>
                </div>
            </div>
        </div>
    )
}

export default MonitorCard