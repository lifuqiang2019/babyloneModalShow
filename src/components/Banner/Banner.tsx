import React, { FC, useEffect, useCallback } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "./banner.css";
import { useRecoilState } from "recoil";
import { loginSel } from "@recoil/selectors/loginSelectors";
import { user } from "@api/index";
import { storage } from "@utils/index";
const Banner: FC<{}> = () => {

  const [loginInfo, setLoginInfo] = useRecoilState(loginSel);

  const history = useHistory();
  
  const location = useLocation();

//   相当于 class didmount
  useEffect(() => {
    if (!loginInfo.headimgurl && location.pathname !== "/") {
      history.push({
        pathname: "/login",
        state: {
          from: {
            pathname: location.pathname,
          },
        },
      });
    }
    // 相当于destroy
    // return ()=>{}
  },[]);
  /* 
   useCallback 缓存函数
   useMemo  缓存值
  */

  const handleLoginOut = useCallback(() => {
    setLoginInfo({
      headimgurl: "",
      nickname: "",
      uid: 0,
      uuid: 0,
    });
    storage.remove("userInfo");
    user
      .loginOut()
      .then((res) => {
        // window.location.reload();
        history.push({
          pathname: "/",
          state: {
            from: {
              pathname: location.pathname,
            },
          },
        });
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <header className="components-banner ">
        <div className="header-box-bg"></div>
        <div className="nav-box-bg"></div>
        <div className="header-box">
          <nav className="nav-list">
            <NavLink
              className="nav-item"
              exact
              activeClassName="nav-item_act"
              to="/"
            >
              🏠&nbsp;&nbsp;首页
            </NavLink>
            <NavLink
              className="nav-item"
              activeClassName="nav-item_act"
              to="/ques"
            >
              💎&nbsp;&nbsp;page2
            </NavLink>
            <NavLink
              className="nav-item"
              activeClassName="nav-item_act"
              to="/info"
            >
              📚&nbsp;&nbsp;page3
            </NavLink>
            <NavLink
              className="nav-item"
              activeClassName="nav-item_act"
              to="/textBabylone"
            >
              📚&nbsp;&nbsp;test babylone
            </NavLink>
            <NavLink
              className="nav-item"
              activeClassName="nav-item_act"
              to="/echartsPanel"
            >
              📚&nbsp;&nbsp;echartsPanel
            </NavLink>
          </nav>
          {/* 右边的登录状态判断 */}
          {loginInfo.headimgurl ? (
            <div className="user">
              <img className="user-avatar" src={loginInfo.headimgurl} alt="" />
              <div onClick={handleLoginOut} className="login-out">
                退出登录
              </div>
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
};
export default React.memo(Banner);
