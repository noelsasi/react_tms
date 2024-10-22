import HeaderBar from "@/app/components/Dashboard/Charts/HeaderBar";
import PrimaryCharts from "@/app/components/Dashboard/Charts/PrimaryCharts";

function admin() {
  return (
    <div className="content-body">
      <div className="container-fluid">
        <HeaderBar />
        <PrimaryCharts />
      </div>
    </div>
  );
}

export default admin;
