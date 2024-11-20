import { useDispatch, useSelector } from "react-redux";
import HeaderBar from "../../../custom/Dashboard/Charts/HeaderBar";
import PrimaryCharts from "../../../custom/Dashboard/Charts/PrimaryCharts";
import { fetchDashboardData, fetchNotifications, fetchUserProfile } from "../slices";
import React from "react";

function DashBoardHome() {

  const { dashboardData } = useSelector(state => state.dashboard)
  const {userInfo} = useSelector(state => state.auth)
  const isUser = userInfo?.role?.role_name === 'user'
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchDashboardData())
    dispatch(fetchNotifications())
    dispatch(fetchUserProfile())
  }, [dispatch])


  return (
    <div className="content-body">
      <div className="container-fluid">
        <HeaderBar isUser={isUser} dashboardData={dashboardData} />
        <PrimaryCharts dashboardData={dashboardData} />
      </div>
    </div>
  );
}

export default DashBoardHome;
