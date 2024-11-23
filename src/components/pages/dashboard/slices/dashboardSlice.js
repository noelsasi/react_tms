import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import showToast from '../../../../lib/showToast'

const initialState = {
  loading: false,
  userProfile: {},
  error: null,
  thesisData: [],
  usersList: [],
  peersList: [],
  formSubmitting: false,
  guidelinesList: [],
  dashboardData: [],
  notifications: [],
  comments: [],
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setUserInfo: (state, action) => {
      state.userProfile = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },

    setThesisData: (state, action) => {
      state.thesisData = action.payload
    },

    setUsersList: (state, action) => {
      state.usersList = action.payload
    },

    setPeersList: (state, action) => {
      state.peersList = action.payload
    },

    setFormSubmitting: (state, action) => {
      state.formSubmitting = action.payload
    },

    setGuidelinesList: (state, action) => {
      state.guidelinesList = action.payload
    },

    setDashboardData: (state, action) => {
      state.dashboardData = action.payload
    },

    setNotifications: (state, action) => {
      state.notifications = action.payload
    },

    setComments: (state, action) => {
      state.comments = action.payload
    },
  },
})

export const {
  setLoading,
  setUserInfo,
  setError,
  setThesisData,
  setUsersList,
  setPeersList,
  setFormSubmitting,
  setGuidelinesList,
  setDashboardData,
  setNotifications,
  setComments,
} = dashboardSlice.actions

export const dashboardReducer = dashboardSlice.reducer

export const fileUploadHandler = async (
  file,
  upload_preset = 'scholarVault'
) => {
  if (!file) return null

  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', upload_preset)

  try {
    const response = await fetch(
      'https://api.cloudinary.com/v1_1/dyenwfhtf/auto/upload',
      {
        method: 'POST',
        body: formData,
      }
    )

    const data = await response.json()

    if (data.secure_url) {
      return data.secure_url
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

export const fetchUsers = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/admin/user')
    dispatch(setUsersList(data))
  } catch (error) {
    console.log('Error fetching users:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'Error fetching users',
    })
  }
}

