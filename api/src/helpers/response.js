const failed = message => ({ success: false, result: null, message })

const success = result => ({ result, success: true, message: 'successful' })

export default {
  success,
  failed
}
