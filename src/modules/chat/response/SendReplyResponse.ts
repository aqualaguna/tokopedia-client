export default interface SendReplyResponse {
  msg_id: number,
  sender_id: number,
  role: number,
  reply_time: number,
  from: string,
  attachment: {
    quotation_profile: {
      thumbnail: string,
      identifier: string,
      title: string,
      price: string,
      url: string
      }
  },
  fallback_attachment: {
    html: string,
    message: string
  }
}