import BaseModule from "../BaseModules";
import handleReject from "../../helper/handleReject";
import GetOrderRequest from "./request/GetOrderRequest";
import GetOrderResponse from "./response.ts/GetOrderResponse";
import GetSingleOrderResponse from "./response.ts/GetSingleOrderResponse";
import AcceptOrderRequest from "./request/AcceptOrderRequest";
import AcceptOrderResponse from "./response.ts/AcceptOrderResponse";
import RejectOrderRequest from "./request/RejectOrderRequest";
import RejectOrderResponse from "./response.ts/RejectOrderResponse";
import UpdateOrderStatusRequest from "./request/UpdateOrderStatusRequest";
import UpdateOrderStatusResponse from "./response.ts/UpdateOrderStatusResponse";

export default class OrderModule extends BaseModule {
  /**
   * This endpoint retrieves all orders for your shop between given timestamps. This endpoint retrieves all orders for your shop between given timestamps.
   * NOTES : This endpoint only can pull orders with 3 days interval between from_date and to_date
   * @param request
   */
  getOrder(request: GetOrderRequest) : Promise<GetOrderResponse[]> {
    let url = `/v2/order/list?fs_id=${this.fs_id}&from_date=${request.from_date}&to_date=${request.to_date}&page=${request.page}&per_page=${request.per_page}`;
    if (request.shop_id) {
      url += `&shop_id=${request.shop_id}`
    }
    if (request.warehouse_id) {
      url += `&warehouse_id=${request.warehouse_id}`
    }
    if (request.status) {
      url += `&status=${request.status}`
    }
    return this.client.get(url, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data;
    }).catch(handleReject);
  }

  /**
   * This endpoint retrieves single orders for your shop between given order id or invoice ref number.
   * if string its invoice id else its order id
   * @param id Note : For Query order_id and invoice_num, user must choose one of those queries to retrieve order information
   */
  getSingleOrder(id: number|string) : Promise<GetSingleOrderResponse> {
    let url = `/v2/fs/${this.fs_id}/order`;
    if(typeof id == 'string') {
      url += `?invoice_num=${encodeURIComponent(id)}`;
    } else {
      url += `?order_id=${id}`;
    }
    return this.client.get(url, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data;
    }).catch(handleReject);
  }

  /**
   * Acknowledge the order (fully or partially accept the order).
   * @param request 
   */
  acceptOrder(request: AcceptOrderRequest) : Promise<AcceptOrderResponse> {
    let url = `/v1/order/${request.order_id}/fs/${this.fs_id}/ack`;
    return this.client.post(url, {
      ...request
    }, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data;
    }).catch(handleReject);
  }

  /**
   * Negative acknowledge the order (reject the order).
   * @param request 
   */
  rejectOrder(request: RejectOrderRequest) : Promise<RejectOrderResponse> {
    let url = `/v1/order/${request.order_id}/fs/${this.fs_id}/nack`;
    return this.client.post(url, {
      ...request
    }, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data;
    }).catch(handleReject);
  }

   /**
   * This endpoint updates the order status of an order_id.
   * @param request 
   */
  updateStatus(request: UpdateOrderStatusRequest) : Promise<UpdateOrderStatusResponse> {
    let url = `/v1/order/${request.order_id}/fs/${this.fs_id}/status`;
    return this.client.post(url, {
      ...request
    }, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data;
    }).catch(handleReject);
  }

}