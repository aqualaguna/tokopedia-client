export default interface UpdateShopStatusResponse {
  header: {
    process_time: number,
    Messages: string,
    reason: string,
    error_code: string
},
data: string
}