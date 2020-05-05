import BaseModule from "../BaseModules";
import handleReject from "../../helper/handleReject";
import { GetProductInfoResponse } from "./response/GetProductInfoResponse";
import getProductByShopRequest from "./request/getProductByShopRequest";
import getAllProductRequest from "./request/getAllProductRequest";
import GetAllProductResponse from "./response/GetAllProductResponse";
import getAllActiveProductsRequest from "./request/getAllActiveProductsRequest";
import GetAllActiveProductResponse from "./response/GetAllActiveProductResponse";
import CreateProductRequest from "./request/CreateProductRequest";
import CreateProductResponse from "./response/CreateProductResponse";
import CheckCreateStatusResponse from "./response/CheckCreateStatusResponse";
import UpdateProductRequest from "./request/UpdateProductRequest";
import UpdateProductResponse from "./response/UpdateProductResponse";
import SetActiveResponse from "./response/SetActiveResponse";
import SetInactiveResponse from "./response/SetInactiveResponse";
import DeleteProductResponse from "./response/DeleteProductResponse";
import UpdatePriceResponse from "./response/UpdatePriceResponse";
import UpdatePriceRequest from "./request/UpdatePriceRequest";
import UpdateStockRequest from "./request/UpdateStockRequest";
import UpdateStockResponse from "./response/UpdateStockResponse";
import GetVariantByCategoryResponse from "./response/GetVariantByCategoryResponse";
import GetEtlaseResponse from "./response/GetEtlaseResponse";

