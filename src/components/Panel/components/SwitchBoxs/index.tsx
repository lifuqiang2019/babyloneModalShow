import React, { FC, useState } from 'react';
import './index.css'

interface DataItem {
    name: string;
    data: string;
}

interface IProps {
    dataBtn: Array<DataItem> | [];
    onChange: (data: DataItem, index: number) => void;
    activeImgBg: string;
    unActiveImgBg: string;
    activeImgPointer: string;
    activeColor: string;
    unActiveColor: string;
    type?: number | "1";
}

const SwitchBoxs: FC<IProps> = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const changeActive = (item: DataItem, index: number) => {
        setActiveIndex(index)
        props.onChange(item, index)
    }

    return (
        <div className="model-charts-btn-list">
            <div className="model-charts-btn-itemBox">
                {props.dataBtn.map((item, index) => {
                    const isActive = activeIndex === index
                    const itemStyle = {
                        backgroundSize: '100',
                        backgroundImage: `url(
                        ${isActive ? 
                            props.activeImgBg : 
                            props.unActiveImgBg})`,
                        
                        textAlign: "center",
                        whiteSpace: "nowrap",
                    }
                    if(props.type === 2) {
                        itemStyle.height = "20px";
                        itemStyle.width = "66px";
                        itemStyle.lineHeight = "20px";
                    }

                    return (
                        <div 
                            key={index} 
                            onClick={() => changeActive(item, index)}
                            style={itemStyle}
                            className={`model-charts-btn ${isActive ? "select-btn" : "unselect-btn"}`}
                        >
                            <span className="model-charts-btn-tlt" style={{color: !isActive ? props.unActiveColor : "#fff"}}>{item.name}</span>
                            <span className="model-charts-btn-data" style={{color: isActive ? props.activeColor : "#fff", top: props.type === 2 ? "0px" : "8px"}}>{item.data}</span>
                            
                            {isActive && <div className="model-charts-arrow">
                                <img src={props.activeImgPointer} alt="" />
                            </div>}
                        </div>
                    )
                })}
            </div>
            <div className="model-charts-arrow-box"></div>
        </div>
    )
}

export default SwitchBoxs