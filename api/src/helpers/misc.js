import * as R from 'ramda'

const validateRequestBody = (schema, body) => {
  const { error, value } = schema.validate(body, { abortEarly: false })
  let errorMsg
  if (!R.isNil(error)) {
    errorMsg = error.details.map(detail => detail.message.replace(/"/g, '')).join(', ')
  }
  return { errorMsg, value }
}

export default {
  validateRequestBody
}
