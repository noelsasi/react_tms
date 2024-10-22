import ManageUserForm from "@/app/components/Forms/ManageUserForm";
import UpdateProfile from "@/app/components/Forms/UpdateProfile";

function Profile() {
  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="clearfix">
                <div className="card card-bx author-profile m-b30">
                  <div className="card-body">
                    <div className="p-5">
                      <div className="author-profile mt-4">
                        <div className="author-media">
                          <img src="/dash/images/profile/pic1.jpg" alt="img" />
                          <div
                            className="upload-link"
                            title
                            data-bs-toggle="tooltip"
                            data-placement="right"
                            data-original-title="update"
                          >
                            <input type="file" className="update-flie" />
                            <i className="fa fa-camera" />
                          </div>
                        </div>
                        <br />
                        <br />
                        <div className="author-info">
                          <h6 className="title">John</h6>
                          <span>Admin</span>
                        </div>
                      </div>
                    </div>
                    <div className="info-list">
                      <ul>
                        <li>
                          Fisrt Name<span>John</span>
                        </li>
                        <li>
                          Last Name<span>Doe</span>
                        </li>
                        <li>
                          DOB<span>06-01-1997</span>
                        </li>
                        <li>
                          Gender<span>Male</span>
                        </li>
                        <li>
                          Phone No<span>123456789</span>
                        </li>
                        <li>
                          Email<span>demo@gmail.com</span>
                        </li>
                        <li>
                          Joined<span>2022-05-01</span>
                        </li>
                        <li>
                          Thesis<span>12</span>
                        </li>
                        <li>
                          Downloads<span>18</span>
                        </li>
                        <li>
                          Address<span>123 Main St, New York, NY 10001</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="card  card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">Update Profile</h6>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <UpdateProfile />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
