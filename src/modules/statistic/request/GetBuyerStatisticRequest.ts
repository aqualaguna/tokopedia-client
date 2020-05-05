
export enum BuyerSortType {
  Ascending = 3,
  Descending = 5
}

export enum BuyerSortBy {
  Transaction = 3,
  ProfitThenTransaction = 4,
  Product = 5,
  Profit = 7
}

export default interface GetBuyerStatisticRequest {
  shop_id: number,
  /**
   * Show only buyers data with transaction date until the start_date.
   */
  start_date: number,
  /**
   * Show only buyers data with transaction date until the end_date.
   */
  end_date: number,
  /**
   * Total data shown in one response.
   */
  page_size: number,
  /**
   * Sort Data for Top Buyer responses. 3 (transaction), 4 (profit, then transaction), 5 (product), 7 (profit)
   */
  sort_by: BuyerSortBy,
  /**
   * Sort Type for Top Buyer responses.3 (ascending), 5 (descending)
   */
  sort_type: BuyerSortType,
}