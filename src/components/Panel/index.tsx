import React from "react";
import PanelHeader from "./PanelHeader";
import "./index.css"

interface IHeaderProps {
    title?: string;
    imgSrc?: string;
    company?: string;
}

interface IProps extends IHeaderProps {
    width?: string;
    height?: string;
    children?: React.ReactNode;
}

const getHeaderProps = (props: IProps): IHeaderProps => {
    const headerProps: IHeaderProps = {}

    if(props.title) headerProps['title'] = props.title 
    if(props.imgSrc) headerProps['imgSrc'] = props.imgSrc 

    return headerProps
}

const Panel = (props: IProps) => {
    const headerProps = getHeaderProps(props)

    return(
    <div className="panel" style={{
        height: props.height ? props.height: '270px',
        width: props.width ? props.width: '280px',
    }}>
        {props.title && <PanelHeader {...headerProps}/>}
        {props.children}
    </div>)
}

export default Panel