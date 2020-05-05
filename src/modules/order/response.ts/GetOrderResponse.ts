import { OrderStatusCode } from "../request/GetOrderRequest";


export interface OrderItem {
  id: number,
  name: string,
  quantity: number,
  notes: string,
  weight: number,
  total_weight: number,
  price: number,
  total_price: number,
  currency: string,
  sku: string,
  is_wholesale: boolean
}

export interface FulfilledItem {
  product_id: number,
  quantity_deliver: number,
  quantity_reject: number,
}

export interface SummaryPromoItem {
  name: string,
  is_coupon: boolean,
  show_cashback_amount: boolean,
  show_discount_amount: boolean,
  cashback_amount: number,
  cashback_points: number,
  type: string,
  discount_amount: number,
  invoice_desc: string
}

export default interface GetOrderResponse {
  fs_id: string,
  order_id: number,
  is_cod_mitra: boolean,
  accept_partial: boolean,
  invoice_ref_num: string,
  products: OrderItem[],
  products_fulfilled: FulfilledItem[],
  device_type: string,
  buyer: {
    id: number,
    name: string,
    phone: string,
    email: string,
  },
  shop_id: number,
  payment_id: number,
  recipient: {
    name: string,
    phone: string,
    address: {
      address_full: string,
      district: string,
      city: string,
      province: string,
      country: string,
      postal_code: string,
      district_id: number,
      city_id: number,
      province_id: number,
      geo: string,
    }
  },
  logistics: {
    shipping_id: number,
    district_id: number,
    city_id: number,
    province_id: number,
    geo: string,
    shipping_agency: string,
    service_type: string,
  },
  amt: {
    ttl_product_price: number,
    shipping_cost: number,
    insurance_cost: number,
    ttl_amount: number,
    voucher_amount: number,
    toppoints_amount: number,
  },
  dropshipper_info: any,
  voucher_info: {
    voucher_code: string,
    voucher_type: number
  },
  order_status: OrderStatusCode,
  warehouse_id: number,
  fulfull_by: number,
  create_time: number,
  custom_fields: {
    awb: string,
  },
  promo_order_detail: {
    order_id: number,
    total_cashback: number,
    total_discount: number,
    summary_promo: SummaryPromoItem[],
  }


}