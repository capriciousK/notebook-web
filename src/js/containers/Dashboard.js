import React from "react";
import data from "../data"
import Dashboard from "../pages/Dashboard";

class DashboardContainer extends React.Component {
  state = data;

  render() {
    return <Dashboard data={this.state}/>;
  }
}

export default DashboardContainer;