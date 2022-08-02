import React, {
    FC,
    useState,
    useEffect
  } from "react";
import AccessControlCard from "@components/Panel/components/AccessControlCard";

const monitorData = {
  status: '0',
  title: '实时门禁记录',
  times: '48h',
  number: '1001',
  location: '10.102.1',
}
  
const PanelElement: FC<{}> = () => {

  const [allData, setAllData] = useState({
    status: '',
    title: '',
    times: '',
    number: '',
    location: '',
  })


  useEffect(()=>{
    setAllData(monitorData)
  },[])



  return (
    <AccessControlCard statusData={allData} />
  );
};

export default PanelElement;
  