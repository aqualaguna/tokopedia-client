
export enum SortOption {
  Default = 1,
  NewestProduct = 2,
  LastUpdateProduct = 3,
  ProductName= 4,
  MostViewProduct = 5,
  MostTalkProduct = 6,
  MostReviewProduct =7,
  MostPurchasedProduct = 8,
  LowestPriceProduct = 9,
  HighestPriceProduct = 10,
}

export default interface getProductByShopRequest {
  /**
   * id of the shop
   */
  shop_id: number,
  /**
   * Page (required if shop_id is filled)
   */
  page: number,
  /**
   * Page per item (required if shop_id is filled). Maximun items are 50 for 1 page
   */
  per_page: number,
  /**
   * Sort List Product By available values includes:1 Default, 2 Newest Product, 3 Last Update Product, 4 Product Name, 5 Most View Product, 6 Most Talk Product, 7 Most Review Product, 8 Most Purchased Product, 9 Lowest Price Product, 10 Highest Price Product
   */
  sort?: SortOption,
}