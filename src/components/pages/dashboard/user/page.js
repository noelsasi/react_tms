import HeaderBar from "@/app/components/Dashboard/Charts/HeaderBar";
import HeaderBar_Scholar from "@/app/components/Dashboard/Charts/HeaderBar_Scholar";
import PrimaryCharts from "@/app/components/Dashboard/Charts/PrimaryCharts";

function User() {
  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 mt-4">
              <div className="row">
                <HeaderBar_Scholar />
                <PrimaryCharts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
