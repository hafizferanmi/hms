const sendFreeTrialOverMail = () => console.log('You free trial is over for now. Your account will be locked out now. Thanks.')

export default {
  time: '* * * * *', // every minute
  task: sendFreeTrialOverMail
}
