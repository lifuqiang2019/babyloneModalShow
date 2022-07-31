import React, { FC, useEffect, useState, useRef } from 'react'
import './index.css'

const BtnBoxs = (props: any) => {
    const [btnData, setBtnData] = useState([])
    const [modelKey, setModelKey] = useState("0")

    const computerClick = (data, num, key, parentKey) => {
        const name = data.name
        if(parentKey === undefined) return

        btnData.forEach((btn, index) => {
            btn.children.forEach((btn_child, btn_index) => {
                btn_child.flag = false
                if(key === btn_index && index === parentKey) {
                    btn_child.flag = true
                }
            })
        })
        setBtnData(JSON.parse(JSON.stringify(btnData)))
        props?.onSwitch(name)
    }

    useEffect(() => {
        setBtnData(props.btnData)
    }, [props.btnData])

    return (
        <div className="btn_box">
            {
                btnData.map((item, index) => {
                    return (
                        <div className="btn_list" key={index}>
                            <div className="btn_list_big">
                                <button 
                                    className={item.flag || true ? 'computerRoomBlue_btn' : 'computerRoom_btn'} 
                                    onClick={() => computerClick(item, '1', index)}>
                                    { item.name }
                                </button>
                            </div>
                            <div className={item.childrenStatus || true ? 'childBtn_fang' : 'childBtn_shou'}>
                                {item.children.map((items, indexs) => {
                                    return (
                                        <div className="btn_list_lt" key={indexs}>
                                            <button 
                                                className={items.flag ? 'machineBlue_btn' : 'machine_btn'} 
                                                onClick={() => computerClick(items, '1', indexs, index)}>
                                                { items.name }
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default BtnBoxs
