const JsonResponse = (success, result = [], message = 'Successful') => {
  return { success, result, message }
}

const failed = message => ({ success: false, result: null, message })

const success = result => ({ result, success: true, message: 'Successful' })

export default {
  JsonResponse,
  success,
  failed
}
