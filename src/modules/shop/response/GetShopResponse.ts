
export enum ShopStatus {
  Deleted = 0,
  Open = 1,
  Closed = 2,
  Moderated = 3,
  Inactive = 4,
  ModeratedPermanently = 5,
  Incubate = 6,
  ScheduleActive = 7

}

export default interface GetShopResponse {
  /**
   * Shop ID
   */
  shop_id: number,
  /**
   * User ID
   */
  user_id: number,
  /**
   * Shop Name
   */
  shop_name: string,
  /**
   * Shop Logo
   */
  logo: string,
  /**
   * Shop Link URL
   */
  shop_url: string,
  /**
   * Shop Open Status. 0 : Closed, 1 : Open
   */
  is_open: number,
  /**
   * Shop Status. 0 : Deleted, 1 : Open, 2 : Closed, 3 : Moderated, 4 : Inactive, 5 : Moderated Permanently, 6 : Incubate, 7 : Schedule Active
   */
  status: ShopStatus,
  /**
   * created date string format
   */
  date_shop_created: string,
  /**
   * shop domain name
   */
  domain: string,
  /**
   * shop admin/ owner id
   */
  admin_id: number[],
  /**
   * reason for closing shop
   */
  reason: string,
}