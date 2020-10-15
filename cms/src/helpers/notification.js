const defaultNotificationConfig = Object.freeze({
  insert: 'top',
  container: 'top-right',
  animationIn: ['animated', 'fadeIn'],
  animationOut: ['animated', 'fadeOut'],
  dismiss: {
    duration: 3000,
    pauseOnHover: true
  },
  showIcon: true
})

export const success = (message) => ({
  ...defaultNotificationConfig,
  title: 'Successful!',
  message: message,
  type: 'success'
})

export const failed = (message) => ({
  ...defaultNotificationConfig,
  title: 'Failed',
  message,
  type: 'danger'
})
