
export enum ProductOrderByOption {
  ByPromo = 1,
  ByLowestPrice = 3,
  ByHighestPrice = 4,
  ByHighestRating = 5,
  ByHighestTransaction = 8,
  ByNewest = 9,
  ByLatesUpdate = 10,
  ByPosition = 11,
  ByName = 12,
  ByViewCount = 13,
  ByItemSold = 14,
  ByReviewCount = 15,
  ByDiscussionCount = 16,
  ByBestMatch = 23
}

export default interface getAllActiveProductsRequest {
  /**
   * For every fs_id that related to more than one shop_id, request must contain shop_id.
   */
  shop_id: number,
  /**
   * The total number of products to be shown.
   */
  rows: number,
  /**
   * Show results from n-th product.
   */
  start: number,
  /**
   * Product sort options. The default value is sort by name. Available values includes: 1 by promo, 3 by lowest price, 4 by highest price, 5 by highest rating, 8 by highest transaction, 9 by newest, 10 by latest update, 11 by position, 12 by name, 13 by view count, 14 by item sold, 15 by review count, 16 by discussion count, and 23 by best match.
   */
  order_by?: ProductOrderByOption,
  /**
   * Search by keyword (case insensitive).
   */
  keyword?: string,
  /**
   * Keyword to be excluded from search.
   */
  exclude_keyword?: string,
  /**
   * Search by SKU.
   */
  sku?: string,
  /**
   * Show only product with the minimum price of price_min. Valid value is 1 to 500.000.000.
   */
  price_min?: number,
  /**
   * Show only product with the maximum price of price_max. Valid value is 1 to 500.000.000.
   */
  price_max?: number,
  /**
   * Show only preorder products.
   */
  preorder?: boolean,
  /**
   * Show only products with free return.
   */
  free_return?: boolean,
  /**
   * Show only wholesale products.
   */
  wholesale?: boolean,

}