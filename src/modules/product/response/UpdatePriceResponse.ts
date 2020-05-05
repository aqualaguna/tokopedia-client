export interface FailedRow {
  product_id: number,
  sku: string,
  product_url: string,
  new_price: number,
  message: string,
}

export default interface UpdatePriceResponse {
  failed_rows: number,
  failed_rows_data: FailedRow[],
  succeed_rows: number
}