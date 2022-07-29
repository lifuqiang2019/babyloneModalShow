import React, {
  FC,
  useRef,
  Suspense,
} from "react";
import "./quesBank.css";

import Loading from "@components/Loading/Loading";
// recoil 状态
import {
  quesListSelect,
} from "@recoil/selectors/quesListSelectors";

import { useRecoilState } from "recoil";

const QuesBank: FC<{}> = () => {

  const [quesListParam, setQuesListParam] = useRecoilState(quesListSelect);
  const quesListParams = useRef(quesListParam);
  // useRef变化不会主动使页面渲染
  // useRef接收initialValue作为初始值，它的返回值是一个ref对象，这个对象的.current属性就是该数据的最新值。使用useRef的一个最简单的情况就是在Function Component里面存储对DOM对象的引用，
  // 它可以保证在组件每次渲染的时候拿到的都是同一个对象。
  // useRef返回的ref object被重新赋值的时候不会引起组件的重渲染，如果你有这个需求的话请使用useState来存储数据。
  // useRef保存任何可变化的值，.current属性总是取最新的值。就是相当于全局作用域，一处被修改，其他地方全更新...
  quesListParams.current = quesListParam;
  
  return (
    <>
      <Suspense fallback={Loading}>
        <div className="ques-bank">Page2</div>
      </Suspense>
    </>
  );
};
export default QuesBank;
