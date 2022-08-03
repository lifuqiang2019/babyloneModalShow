import React, {
    FC,
    useState,
    useEffect
  } from "react";
import MonitorCard from "@components/Panel/components/MonitorCard";

const monitorData = {
  status: '0',
  title: '正常视频流',
  times: '48h',
  number: '1001',
  location: '10.102.1',
  video: '',
  info: '无法找到视频流，请联系相关人员维修'
}
  
const PanelElement: FC<{}> = () => {

  const [allData, setAllData] = useState({
    status: '',
    title: '',
    times: '',
    number: '',
    location: '',
    video: '',
    info: ''
  })

  useEffect(()=>{

    setAllData(monitorData)

  },[])




  return (
    <MonitorCard statusData={allData} />
  );
};

export default PanelElement;
  