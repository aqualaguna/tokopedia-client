
export interface PaginationRequest {
  page: number,
  per_page: number,
}

export default interface getAllProductRequest extends PaginationRequest {
  product_id?: number,
}