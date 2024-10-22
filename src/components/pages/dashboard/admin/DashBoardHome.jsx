import HeaderBar from "../../../custom/Dashboard/Charts/HeaderBar";
import PrimaryCharts from "../../../custom/Dashboard/Charts/PrimaryCharts";

function DashBoardHome() {
  return (
    <div className="content-body">
      <div className="container-fluid">
        <HeaderBar />
        <PrimaryCharts />
      </div>
    </div>
  );
}

export default DashBoardHome;
