import React from "react";
import PanelHeader from "./PanelHeader";
import "./index.css"

interface IHeaderProps {
    title: string;
    imgSrc?: string;
}

interface IProps extends IHeaderProps {
    children?: React.ReactNode;
}

const getHeaderProps = (props: IProps): IHeaderProps => {
    const headerProps: IHeaderProps = {
        title: props.title
    }
    if(props.imgSrc) headerProps['imgSrc'] = props.imgSrc 

    return headerProps
}

const Panel = (props: IProps) => {
    const headerProps = getHeaderProps(props)

    return(
    <div className="panel">
        <PanelHeader {...headerProps}/>
        {props.children}
    </div>)
}

export default Panel