import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  listWrapper: {
    color: 'rgba(214, 10, 46)',
    padding: '5px',
    marginBottom: '5px'
  },
  listItem: {
    listStyleType: 'none',
    fontSize: '13px'
  }
})

const ErrorMessage = ({ networkError, message }) => {
  const classes = useStyles()
  const serverMessage = message && message.split('-')
  const networkErrorMessage = networkError && 'Network error occured. Try again.'
  let messages
  if (serverMessage) {
    messages = [...serverMessage, networkErrorMessage]
  } else {
    messages = [networkErrorMessage]
  }

  return (
    <ul className={classes.listWrapper}>
      {messages.map((message, i) => (<li className={classes.listItem} key={i}>{message}</li>))}
    </ul>
  )
}

export default ErrorMessage
