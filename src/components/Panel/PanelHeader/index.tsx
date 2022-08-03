import React from 'react';
import headImg from "@assets/modelAssets/powerMonitoring/SDTlt.svg"
import "./index.css"

interface Iprops {
    title: string;
    imgSrc?: string;
    company?: string;
}

const PanelHeader = (props: Iprops) => {
    return (
        <div className="header-box">
            <img src={props.imgSrc || headImg} alt="" />
            <div className="header-title">
                <span className="left-spot"></span>
                <span className="right-spot">{props.company||''}</span>
                <span className="header-title-left">{props.title}</span>
            </div>
        </div>
    )
}

export default PanelHeader;