import BaseModule from "../BaseModules";
import handleReject from "../../helper/handleReject";
import GetShopResponse from "./response/GetShopResponse";
import UpdateShopStatusRequest from "./request/UpdateShopStatusRequest";
import UpdateShopStatusResponse from "./response/UpdateShopResponse";

export default class ShopModule extends BaseModule {
  /**
   * This endpoint returns shop information from shop_id that associated with fs_id.
   * @param shop_id shop unique identifier
   */
  getShopInfo(shop_id? :number) : Promise<GetShopResponse[]> {
    let url = `/v1/shop/fs/${this.fs_id}/shop-info`;
    if (shop_id) {
      url += '?shop_id=' + shop_id
    }
    return this.client.get(url, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

  /**
   * This endpoint to update shop status into open or close.
   * @param request 
   */
  updateShopStatus(request: UpdateShopStatusRequest) : Promise<UpdateShopStatusResponse> {
    let url = `/v1/shop/fs/${this.fs_id}/shop-info`;
    return this.client.post(url, {
      ...request
    }, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }
}