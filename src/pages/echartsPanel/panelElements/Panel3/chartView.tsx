import React, { FC, useEffect, useState } from 'react';
import chartHeaderImg from '@assets/modelAssets/SingleCabinet/jgyx.svg'
import "./chartView.css"
console.log("chartHeaderImg", chartHeaderImg)
const allData = [{
        title: '功率',
        data: 2468,
        max: 10000,
        company: 'W'
    }, {
        title: '直流',
        data: 2,
        max: 8,
        company: 'A'
        
    }, {
        title: '交流',
        data: 10,
        max: 40,
        company: 'A'
    }]


const ChartView: FC<{}> = () => {
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        setChartData(allData)
    }, [])
    
    return (
        <div className='model_charts_data' style={{ display: 'flex' }}>
            <div className="chartDataThree_leftX">
                {
                    chartData.map((item, index) => {
                        return <div
                        key={index} 
                        style={{top: index * 56 + 'px'}} 
                        className="chartDataThree_leftX_dian"></div>
                    })
                }
            </div>
            <div className="chartDataThree_content">
                {
                    chartData.map((item, index) => {
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