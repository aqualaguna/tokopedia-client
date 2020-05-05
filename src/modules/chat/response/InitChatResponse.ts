export default interface InitChatResponse {
  contact: {
    id: number,
    role: string,
    attributes: {
      name: string,
      tag: string,
      thumbnail: string,
      is_gold: boolean,
      is_official: boolean
    }
  },
  is_success: boolean,
  msg_id: number
}