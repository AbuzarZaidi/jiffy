import React from "react";

import { Routes,Route, useNavigate,  } from "react-router-dom";

//import Applayout from "../layouts/Applayout.jsx";
import { setAuthorizationHeader } from "../api/index";
import Authentication from "./Homepage/Authentication";
import Accompainment from "./Navigation/Accompainment/Accompainment";
import Allorders from "./Navigation/Allorders/Allorders";
import Allservices from "./Navigation/Allservices";
import Dashboardservices from "./Navigation/Dashboard/Dashboardservices";
import DocumentA from "./Navigation/Document/DocumentA";
import Modify from "./Navigation/ModifyPage.jsx/Modify";
import CollectPackage from "./Navigation/Package/CollectPackage";
import SendPackage from "./Navigation/Package/SendPackage";
import ServiceOptions from "./Navigation/ServiceOptions";
import Trackorder from "./Navigation/TrackOrders/Trackorder";

const Root = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    setAuthorizationHeader();
    navigate('/')
  }, []);

  return (
      <>
    <Routes>
    
      <Route  exact path="/"  element={<Authentication/>}/>
      <Route  exact path="/services"  element={<ServiceOptions/>}/>
      <Route  exact path="/dashboard"  element={<Dashboardservices/>}/>
      <Route exact path="/sendpackage" element={<SendPackage/>}/>
      <Route exact path="/collectpackage" element={<CollectPackage/>}/>
      <Route exact path="/accompainment" element={<Accompainment/>}/>
      <Route exact path="/documentAttestation" element={<DocumentA/>}/>
      <Route exact path="/trackorder/:id" element={<Trackorder/>}/>
      <Route exact path="/allorders" element={<Allorders/>}/>
      <Route exact path="/modify/:idData" element={<Modify/>}></Route>

    </Routes>
    </>
  );
};

export default Root;