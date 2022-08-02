import React, {
  FC,
  useState,
  useEffect
} from "react";
import ComputerRoom from "@components/Panel/components/ComputerRoom";
import Panel from "@components/Panel";

import imgOne from '@assets/modelAssets/CabindetInformation/frame.svg';
import imgTow from '@assets/modelAssets/CabindetInformation/virtualMachine.svg';
import imgThree from '@assets/modelAssets/CabindetInformation/PhysicalMachine.svg';
import imgFour from'@assets/modelAssets/CabindetInformation/Switch.svg';


const monitorData = [{
  img: imgOne,
  name: '机架数',
  num: '5'
}, {
  img: imgTow,
  name: '虚拟机数',
  num: '23'
}, 
{
  img: imgThree,
  name: '物理机数',
  num: '18'
}, {
  img: imgFour,
  name: '交换机数',
  num: '10'
}
]


const CabinetInformation: FC<{}> = () => {

  const [allData, setAllData] = useState([{
    img: '',
    name: '',
    num: ''
  }])


  useEffect(()=>{
    setAllData(monitorData)
  },[])


  return (
    <Panel height="220px" width="260px" title="机房设备信息" imgSrc={require('@assets/modelAssets/CabindetInformation/JFequipment.svg')}>
      <ComputerRoom statusData={allData} />
    </Panel>

  );
};

export default CabinetInformation;
