import { enqueueSnackbar } from 'notistack'

const showToast = ({ type, message = 'success', component, persist }) => {
  if (!message || typeof message !== 'string') {
    return
  }

  enqueueSnackbar({
    variant: type,
    message,
    autoHideDuration: 3000,
    action: component,
    persist,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    },
  })
}

export default showToast