export default class ProductModule extends BaseModule {
  /**
   * This method will retrieve single product information by product id or product url as parameter (choose one of those two parameters to use) from related fs_id
   * @param product_id Can input more than one product_id
   * @param product_url Can input more than one product_url
   */
  getProductInfo(product_id? :number[], product_url?: string[]) : Promise<GetProductInfoResponse[]> {
    let url = `/inventory/v1/fs/${this.fs_id}/product/info`;
    if (product_id) {
      url += '?' + product_id.map(t => `product_id=${t}`).join('&')
    } else if(product_url) {
      url += '?' + product_url.map(t => `product_url=${t}`).join('&')
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
   * This method will retrieve single product information by product id or product url as parameter (choose one of those two parameters to use) from related fs_id
   * @param product_id Can input more than one product_id
   * @param product_url Can input more than one product_url
   */
  getProductById(product_id :number) : Promise<any> {
    let url = `https://tome.tokopedia.com/v3/product/${product_id}?opt=edit&cache=clear&use_real_stock=true`;
    return this.client.get(url).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

  /**
   * This method will retrieve single product information by product sku from related fs_id
   * @param sku Product’s SKU
   */
  getProductBySku(sku :string) : Promise<GetProductInfoResponse[]> {
    let url = `/inventory/v1/fs/${this.fs_id}/product/info?sku=${sku}`;
    return this.client.get(url, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }


  /**
   * This is the new version of Get All Products V1, which adds sku field to the product object.
   * @param request
   */
  getAllProduct(request :getAllProductRequest) : Promise<GetAllProductResponse> {
    let url = `/v2/products/fs/${this.fs_id}/${request.page}/${request.per_page}`;
    if (request.product_id) {
      url += `?product_id=${request.product_id}`;
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
   * This endpoint retrieves a list of active products related to shop_id.
   * @param request
   */
  getAllActiveProduct(request :getAllActiveProductsRequest) : Promise<GetAllActiveProductResponse> {
    let url = `/inventory/v1/fs/${this.fs_id}/product/list`;
    return this.client.get(url, {
      params: request,
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }


  /**
   * This method will retrieve all product information from related shop id that associate with fs id. This method also support pagination pages.
   * To get list of shop id that associate with fs id, we can use this endpoint Get Shop Info
   * @param request
   */
  getProductByShop(request :getProductByShopRequest) : Promise<GetProductInfoResponse> {
    let url = `/inventory/v1/fs/${this.fs_id}/product/info?`;
    url += `shop_id=${request.shop_id}`;
    url += `&page=${request.page}`;
    url += `&per_page=${request.per_page}`;
    if (request.sort) {
      url += `&sort=${request.sort}`;
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
   * use this method to create new product
   * @param request
   */
  createProduct(request :CreateProductRequest) : Promise<CreateProductResponse> {
    let url = `/v2/products/fs/${this.fs_id}/create?`;
    url += `shop_id=${request.shop_id}`;
    // url = `/inventory/v1/fs/${this.fs_id}/product/create?shop_id=${request.shop_id}`
    return this.client.post(url, request, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

  /**
   * use this method to update product
   * @param request
   */
  updateProduct(request :UpdateProductRequest) : Promise<UpdateProductResponse> {
    let url = `/v2/products/fs/${this.fs_id}/edit?`;
    url += `shop_id=${request.shop_id}`;
    return this.client.post(url, request, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }



  /**
   * use this method to check operatin status
   * @param shop_id Unique identifier number for shop.
   * @param upload_id Unique identifier number for process operation.
   */
  checkStatus(shop_id :number, upload_id: number) : Promise<CheckCreateStatusResponse> {
    let url = `/v2/products/fs/${this.fs_id}/status/${upload_id}?`;
    url += `shop_id=${shop_id}`;
    return this.client.get(url, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

  /**
   * This endpoint use to set product into active without change product current stock.
   * @param shop_id Unique identifier number for shop.
   * @param product_id Unique identifier number for product in array.
   */
  setActiveProduct(shop_id :number, product_id: number[]) : Promise<SetActiveResponse> {
    let url = `/v1/products/fs/${this.fs_id}/active?`;
    url += `shop_id=${shop_id}`;
    return this.client.post(url, {
      product_id
    }, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

  /**
   * This endpoint use to set product into inactive without change product current stock.
   * @param shop_id Unique identifier number for shop.
   * @param product_id Unique identifier number for product in array.
   */
  setInactiveProduct(shop_id :number, product_id: number[]) : Promise<SetInactiveResponse> {
    let url = `/v1/products/fs/${this.fs_id}/inactive?`;
    url += `shop_id=${shop_id}`;
    return this.client.post(url, {
      product_id
    }, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

  /**
   * This endpoint use to delete product from a shop.
   * @param shop_id Unique identifier number for shop.
   * @param product_id Unique identifier number for product in array.
   */
  deleteProduct(shop_id :number, product_id: number[]) : Promise<DeleteProductResponse> {
    let url = `/v3/products/fs/${this.fs_id}/delete?`;
    url += `shop_id=${shop_id}`;
    return this.client.post(url, {
      product_id
    }, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

  /**
   * This endpoint used for update products’ price. You can update up to 100 products or SKUs in a single request to this endpoint.
   * @param request
   */
  updateProductPrice(request: UpdatePriceRequest) : Promise<UpdatePriceResponse> {
    let url = `/inventory/v1/fs/${this.fs_id}/price/update?`;
    url += `shop_id=${request.shop_id}`;

    return this.client.post(url, request.update_details, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

   /**
   * This endpoint used for update products’ stock. You can update up to 100 products or SKUs in a single request to this endpoint.
   * @param request
   */
  updateProductStock(request: UpdateStockRequest) : Promise<UpdateStockResponse> {
    let url = `/inventory/v1/fs/${this.fs_id}/stock/update?`;
    url += `shop_id=${request.shop_id}`;
    return this.client.post(url, request.update_details, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

  /**
   * get recommendation category
   * @param title the product name
   */
  getCategoryRecommend(title: string) : Promise<any> {
    let url = `https://gql.tokopedia.com/graphql`;
    let params = [{"operationName":"jarvisRecommendation","variables":{"productName": title},"query":"query jarvisRecommendation($productName: String) {\n  getJarvisRecommendation(product_name: $productName) {\n    categories {\n      id\n      name\n      __typename\n    }\n    __typename\n  }\n}\n"}]
    return this.client.post(url, params).then(d => {
      return d.data[0].data.getJarvisRecommendation.categories;
    }).catch(handleReject);
  }

  /**
   * get variant by category
   * @param category_id category unique identifier.
   */
  getVariantByCategory(category_id: number) : Promise<GetVariantByCategoryResponse[]> {
    let url = `inventory/v1/fs/${this.fs_id}/category/get_variant?cat_id=${category_id}`;
    return this.client.get(url, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

   /**
   * get variant by product
   * @param product_id product unique identifier.
   */
  getVariantByProduct(product_id: number) : Promise<any> {
    let url = `inventory/v1/fs/${this.fs_id}/product/variant/${product_id}`;
    return this.client.get(url, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data;
    }).catch(handleReject);
  }

  /**
   * get etalase by shop
   * @param shop_id shop unique identifier.
   */
  getEtalase(shop_id: number) : Promise<GetEtlaseResponse> {
    let url = `inventory/v1/fs/${this.fs_id}/product/etalase?shop_id=${shop_id}`;
    return this.client.get(url, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }



}