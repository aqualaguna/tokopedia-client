
export enum AttachmentType {
  NoAttachment = 0,
  Image = 2,
  PDF = 17,
  CustomQuotation = 19,
}

export default interface SendReplyRequest {
  msg_id: number,
  shop_id: number,
  message: string,
  attachment_type: AttachmentType,
  payload: any,
  file_path: string,
}