
export enum ShopAction {
  Open = 'open',
  Close = 'close'
}

export default interface UpdateShopStatusRequest {
  shop_id: number,
  /**
   * Update shop status. Value between “open” or “close”
   */
  action: ShopAction,
  /**
   * Required for action : close . Format Date YYYYMMDD
   */
  start_date?: string,
  /**
   * Required for action : close . Format Date YYYYMMDD
   */
  end_date?: string,
  /**
   * Required for action : close. Value between “true” or “false. If true, then immediately close shop & ignore start_date’s date. If False. then it will follows start_date’s schedule to close
   */
  close_note?: string,
  
}