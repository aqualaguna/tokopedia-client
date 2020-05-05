
export interface CellItem {
  cpc_shop_sum: number,
  trans_sum: number,
  cpc_prod_sum: number,
  sold_sum: number,
  date: number,
  view_sum: number
}

export default interface GetShopPerformanceResponse {
  summary: {
    cpc_prod_sum: number,
    cpc_shop_sum: number,
    trans_sum: number,
    sold_sum: number,
    view_sum: number
  },
  cells: CellItem[],
  status: string,
  error_message: string[]
}