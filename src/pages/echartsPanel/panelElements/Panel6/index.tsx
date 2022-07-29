import React, {
    FC,
    useState,
    useEffect
  } from "react";
import ModalCard from "@components/Panel/components/ModalCard";

const monitorData = {
  status: '0',
  voltage: '211.28',
  resistance: '0.00',
  electricity: '50.18',
  voltages: '0.00'
}
  
const PanelElement: FC<{}> = () => {
  return (
    <ModalCard statusData={monitorData} />
  );
};

export default PanelElement;
  