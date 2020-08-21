const normalizePhoneNumber = phoneNo => {
  if (phoneNo.startsWith('+234') || phoneNo.startsWith('234')) {
    const normalizedPhoneNumber = phoneNo.replace('+', '').replace('234', '0')
    return normalizedPhoneNumber
  } else {
    return phoneNo
  }
}

export default {
  normalizePhoneNumber
}
