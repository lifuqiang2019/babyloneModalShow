import React, { FC } from 'react'
import './index.scss'

type arrayItemType = {
    types: number,
    title: string,
    connectStatus: string,
    status: string,
    topOne: string,
    topTow: string,
    topThree: string,
    
    botOne: string,
    botOneMax: string,
    botTow: string,
    botTowMax: string,
    botThree: string,
    botThreeMax: string,
      
    person: string,
}

type statusData = Array<arrayItemType>

type tltDataItemType = {
    topOneTlt: string,
    topTowTlt: string,
    topThreeTlt: string,
    botOneTlt: string,
    botTowTlt: string,
    botThreeTlt: string,		
}

type tltData = Array<tltDataItemType>

interface Iprops {
    statusData: statusData;
    tltData: tltData;
}

const EquipmentDilogCard: FC<Iprops> = (props) => {
    const statusData = props.statusData;
    const tltData = props.tltData;
    const indexs = 0;
    return (
        <div className={`monitor_boxOtrDlg ${statusData[indexs].status=='0'?'monitor_contentSuccessOtrDlg':'monitor_contentErrorOtrDlg'}`}>
            <div className="monitor_titleOtrDlg">
                <span className="monitor_title_leftOtrDlg">{statusData[indexs].title}</span>
                <span className="monitor_title_rightOtrDlg">{statusData[indexs].connectStatus=="0"?'已连接':'已断开'}</span>
            </div>
            <div className="monitor_content_topOtrDlg">
                <div className="monitor_content_top_itemOtrDlg">
                    <div className="monitor_content_top_item_tltOtrDlg">{tltData[statusData[indexs].types].topOneTlt}</div>
                    <div className="monitor_content_top_item_dataOtrDlg">{statusData[indexs].topOne}</div>
                </div>
                <div className="monitor_content_top_itemOtrDlg">
                    <div className="monitor_content_top_item_tltOtrDlg">{tltData[statusData[indexs].types].topTowTlt}</div>
                    <div className="monitor_content_top_item_dataOtrDlg">{statusData[indexs].topTow}</div>
                </div>
                <div className="monitor_content_top_itemOtrDlg">
                    <div className="monitor_content_top_item_tltOtrDlg">{tltData[statusData[indexs].types].topThreeTlt}</div>
                    <div className="monitor_content_top_item_dataOtrDlg">{statusData[indexs].topThree}</div>
                </div>
            </div>
            <div className="monitor_content_bottomOtrDlg">
                <div className="monitor_content_bottom_itemOtrDlg">
                    <div>
                        <div className="monitor_content_bottom_item_nameOtrDlg" style={{width:statusData[indexs].types==1?'30px':'70px'}}>
                            {tltData[statusData[indexs].types].botOneTlt}
                        </div>
                        <div className="monitor_content_bottom_tiaoOtrDlg">
                            <div style={{height: '100%',width: '0'}}>0%</div>
                        </div>
                    </div>
                    <div className="monitor_content_bottom_item_dataOtrDlg">
                        <span>{statusData[indexs].botOne}</span>
                        <span className="monitor_content_dataOtrDlg">/{statusData[indexs].botOneMax}</span>
                    </div>
                </div>
                <div className="monitor_content_bottom_itemOtrDlg">
                    <div>
                        <div className="monitor_content_bottom_item_nameOtrDlg" style={{width:statusData[indexs].types==1?'30px':'70px'}}>
                            {tltData[statusData[indexs].types].botTowTlt}
                        </div>
                        <div className="monitor_content_bottom_tiaoOtrDlg">
                            <div style={{height: '100%',width: '75%'}}>75%</div>
                        </div>
                    </div>
                    <div className="monitor_content_bottom_item_dataOtrDlg">
                        <span>{statusData[indexs].botTow}</span>
                        <span className="monitor_content_dataOtrDlg">/{statusData[indexs].botTowMax}</span>
                    </div>
                </div>
                <div className="monitor_content_bottom_itemOtrDlg">
                    <div className={`${statusData[indexs].botThree==statusData[indexs].botThreeMax?'originTiaoOtrDlg':''}`} >
                        <div className="monitor_content_bottom_item_nameOtrDlg" style={{width:statusData[indexs].types==1?'30px':'70px'}}>
                            {tltData[statusData[indexs].types].botThreeTlt}
                        </div>
                        <div className="monitor_content_bottom_tiaoOtrDlg">
                            <div style={{height: '100%',width: statusData[indexs].botThree==statusData[indexs].botThreeMax?'100%':'10%'}}>{statusData[indexs].botThree==statusData[indexs].botThreeMax?'100%':'10%'}</div>
                        </div>
                    </div>
                    <div className="monitor_content_bottom_item_dataOtrDlg">
                        <span>{statusData[indexs].botThree}</span>
                        <span className="monitor_content_dataOtrDlg">/{statusData[indexs].botThreeMax}</span>
                    </div>
                </div>
                <div className="monitor_content_bottom_itemOtrDlg">
                    <div>
                        <div className="monitor_content_bottom_item_nameOtrDlg">
                            负责人
                        </div>
                    </div>
                    <div className="monitor_content_bottom_item_dataOtrDlg">
                        <span>{statusData[indexs].person}</span>
                        <span className="monitor_content_dataOtrDlg">(AR巡检人)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EquipmentDilogCard