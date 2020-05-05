
export interface HeaderResponse {
  process_time: number,
  messages: String,
  reason: String,
  error_code: Number
}

export default interface DefaultResponseFormat {
  header: {

  },
  data: any
}