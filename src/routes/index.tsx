import React, { FC,Suspense } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useLocation } from "react-router-dom";
import { Route, Switch, RouteProps } from "react-router";
import Loading from '@components/Loading/Loading';
import NotFound from '@pages/NotFound/NotFound';
const Home = React.lazy(() => import("@pages/Home/Home"));
const Login = React.lazy(() => import("@pages/Login/Login"));
const QuesBank = React.lazy(() => import("@pages/QuesBank/QuesBank"));
const QuesInfo = React.lazy(() => import("@pages/QuesInfo/quesInfo"));
const TestBabyloneCom = React.lazy(() => import("@pages/TestBabyloneCom"))
const EchartsPanel = React.lazy(() => import("@pages/echartsPanel"));


// 定义路由集合
export const routes: RouteProps[] = [
  {
    path: "/",
    exact: true,
    component: QuesBank,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/ques",
    exact: true,
    component: QuesBank,
  },
  {
    path: "/info",
    exact: true,
    component: QuesInfo,
  },
  {
    path: "/testBabylone",
    exact: true,
    component: TestBabyloneCom,
  },
  {
    path: "/echartsPanel",
    exact: true,
    component: EchartsPanel,
  },
];

// 定义路由组件
const Routes:FC = ()=>{
    const location = useLocation()
    return (
        <Suspense fallback={<Loading />}>
          <TransitionGroup>
                <CSSTransition key={location.key} timeout={1000} classNames="fade">
                  <Switch>
                      {
                          routes.map((r,index)=>{
                              const {path,exact,component} = r;
                              const LazyCom = component;
                              return (
                                  <Route
                                      key={index}
                                      path={path}
                                      exact={exact}
                                      render={
                                          (props)=><LazyCom {...props} />
                                      }
                                  />
                              )
                          })
                      }
                      {/* 兜底的路由 */}
                      <Route component={NotFound} />
                  </Switch>
                </CSSTransition>
          </TransitionGroup>
        </Suspense>
    )
}

export default Routes;