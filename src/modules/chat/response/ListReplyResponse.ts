export default interface ListReplyResponse {
  msg_id: number,
  sender_id: number,
  role: string,
  msg: string,
  reply_time: number,
  reply_id: number,
  sender_name: string,
  read_status: number,
  read_time: number,
  status: number,
  attachment_id: number,
  message_is_read: boolean,
  is_opposite: boolean,
  is_first_reply: boolean,
  is_reported: boolean
}