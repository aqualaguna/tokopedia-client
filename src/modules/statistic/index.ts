import BaseModule from "../BaseModules";
import handleReject from "../../helper/handleReject";
import GetShopPerformanceResponse from "./response/GetShopPerformanceResponse";
import GetProductStatisticResponse from "./response/GetProductStatisticResponse";
import GetTransactionStatisticResponse from "./response/GetTransactionStatisticResponse";
import GetBuyerStatisticRequest from "./request/GetBuyerStatisticRequest";
import GetBuyerStatisticResponse from "./response/GetBuyerStatisticResponse";


export default class StatisticModule extends BaseModule {

  /**
   * This endpoint returns total view, total order, total sold, total success transaction, and total view product within the date range provided in the query parameter.
   * @param shop_id shop unique identifier
   * @param start_date Show only transactions with date from the start_date. eg 20190902
   * @param end_date Show only transactions with date until the end_date. eg 20190908
   */
  getShopPerformance(shop_id: number, start_date: number, end_date: number): Promise<GetShopPerformanceResponse> {
    let url = `/v1/statistics/shop_performance/fs/${this.fs_id}/${shop_id}?start_date=${start_date}&end_date=${end_date}`;
    return this.client.get(url, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

   /**
   * This endpoint returns 5 popular products and 5 wishlist products within date range provided.
   * @param shop_id shop unique identifier
   * @param start_date Show only transactions with date from the start_date. eg 20190902
   * @param end_date Show only transactions with date until the end_date. eg 20190908
   * @param pagesize Show total popular product shown.
   */
  getProductStatistic(shop_id: number, start_date: number, end_date: number, pagesize: number): Promise<GetProductStatisticResponse> {
    let url = `/v1/statistics/product-statistics/fs/${this.fs_id}/${shop_id}?start_date=${start_date}&end_date=${end_date}&pagesize=${pagesize}`;
    return this.client.get(url, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }


   /**
   * This endpoint returns total and summary of delivered amount, rejected amount, insurance amount, ship amount, success transaction, delivery transaction, rejected transaction, and top ads amount within date range provided.
   * @param shop_id shop unique identifier
   * @param start_date Show only transactions with date from the start_date. eg 20190902
   * @param end_date Show only transactions with date until the end_date. eg 20190908
   * @param pagesize Total data shown in one response. [FOR response json TransSummary]
   */
  getTransactionStatistic(shop_id: number, start_date: number, end_date: number, pagesize: number): Promise<GetTransactionStatisticResponse> {
    let url = `/v1/statistics/transaction-statistics/fs/${this.fs_id}/${shop_id}?start_date=${start_date}&end_date=${end_date}&pagesize=${pagesize}`;
    return this.client.get(url, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

   /**
   * This endpoint returns the buyer’s location,top buyers, ages, female buyer, and total follower within date range provided.
   * @param request
   */
  getBuyerStatistic(request: GetBuyerStatisticRequest): Promise<GetBuyerStatisticResponse> {
    let url = `/v1/statistics/buyer-statistics/fs/${this.fs_id}/${request.shop_id}`;
    return this.client.get(url, {
      params: request,
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

}