export const createUser = (data, cb) => async dispatch => {
  try {
    dispatch(setFormSubmitting(true))
    const { data: response } = data.id
      ? await axios.put('/api/admin/user/' + data.id, data)
      : await axios.post('/api/admin/user', data)

    console.log('response', response)

    if (response) {
      if (cb) cb()
      dispatch(fetchUsers())
      showToast({
        type: 'success',
        message: response.message,
      })
    }
  } catch (error) {
    console.log('Error creating user:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  } finally {
    dispatch(setFormSubmitting(false))
  }
}

export const deleteUser = (id, cb) => async dispatch => {
  try {
    const response = await axios.delete('/api/admin/user/' + id)
    if (response.data) {
      dispatch(fetchUsers())
      showToast({
        type: 'success',
        message: response.data.message,
      })
      if (cb) cb()
    }
  } catch (error) {
    console.log('Error deleting user:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  }
}

export const fetchUserProfile =
  (role = 'admin') =>
  async dispatch => {
    try {
      const response = await axios.get(`/api/${role}/profile`, {
        withCredentials: true,
      })
      dispatch(setUserInfo(response.data))
    } catch (error) {
      console.error('Error fetching user profile:', error)
    }
  }

export const updateUserProfile =
  (data, role = 'guest') =>
  async dispatch => {
    try {
      const response = await axios.post(`/api/${role}/profile`, data, {
        withCredentials: true,
      })

      if (response.data) {
        dispatch(fetchUserProfile(role))
        showToast({
          type: 'success',
          message: response.data.message,
        })
      }
    } catch (error) {
      console.error('Error updating user profile:', error)
    }
  }

export const fetchAllThesis = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/admin/thesis')
    dispatch(setThesisData(data))
  } catch (error) {
    console.log('Error fetching theses:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  }
}

export const createThesis = (data, cb) => async (dispatch, getState) => {
  try {
    const { userInfo } = getState().auth
    dispatch(setFormSubmitting(true))
    const response = data.thesis_id
      ? await axios.put('/api/admin/thesis/' + data.thesis_id, data)
      : await axios.post('/api/admin/thesis', data)
    if (response.data) {
      dispatch(fetchAllThesis())

      // Trigger notification for thesis creation/update
      const notificationData = {
        message: `A thesis "${data.title}" has been ${
          data.thesis_id ? 'updated' : 'created'
        }`,
        type: 'thesis',
        user_id: userInfo.id,
      }
      dispatch(triggerNotification(notificationData))

      showToast({
        type: 'success',
        message: `Thesis ${
          data.thesis_id ? 'updated' : 'created'
        } successfully`,
      })
      if (cb) cb()
    }
  } catch (error) {
    console.log('Error creating thesis:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  } finally {
    dispatch(setFormSubmitting(false))
  }
}

export const deleteThesis = (thesis_id, cb) => async dispatch => {
  try {
    const response = await axios.delete('/api/admin/thesis/' + thesis_id)
    if (response.data) {
      if (cb) cb()
      dispatch(fetchAllThesis())
      showToast({
        type: 'success',
        message: 'Thesis deleted successfully',
      })
    }
  } catch (error) {
    console.log('Error deleting thesis:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  }
}

export const fetchPeers = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/admin/peerreview')
    dispatch(setPeersList(data))
  } catch (error) {
    console.log('Error fetching peers:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  }
}

export const createPeerReview = (data, cb) => async (dispatch, getState) => {
  const { userInfo } = getState().auth
  const payload = {
    title: data.title,
    review: data.review,
    review_date: data.review_date,
    status: data.status,
    reviewer_email: data.reviewer_email,
    thesis_id: data.thesis_id,
  }

  try {
    dispatch(setFormSubmitting(true))
    const response = data.id
      ? await axios.put('/api/admin/peerreview/' + data.id, payload)
      : await axios.post('/api/admin/peerreview', payload)

    if (response.data) {
      dispatch(fetchPeers())

      // Trigger notification for peer review creation/update
      const notificationData = {
        message: `A new peer review has been ${
          data.id ? 'updated' : 'added'
        } for thesis "${data.title}"`,
        type: 'review',
        user_id: userInfo.id,
      }
      dispatch(triggerNotification(notificationData))

      showToast({
        type: 'success',
        message: `Peer review ${data.id ? 'updated' : 'created'} successfully`,
      })
      if (cb) cb()
    }
  } catch (error) {
    console.log('Error creating peer review:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  } finally {
    dispatch(setFormSubmitting(false))
  }
}

export const deletePeerReview = (id, cb) => async dispatch => {
  try {
    const response = await axios.delete('/api/admin/peerreview/' + id)
    if (response.data) {
      dispatch(fetchPeers())
      showToast({
        type: 'success',
        message: 'Peer review deleted successfully',
      })
      if (cb) cb()
    }
  } catch (error) {
    console.log('Error deleting peer review:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  }
}

export const fetchGuidelines = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/admin/guidelines')
    dispatch(setGuidelinesList(data))
  } catch (error) {
    console.log('Error fetching guidelines:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  }
}

export const createGuideline = (data, cb) => async (dispatch, getState) => {
  const { userInfo } = getState().auth
  try {
    dispatch(setFormSubmitting(true))
    const { data: response } = data.id
      ? await axios.put('/api/admin/guidelines/' + data.id, data)
      : await axios.post('/api/admin/guidelines', data)

    if (response) {
      if (cb) cb()
      dispatch(fetchGuidelines())

      // Trigger notification for guideline creation/update
      const notificationData = {
        message: `A new guideline has been ${data.id ? 'updated' : 'added'}: "${
          data.title
        }"`,
        type: 'guideline',
        user_id: userInfo.id,
        broadcast: true, // This will notify all users
      }
      dispatch(triggerNotification(notificationData))

      showToast({
        type: 'success',
        message: `Guideline ${data.id ? 'updated' : 'created'} successfully`,
      })
    }
  } catch (error) {
    console.log('Error creating guideline:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  } finally {
    dispatch(setFormSubmitting(false))
  }
}

export const deleteGuideline = (id, cb) => async dispatch => {
  try {
    const response = await axios.delete('/api/admin/guidelines/' + id)
    if (response.data) {
      dispatch(fetchGuidelines())
      showToast({
        type: 'success',
        message: 'Guideline deleted successfully',
      })
      if (cb) cb()
    }
  } catch (error) {
    console.log('Error deleting guideline:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  }
}

export const fetchMyThesis = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true))
    const { userInfo } = getState().auth
    const { data } = await axios.get(`/api/admin/thesis`)
    dispatch(
      setThesisData(data.filter(thesis => thesis.author_id === userInfo.id))
    )
  } catch (error) {
    console.log('Error fetching my theses:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  } finally {
    dispatch(setLoading(false))
  }
}

export const submitThesis = (data, cb) => async dispatch => {
  try {
    dispatch(setFormSubmitting(true))
    const response = await axios.post('/api/scholar/submit_thesis', data)

    if (response.data) {
      dispatch(fetchMyThesis())
      showToast({
        type: 'success',
        message: 'Thesis submitted successfully',
      })
      if (cb) cb()
    }
  } catch (error) {
    console.log('Error submitting thesis:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  } finally {
    dispatch(setFormSubmitting(false))
  }
}

export const searchThesis = data => async dispatch => {
  try {
    const { data: response } = await axios.post('/api/admin/search', data)
    dispatch(setThesisData(response.theses))
  } catch (error) {
    console.log('Error searching thesis:', error)
  }
}

export const fetchDashboardData = () => async (dispatch, getState) => {
  const { userInfo } = getState().auth
  const role = ['admin', 'scholar'].includes(userInfo.role.role_name)
    ? 'admin'
    : 'user'
  try {
    const { data } = await axios.get('/api/dashboard/' + role, {
      withCredentials: true,
    })
    dispatch(setDashboardData(data))
  } catch (error) {
    console.log('Error fetching dashboard data:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  }
}

export const fetchNotifications = () => async dispatch => {
  try {
    const response = await axios.get('/api/notifications')
    if (response.data) {
      dispatch(setNotifications(response.data))
    }
  } catch (err) {
    console.log('err', err)
    showToast({
      type: 'error',
      message: err.response?.data?.message || 'An error occurred',
    })
  }
}

export const triggerNotification = data => async dispatch => {
  try {
    const response = await axios.post('/api/notifications', data)

    if (response.data) {
      dispatch(fetchNotifications())
    }
  } catch (error) {
    console.log('Error triggering notification:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  }
}

export const fetchComments = thesis_id => async dispatch => {
  try {
    const { data } = await axios.get(`/api/comments?thesis_id=${thesis_id}`)
    dispatch(setComments(data))
  } catch (error) {
    console.log('Error fetching comments:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  }
}

export const addComment = (data, cb) => async (dispatch, getState) => {
  try {
    dispatch(setFormSubmitting(true))
    const response = await axios.post('/api/comments', data)

    if (response.data) {
      dispatch(fetchComments(data.thesis_id))
      showToast({
        type: 'success',
        message: 'Comment added successfully',
      })
      if (cb) cb()
    }
  } catch (error) {
    console.log('Error adding comment:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  } finally {
    dispatch(setFormSubmitting(false))
  }
}

export const updateComment = (id, data, cb) => async dispatch => {
  try {
    dispatch(setFormSubmitting(true))
    const response = await axios.put(`/api/comments/${id}`, data)

    if (response.data) {
      dispatch(fetchComments(data.thesis_id))
      showToast({
        type: 'success',
        message: 'Comment updated successfully',
      })
      if (cb) cb()
    }
  } catch (error) {
    console.log('Error updating comment:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  } finally {
    dispatch(setFormSubmitting(false))
  }
}

export const deleteComment = (id, thesis_id, cb) => async dispatch => {
  try {
    const response = await axios.delete(`/api/comments/${id}`)
    if (response.data) {
      dispatch(fetchComments(thesis_id))
      showToast({
        type: 'success',
        message: 'Comment deleted successfully',
      })
      if (cb) cb()
    }
  } catch (error) {
    console.log('Error deleting comment:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  }
}

export const getIPAddress = async () => {
  const response = await axios.get('https://api.ipify.org?format=json')
  return response.data.ip
}

export const viewThesis = id => async dispatch => {
  try {
    const ipAddress = await getIPAddress()
    await axios.post(`/api/misc/view`, {
      thesisId: id,
      ipAddress: ipAddress,
    })
  } catch (error) {
    console.log('Error viewing thesis:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  }
}

export const downloadThesis = id => async () => {
  try {
    const ipAddress = await getIPAddress()
    const response = await axios.post(`/api/misc/download`, {
      thesisId: id,
      ipAddress: ipAddress,
    })
    if (response.data) {
      showToast({
        type: 'success',
        message: 'Thesis downloaded successfully',
      })
    }
  } catch (error) {
    console.log('Error downloading thesis:', error)
    showToast({
      type: 'error',
      message: error.response?.data?.message || 'An error occurred',
    })
  }
}
