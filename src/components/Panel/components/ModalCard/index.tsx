import React, { FC } from 'react'
import './index.css'

interface statusData {
    status: string;
    voltage: string;
    resistance: string;
    electricity: string;
    voltages: string;
}

interface Iprops {
    statusData: statusData;
}

const ModalCard: FC<Iprops> = (props) => {
    const statusData = props.statusData

    return (
        <div className={`monitor_box ${statusData.status == '0' ? 'monitor_contentSuccess' : 'monitor_contentError'}`}>
            <div className="monitor_title">
                <span className="monitor_title_left">市电总负载</span>
                <span className="monitor_title_right">{statusData.status=="0" ? '正常' : '异常'}</span>
            </div>
            <div className="monitor_content">
                <div>
                    <div className="monitor_content_item">
                        <span>电压：</span>
                        <span className="monitor_content_data">{statusData.voltage} V</span>
                    </div>
                    <div className="monitor_content_item">
                        <span>电流：</span>
                        <span className="monitor_content_data">{statusData.electricity} A</span>
                    </div>
                </div>
                <div>
                    <div className="monitor_content_item">
                        <span>单体电阻标准差：</span>
                        <span className="monitor_content_data">{statusData.resistance} m</span>
                    </div>
                    <div className="monitor_content_item">
                        <span>单体电压标准差：</span>
                        <span className="monitor_content_data">{statusData.voltages} V</span>
                    </div>
                </div>
                
            </div>
	    </div>
    )
}

export default ModalCard