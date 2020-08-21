const JsonResponse = (success, data = [], message = 'Successful') => {
  return { success, data, message }
}

const failed = message => ({ success: false, data: null, message })

const success = data => ({ data, success: true, message: 'Successful' })

export default {
  JsonResponse,
  success,
  failed
}
