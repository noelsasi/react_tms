import { useDispatch, useSelector } from 'react-redux'
import UpdateProfile from '../../../../custom/Forms/UpdateProfile'
import React from 'react'
import {
  fetchUserProfile,
  updateUserProfile,
} from '../../slices/dashboardSlice'

function Profile() {
  const dispatch = useDispatch()
  const { userProfile: user } = useSelector(state => state.dashboard)

  const handleFileUpload = async event => {
    const profilePicFile = event.target.files[0]
    if (!profilePicFile) return null // If no file is selected, return null

    const formData = new FormData()
    formData.append('file', profilePicFile)
    formData.append('upload_preset', 'scholarVault')

    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dyenwfhtf/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      )

      const data = await response.json()

      if (data.secure_url) {
        // return data.secure_url // Return the image URL to be added to formFields
        dispatch(
          updateUserProfile(
            {
              ...user,
              firstname: user.firstName,
              lastname: user.lastName,
              profilePic: data.secure_url,
            },
            'admin'
          )
        )
      } else {
        alert('File upload failed, please try again.')
        return null
      }
    } catch (error) {
      console.error('Error uploading file:', error)
      alert('An error occurred during the file upload.')
      return null
    }
  }

  React.useEffect(() => {
    dispatch(fetchUserProfile('admin'))
  }, [])

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
                          <img
                            src={
                              user.profilePic?.includes('scholarvault.com')
                                ? '/dash/images/profile/pic1.jpg'
                                : user.profilePic
                            }
                            alt="img"
                          />
                          <div
                            className="upload-link"
                            data-bs-toggle="tooltip"
                            data-placement="right"
                            data-original-title="update"
                          >
                            <input
                              type="file"
                              className="update-flie"
                              onChange={handleFileUpload}
                            />
                            <i className="fa fa-camera" />
                          </div>
                        </div>
                        <br />
                        <br />
                        <div className="author-info">
                          <h6 className="title">{user.firstName}</h6>
                          <span>{user.role}</span>
                        </div>
                      </div>
                    </div>
                    <div className="info-list">
                      <ul>
                        <li>
                          Fisrt Name<span>{user.firstName}</span>
                        </li>
                        <li>
                          Last Name<span>{user.lastName}</span>
                        </li>
                        <li>
                          DOB
                          <span>{new Date(user.dob).toLocaleDateString()}</span>
                        </li>
                        <li>
                          Gender<span>{user.gender}</span>
                        </li>
                        <li>
                          Phone No<span>{user.phone}</span>
                        </li>
                        <li>
                          Email<span>{user.email}</span>
                        </li>
                        <li>
                          Joined
                          <span>
                            {new Date(user.joined).toLocaleDateString()}
                          </span>
                        </li>
                        <li>
                          Thesis<span>{user.thesesCount}</span>
                        </li>
                        <li>
                          Downloads<span>{user.downloadsCount}</span>
                        </li>
                        <li>
                          Address<span>{user.address}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">Update Profile</h6>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <UpdateProfile user={user} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
