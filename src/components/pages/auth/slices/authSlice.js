import { createSlice } from '@reduxjs/toolkit'

import axios from 'axios'
import showToast from '../../../../lib/showToast'

const initialState = {
  loading: false,
  userInfo: {},
  error: null,
  csrfToken: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading(state, action) {
      const _state = state
      _state.loading = action.payload
    },

    setCsrfToken(state, action) {
      const _state = state
      _state.csrfToken = action.payload
    },

    setUserInfo(state, action) {
      const _state = state
      _state.userInfo = action.payload
    },

    setError(state, action) {
      const _state = state
      _state.error = action.payload
    },
  },
})

export const authReducer = authSlice.reducer

export const { setLoading, setUserInfo, setError, setCsrfToken } =
  authSlice.actions

export const fetchCsrfToken = () => async dispatch => {
  try {
    const response = await axios.get('/api/auth/csrf', {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
    dispatch(setCsrfToken(response.data.csrfToken))
  } catch (err) {
    console.error('Error fetching CSRF token:', err)
  }
}

export const fetchSession = cb => async dispatch => {
  try {
    const response = await axios.get('/api/auth/session', {
      withCredentials: true,
    })

    console.log('Session:', response.data.user)
    if (response) {
      dispatch(setUserInfo(response.data.user))
      if (cb) cb(response.data)
    }
  } catch (err) {
    console.error('Error fetching session:', err)
  }
}

export const authenticateUser =
  ({ email, password }, callback) =>
    async (dispatch, getState) => {
      const { csrfToken } = getState().auth

      dispatch(setLoading(true))
      try {
        const response = await axios.post(
          '/api/auth/callback/credentials',
          { csrfToken, email, password },
          { withCredentials: true }
        )

        if (response.data.error) {
          setError(response.data.error)
          return
        }
      } catch (error) {
        console.error(error)
        dispatch(fetchSession(callback))
      } finally {
        dispatch(setLoading(false))
      }
    }

export const sendEmailVerification = (email, callback) => async () => {
  try {
    const response = await axios.post(`/api/auth/sendemail`, { email })
    if (response.data) {
      showToast({
        type: 'success',
        message: response.data.message,
      })
      if (callback) callback()
    }
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const verifyEmail = (token) => async dispatch => {
  dispatch(setLoading(true))
  try {
    const response = await axios.get(`/api/auth/verify?token=${token}`)
    if (response.data) {
      showToast({
        type: 'success',
        message: response.data.message,
      })
      setTimeout(() => {
        window.location.href = '/auth/signin'
      }, 2000)
    }
  } catch (error) {
    console.error(error)
  } finally {
    dispatch(setLoading(false))
  }
}
