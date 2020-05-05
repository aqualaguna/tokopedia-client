export default interface ListMessageResponse {
  message_key: string,
  msg_id: number,
  attributes: {
    contact: {
      id: number,
      role: string,
      attributes: {
        name: string,
        tag: string,
        thumbnail: string,
      }
    },
    last_reply_msg: string,
    last_reply_time: number,
    read_status: number,
    unreads: number,
    pin_status: number,
    
  }
}