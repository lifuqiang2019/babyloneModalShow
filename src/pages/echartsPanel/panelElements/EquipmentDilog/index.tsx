import React, {
    FC,
    useState,
    useEffect
  } from "react";
import EquipmentDilogCard from "@components/Panel/components/EquipmentDilogCard";

const monitorData = [{
  types: 1,
  title: '接入10.0.1.9',
  connectStatus: '0',
  status: '0',
  topOne: '4',
  topTow: '48',
  topThree: 'Ex4300',
  
  botOne: '0.02GHz',
  botOneMax: '30.23GHzz',
  botTow: '3018MB',
  botTowMax: '4GB',
  botThree: '0.57MB',
  botThreeMax: '4GB',
  
  person: '李凯',
  
},{
  types: 1,
  title: '接入10.0.1.8',
  connectStatus: '0',
  status: '0',
  topOne: '4',
  topTow: '48',
  topThree: 'PowerEdge-R740',
  
  botOne: '0.02GHz',
  botOneMax: '30.23GHzz',
  botTow: '3018MB',
  botTowMax: '4GB',
  botThree: '0.57MB',
  botThreeMax: '4GB',
  
  person: '李凯',
  
},{
  types: 1,
  title: 'FortiNet防火墙',
  connectStatus: '0',
  status: '1',
  topOne: '4',
  topTow: '48',
  topThree: 'EX2200',
  
  botOne: '0.02GHz',
  botOneMax: '30.23GHzz',
  botTow: '3018MB',
  botTowMax: '4GB',
  botThree: '4GB',
  botThreeMax: '4GB',
  
  
  person: '李凯',
  
},{
  types: 1,
  title: '接入10.0.1.7',
  connectStatus: '0',
  status: '0',
  topOne: '4',
  topTow: '48',
  topThree: 'EX4300',
  
  botOne: '0.02GHz',
  botOneMax: '30.23GHzz',
  botTow: '3018MB',
  botTowMax: '4GB',
  botThree: '400MB',
  botThreeMax: '4GB',
  
  
  person: '李凯',
  
},{
  types: 1,
  title: '接入10.0.1.6',
  connectStatus: '0',
  status: '0',
  topOne: '4',
  topTow: '48',
  topThree: 'EX2200',
  
  botOne: '0.02GHz',
  botOneMax: '30.23GHzz',
  botTow: '3018MB',
  botTowMax: '4GB',
  botThree: '400MB',
  botThreeMax: '4GB',
  
  
  person: '李凯',
  
},{
  types: 0,
  title: '硬件流量分析平台',
  connectStatus: '0',
  status: '0',
  topOne: '4',
  topTow: '48',
  topThree: 'PowerEdge-A740',
  
  botOne: '0.02GHz',
  botOneMax: '30.23GHzz',
  botTow: '3018MB',
  botTowMax: '4GB',
  botThree: '400MB',
  botThreeMax: '4GB',
  
  
  person: '李凯',
  
},{
  types: 0,
  title: '软件流量分析平台',
  connectStatus: '0',
  status: '0',
  topOne: '4',
  topTow: '48',
  topThree: 'PowerEdge-A740',
  
  botOne: '0.02GHz',
  botOneMax: '30.23GHzz',
  botTow: '3018MB',
  botTowMax: '4GB',
  botThree: '400MB',
  botThreeMax: '4GB',
  
  
  person: '李凯',
  
},{
  types: 0,
  title: 'GPU服务器',
  connectStatus: '0',
  status: '0',
  topOne: '4',
  topTow: '48',
  topThree: 'PowerEdge-A740',
  
  botOne: '0.02GHz',
  botOneMax: '30.23GHzz',
  botTow: '3018MB',
  botTowMax: '4GB',
  botThree: '400MB',
  botThreeMax: '4GB',
  
  
  person: '李凯',
  
},{
  types: 0,
  title: 'CK管理平台',
  connectStatus: '0',
  status: '0',
  topOne: '4',
  topTow: '48',
  topThree: 'PowerEdge-A740',
  
  botOne: '0.02GHz',
  botOneMax: '30.23GHzz',
  botTow: '3018MB',
  botTowMax: '4GB',
  botThree: '400MB',
  botThreeMax: '4GB',
  
  
  person: '李凯',
  
},{
  types: 0,
  title: 'Nava计算节点',
  connectStatus: '0',
  status: '0',
  topOne: '4',
  topTow: '48',
  topThree: 'PowerEdge-A740',
  
  botOne: '0.02GHz',
  botOneMax: '30.23GHzz',
  botTow: '3018MB',
  botTowMax: '4GB',
  botThree: '400MB',
  botThreeMax: '4GB',
  
  
  person: '李凯',
  
},{
  types: 0,
  title: 'CEPH存储节点',
  connectStatus: '0',
  status: '0',
  topOne: '4',
  topTow: '48',
  topThree: 'PowerEdge-A740',
  
  botOne: '0.02GHz',
  botOneMax: '30.23GHzz',
  botTow: '3018MB',
  botTowMax: '4GB',
  botThree: '400MB',
  botThreeMax: '4GB',
  
  
  person: '李凯',
  
},{
  types: 1,
  title: '接入10.0.1.5',
  connectStatus: '0',
  status: '0',
  topOne: '4',
  topTow: '48',
  topThree: 'EX4300',
  
  botOne: '0.02GHz',
  botOneMax: '30.23GHzz',
  botTow: '3018MB',
  botTowMax: '4GB',
  botThree: '400MB',
  botThreeMax: '4GB',
  
  
  person: '李凯',
  
},{
  types: 1,
  title: 'SDN10.0.144.199',
  connectStatus: '0',
  status: '0',
  topOne: '4',
  topTow: '48',
  topThree: 'HPSDNswitch',
  
  botOne: '0.02GHz',
  botOneMax: '30.23GHzz',
  botTow: '3018MB',
  botTowMax: '4GB',
  botThree: '400MB',
  botThreeMax: '4GB',
  
  
  person: '李凯',
  
},]






const titleData = [{
  topOneTlt: '虚拟机',
  topTowTlt: '逻辑处理器',
  topThreeTlt: '型号',
  botOneTlt: 'CPU利用率',
  botTowTlt: '内存利用率',
  botThreeTlt: '磁盘利用率',					
},{
  topOneTlt: '光口',
  topTowTlt: '以太网口',
  topThreeTlt: '型号',
  botOneTlt: '网口',
  botTowTlt: 'VLAN',
  botThreeTlt: '带宽',					
}]
  
const EquipmentDilog: FC<{}> = () => {

  const [allData, setAllData] = useState([{
    types: 1,
    title: '',
    connectStatus: '',
    status: '',
    topOne: '',
    topTow: '',
    topThree: '',
    
    botOne: '',
    botOneMax: '',
    botTow: '',
    botTowMax: '',
    botThree: '',
    botThreeMax: '',
    
    
    person: '',
  }])


  useEffect(()=>{
    setAllData(monitorData)
  },[])



  return (
    <EquipmentDilogCard statusData={allData} tltData={titleData} />
  );
};

export default EquipmentDilog;
  