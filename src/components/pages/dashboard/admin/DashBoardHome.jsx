import { useDispatch, useSelector } from "react-redux";
import HeaderBar from "../../../custom/Dashboard/Charts/HeaderBar";
import PrimaryCharts from "../../../custom/Dashboard/Charts/PrimaryCharts";
import { fetchDashboardData, fetchNotifications } from "../slices";
import React from "react";

function DashBoardHome() {

  const { dashboardData } = useSelector(state => state.dashboard)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchDashboardData())
    dispatch(fetchNotifications())
  }, [dispatch])


  return (
    <div className="content-body">
      <div className="container-fluid">
        <HeaderBar dashboardData={dashboardData} />
        <PrimaryCharts dashboardData={dashboardData} />
      </div>
    </div>
  );
}

export default DashBoardHome;
