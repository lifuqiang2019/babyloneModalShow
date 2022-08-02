import React from "react";
import Routes from "@routes/index";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Banner from '@components/Banner/Banner';

const App = () => {
  return (
    <RecoilRoot>
      <Router basename='/'>
         {/* <Banner /> */}
         <div className="right-page-container">
          <Routes />
         </div>
      </Router>
    </RecoilRoot>
  );
};
export default App;

