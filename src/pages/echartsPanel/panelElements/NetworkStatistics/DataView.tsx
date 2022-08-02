import React, { useState, useEffect, useRef, FC } from 'react'
import getConfig from './config'
// import useECharts from '@components/Panel/hooks/useECharts'

import './DataView.scss'

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


    // const chartRef = useRef(null)
    // const config = getConfig(statusData)
    // useECharts(chartRef, config)

    return (
        <div className="chartDataFour_contentPie">
            {
                statusData.allData.map((item: any,index: number)=>{
                    return(
                        <div className="chartDataFour_content_itemPie">
                            <div className="chartDataFour_content_item_leftBoxPie">
                                <span className="chartDataFour_content_item_leftColorPie" style={{background: statusData.color[index]}}></span>
                                <span className="chartDataFour_content_item_namePie">{item.name }</span>
                            </div>
                            <div style={{color: statusData.color[index]}}>
                                { item.num }台
                            </div>
                        </div >
                    )
                })
            }

            
		</div >
    )
}

export default Chart