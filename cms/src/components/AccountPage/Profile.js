import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { STAFF_ROLES_LABEL } from '../../constants/staff'
import useAsyncFn from '../../hooks/useAsyncFn'
import { uploadProfileImage as uploadProfileImageAPI, API_BASE_URL } from '../../helpers/api'
import useNotify from '../../hooks/useNotify'
import useCurrentStaff from '../../hooks/useCurrentStaff'
import { setProfileImage } from '../../redux/actions/staff'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 40
  },
  avatar: {
    height: 100,
    width: 100
  },
  nameText: {
    // fontSize: 30
    textTransform: 'capitalize',
    marginTop: 10,
    marginBottom: 10
  },
  fileUploader: {
    display: 'none'
  },
  uploadButton: {
    cursor: 'pointer',

    '& > label': {
      cursor: 'pointer'
    }
  }
}))

const Profile = ({ className, ...rest }) => {
  const classes = useStyles()
  const staff = useCurrentStaff()

  const {
    error: serverError,
    loading: submitting,
    response,
    executeFn: uploadProfileImage
  } = useAsyncFn(uploadProfileImageAPI)

  const handleSelectFile = (event) => {
    const formData = new window.FormData()
    formData.append('dp', event.target.files[0])
    uploadProfileImage(formData)
  }

  useNotify({
    message: 'Profile image uploaded successfully',
    action: setProfileImage,
    response
  })

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          alignItems='center'
          display='flex'
          flexDirection='column'
        >
          <Avatar
            className={classes.avatar}
            src={`${API_BASE_URL}/${staff.displayImage}`}
          />
          <Typography
            color='textPrimary'
            className={classes.nameText}
            gutterBottom
            variant='h3'
          >
            {staff.name}
          </Typography>
          <Typography
            color='textSecondary'
            variant='body1'
          >
            {staff.email}
          </Typography>
          <Typography
            className={classes.dateText}
            color='textSecondary'
            variant='body1'
          >
            {STAFF_ROLES_LABEL[staff.role]}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          className={classes.uploadButton}
          color='primary'
          fullWidth
          variant='text'
        >
          <label htmlFor='file-uploader'>Upload picture</label>
        </Button>
      </CardActions>
      <input onChange={handleSelectFile} type='file' id='file-uploader' className={classes.fileUploader} />
      {submitting && <div>Updating profile picture</div>}
      {serverError && <div>An error occured on the server, refresh and try again.</div>}
    </Card>
  )
}

Profile.propTypes = {
  className: PropTypes.string
}

export default Profile
