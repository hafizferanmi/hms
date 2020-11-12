const sendHappyNewMonthMessages = () => console.log('Happy new month our esteemed customer. Wink! Wink!!')

export default {
  time: '0 0 1 1-12 *', // every first day of the month
  task: sendHappyNewMonthMessages
}
