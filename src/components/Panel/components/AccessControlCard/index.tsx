import React, { FC } from 'react'
import './index.scss'
const imgOne = require('@assets/modelAssets//AccessControl/title.svg');
const imgTow = require('@assets/modelAssets//AccessControl/jin.svg');
const imgThree = require('@assets/modelAssets//AccessControl/live.svg');

interface statusData {
    status: string;
    title: string;
    times: string;
    number: string;
    location: string;
}

interface Iprops {
    statusData: statusData;
}

const AccessControlCard: FC<Iprops> = (props) => {
    const statusData = props.statusData

    return (
        <div className="monitor_boxOtrs">
            <div className="monitor_titleOtrs">
                <img src={imgOne} alt=""/>
                <span>{statusData.title}</span>
            </div>
            <div className="monitor_contentOtrs">
                <div className="monitor_content_oneOtrs">
                    <div className="monitor_content_one_leftOtrs">
                        <span>运行状态:</span>
                        {/* <!-- <span class="monitor_content_one_left_status">{{monitorData}}</span> --> */}
                        <span className='monitor_content_one_left_statusOtrs'>{statusData.status=='0'?'正常':statusData.status=='1'?'离线':'异常'}</span>
                    </div>
                    <div className="monitor_content_one_rightOtrs">
                        <span>设备编号:</span>
                        <span className="monitor_content_one_right_timeOtrs">{statusData.number}</span>
                    </div>
                </div>
                <div className="monitor_content_towOtrs">
                    <span>设备定位:</span>
                    <span>{statusData.location}</span>
                </div>
                <div className="monitor_content_threeOtrs">
                    <div className="monitor_content_three_itemOtrs">
                        <div>
                            <img src={imgTow} alt=""/>
                            <span>今日进入人数</span>
                        </div>
                        <div>
                            <span className="peopleNumOtrs">88</span>
                            <span>人</span>
                        </div>
                    </div>
                    <div className="monitor_content_three_itemOtrs">
                        <div>
                            <img src={imgThree} alt=""/>
                            <span>今日离开人数</span>
                        </div>
                        <div style={{position: 'relative'}}>
                            <span className="peopleNumOtrs">88</span>
                            <span>人</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccessControlCard