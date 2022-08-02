import React, { FC } from 'react'
import './index.scss'
import videoRTC from '@assets/modelAssets/video/jifangshipin01.mp4'

type statusDataItemType = {
    img: any,
    name: string,
    num: string
}

type statusData = Array<statusDataItemType>

interface Iprops {
    statusData: statusData;
}

const MonitorCard: FC<Iprops> = (props) => {
    const statusData = props.statusData

    return (
        <div className="computerRoomOtrs">
            {
                statusData.map((item: statusDataItemType,index: number)=>{
                    return(
                        <div key={index.toString(36)} className="computerRoom_itemOtrs">
                            <img src={item.img} alt="" />
                            <div className="computerRoom_item_dataOtrs">
                                <div className="computerRoom_item_tltOtrs">
                                    { item.name }
                                </div>
                                <div className="computerRoom_item_numOtrs">
                                    { item.num }台
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default MonitorCard