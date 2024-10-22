import HeaderBar from "@/app/components/Dashboard/Charts/HeaderBar"
import HeaderBar_Scholar from "@/app/components/Dashboard/Charts/HeaderBar_Scholar"
import PrimaryCharts from "@/app/components/Dashboard/Charts/PrimaryCharts"
import PrimaryCharts_Scholar from "@/app/components/Dashboard/Charts/PrimaryCharts_Scholar"

function Scholar() {
  return (
    <div className="content-body">
      <div className="container-fluid">
        <HeaderBar />
        <PrimaryCharts />
      </div>
    </div>
  );
}

export default Scholar
