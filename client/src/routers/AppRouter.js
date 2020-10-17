import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import NotFound from "../components/NotFoundPage";
import AboutPage from "../components/AboutUsPage";
import FindStoragePage from "../components/FindStoragePage";
import PrivacyPage from "../components/PrivacyPage";
import StoragePolicyPage from "../components/StoragePolicies";
import TermsPage from '../components/TermsPage';
import FormsPage from '../components/FormsPage';   

/* Contains all of the paths for the side */
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/about" component={AboutPage} exact={true} />
        <Route
          path="/availabilities"
          component={FindStoragePage}
          exact={true}
        />
        <Route path="/Privacy" component={PrivacyPage} exact={true} />
        <Route
          path="/Storage_Policies"
          component={StoragePolicyPage}
          exact={true}
        />
        <Route path = "/Forms" component = {FormsPage} exact = {true} />
        <Route path = "/Terms" component = {TermsPage} exact = {true} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
