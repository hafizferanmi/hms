import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import notification from 'cogo-toast'
import useAsyncFn from '../../hooks/useAsyncFn'
import {
  disableStaff as disableStaffAPI
} from '../../helpers/api'
import { notify } from '../../helpers/notification'
import {
  updateStaffDetails as updateStaffAction
} from '../../redux/actions/staff'
import CheckIcon from '@material-ui/icons/CheckCircleOutline'
import CrossIcon from '@material-ui/icons/HighlightOff'

const DisableStaffButton = ({ staff }) => {
  const staffId = staff._id
  const disabled = staff.disabled
  const dispatch = useDispatch()
  const {
    response,
    executeFn: disableStaff
  } = useAsyncFn(disableStaffAPI)

  useEffect(() => {
    if (response && response.success) {
      const disableMessage = disabled
        ? `Staff with name "${staff.name}" enabled successfully`
        : `Staff with name "${staff.name}" disabled successfully`
      dispatch(updateStaffAction(response.result))
      notification.success(...notify(disableMessage))
    } else if (response && !response.success) {
      notification.error(...notify(response.message))
    }
    // eslint-disable-next-line
  }, [response])

  const handleDisableStaff = () => {
    disableStaff(staffId, { disabled: !disabled })
  }

  const Component = disabled ? CheckIcon : CrossIcon

  return (
    <div>
      <Component onClick={handleDisableStaff} />
    </div>
  )
}

export default DisableStaffButton
