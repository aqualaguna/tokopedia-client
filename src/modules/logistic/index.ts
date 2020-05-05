import BaseModule from "../BaseModules";
import handleReject from "../../helper/handleReject";
import PickupResponse from "./response/PickupResponse";
import GetShipmentInfo from "./response/GetShipmentInfo";

export default class LogisticModule extends BaseModule {
  /**
   * You can request pick up using this endpoint.
   * @param order_id order unique identifier
   * @param shop_id shop unique identifier
   * @param request_time Request time of the pick up. eg. "2018-06-12 10:24:00"
   */
  pickup(order_id :number, shop_id: number, request_time: string) : Promise<PickupResponse> {
    let url = `/inventory/v1/fs/${this.fs_id}/pick-up`;
    return this.client.post(url,{
      shop_id,
      order_id,
      request_time
    }, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

   /**
   * This endpoint is return html page that can be use to print shipping label for specific order.
   * Shipping label can be seen after order status is on process (400).
   * Shipping label contain Booking Code as barcode that can be scanned by Third-Party Logistic for automatic AWB.
   * @param order_id order unique identifier
   * @param printed 0 or 1. Default value is 1. When flag set to 1 then the seller dashboard will show the order as already printed.
   */
  printShippingLabel(order_id :number, printed: number = 1) : Promise<any> {
    let url = `/v1/order/${order_id}/fs/${this.fs_id}/shipping-label`;
    url += `?printed=${printed}`
    return this.client.get(url, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data;
    }).catch(handleReject);
  }

  /**
   * This endpoint can retrieve all available shipment information
   * @param shop_id shop unique identifier
   */
  getShipmentInfo(shop_id :number) : Promise<GetShipmentInfo[]> {
    let url = `/v2/logistic/fs/${this.fs_id}/info`;
    url += `?shop_id=${shop_id}`
    return this.client.get(url, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

  /**
   * This endpoint can retrieve all available shipment information
   * @param shop_id shop unique identifier
   * @param body Lets take a look for example at below json :
   * {
   *  "1":{
   *    "6":0
   *   },
   * }
   * 
   * Below are the detail explanation for the json format :
   * - "1" represent shipper_id. In this case shipper_id 1 is JNE
   * - "6" represent service_id. Every shipment has one or more service_id to perform shipment operation. In this case service_id 6 is YES service from JNE
   * -  0 represent deactivate shipment, if want to activate shipment then use 1
   */
  updateShipmentInfo(shop_id :number, body: any) : Promise<any> {
    let url = `/v2/logistic/fs/${this.fs_id}/update`;
    url += `?shop_id=${shop_id}`
    return this.client.post(url,body, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

}