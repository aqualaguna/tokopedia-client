export interface UploadItem {
  upload_id: number,
  status: string,
  total_data: number,
  unprocessed_rows: number,
  success_rows: number,
  failed_rows: number,
  processed: number
}

export default interface CheckCreateStatusResponse {
  upload_data: UploadItem[],
}