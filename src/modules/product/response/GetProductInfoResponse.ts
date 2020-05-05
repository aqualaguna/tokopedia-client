import DefaultResponseFormat from "../../general/DefaultResponseFormat";

export interface BasicItemData {
  /**
   * unique identifier for product
   */
  productID: number,
  /**
   * unique id for shop
   */
  shopID: number,
  status: number,
  name: string,
  mustInsurance: boolean,
  condition: number,
  childCategoryID: number,
  shortDesc: string
}
export interface PriceData {
  value: number,
  currency: number,
  LastUpdateUnix: number,
  idr: number
}

export interface WeightData {
  value: number,
  unit: number,
}

export interface StockData {
  useStock: boolean,
  value: number,
  stockWording: string,
}

export interface CategoryTreeChild {
  id: number,
  name: string,
  title: string,
  breadcrumbURL: string
}

export interface WarehouseItemData {
  productID: number,
  warehouseID: number,
  price: PriceData,
  stock: {
    useStock: boolean,
    value: number
  }
}

export interface PictureData {
  picID: number,
  fileName: string,
  filePath: string,
  status: number,
  OriginalURL: string,
  ThumbnailURL: string,
  width: number,
  height: number,
  URL300: string
}

export interface GetProductInfoResponse {
  basic: BasicItemData,
  price: PriceData,
  weight: WeightData,
  stock: StockData,
  variant: any,
  menu: any,
  preorder: any,
  extraAttribute: any,
  categoryTree: CategoryTreeChild[],
  pictures: PictureData[],
  GMStats: {
    transactionReject: number,
  },
  stats: {
    countView: number,
  },
  other: any,
  campaign: any,
  warehouses: WarehouseItemData[],
}