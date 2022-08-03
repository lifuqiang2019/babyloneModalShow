import React, { FC, useEffect, useState } from 'react';
import chartHeaderImg from '@assets/modelAssets/SingleCabinet/jgyx.svg'
import "./chartView.css"

interface IpropsItemType {
    title: string;
    data: number;
    max: number;
    company: string;
}

interface Iprops{
    statusData: Array<IpropsItemType>
}


const ChartView: FC<Iprops> = (props)=> {
    
    const {statusData} = props
    
    return (
        <div className='model_charts_data' style={{ display: 'flex' }}>
            <div className="chartDataThree_leftX">
                {
                    statusData.map((item, index) => {
                        return <div
                        key={index} 
                        style={{top: index * 62 + 'px'}} 
                        className="chartDataThree_leftX_dian"></div>
                    })
                }
            </div>
            <div className="chartDataThree_content">
                {
                    statusData.map((item, index) => {
                        return <div className="chartDataThree_item" key={index}>
                            <div className="chartDataThree_top">
                                <span>{item.title}</span>
                                <div>
                                    <span className="colorName">{item.data}{item.company}</span>
                                    <span>/ {item.max}{item.company}</span>
                                </div>
                            </div>
                            <div className="chartDataThree_bottom">
                                <div className="chartDataThree_bottom_left" style={{width: item.data / item.max*100 + '%'}}>
                                    <span></span>
                                </div>
                                <div className="chartDataThree_bottom_right"></div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ChartView