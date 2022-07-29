import React, { FC, useEffect, useState } from 'react';
import seat from '@assets/modelAssets/SingleCabinet/seat.svg'
import jgcz from '@assets/modelAssets/SingleCabinet/jgcz.svg'
import firewall from '@assets/modelAssets/SingleCabinet/firewall.svg'
import Router from '@assets/modelAssets/SingleCabinet/Router.svg'
import Switch from '@assets/modelAssets/SingleCabinet/Switch.svg'
import virtualMachine from '@assets/modelAssets/SingleCabinet/virtualMachine.svg'
import PhysicalMachine from '@assets/modelAssets/SingleCabinet/PhysicalMachine.svg'

import "./chartView.css"
console.log("chartHeaderImg", seat)
const allData = [
    {
        img: seat,
        name: '机位使用',
        num: '60%'
    }, {
        img: jgcz,
        name: '机柜承重',
        num: '240KG'
    }, {
        img: firewall,
        name: '防火墙数',
        num: '1'
    }, {
        img: Router,
        name: '路由器数',
        num: '1'
    }, {
        img: Switch,
        name: '交换机数',
        num: '1'
    }, {
        img: virtualMachine,
        name: '虚拟机数',
        num: '0'
    }, {
        img: PhysicalMachine,
        name: '物理机数',
        num: '0'
    }
]


const ChartView: FC<{}> = () => {
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        setChartData(allData)
    }, [])
    
    return (
        <div className="computerRoom">
            <div className="computerRoom_leftX">
                {
                    chartData.map((item, index) => {
                        return <div className="computerRoom_leftX_dian" key={index} style={{ top: index * 100 + "px" }} ></div>
                    })
                }
            </div>
            <div className="computerRoom_box">
                {
                    chartData.map((item, index) => {
                        return <div className="computerRoom_item" key={index}>
                            <div className="computerRoom_item_tlt">
                                {item.name}
                            </div>
                            <img src={item.img} alt="" />
                            <div className="computerRoom_item_num">
                                {item.num}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ChartView