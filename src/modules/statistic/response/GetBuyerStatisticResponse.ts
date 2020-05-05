
export interface TopBuyerDetail {
  d_customer_id: number,
  sex: number,
  customer_name: string,
  transaction: number,
  product: number,
  profit: number
}


export interface TopBuyerLocationDetail {
  d_city_id: number,
  city_name: string,
  user: number,
  transaction: number
}

export interface FollowerItemData {
  id: number,
  name: string,
  url: string,
  photo: string
}

export default interface GetBuyerStatisticResponse {
  buyer_graph: {
    total_buyer: number,
    male_buyer: number,
    female_buyer: number,
    success_trans: number,
    product_sold: number,
    age1: number,
    age2: number,
    age3: number,
    age4: number,
    age5: number,
    diff_total: number,
    date_graph: number[],
    male_graph: number[],
    female_graph: number[],
    total_graph: number[],
    p_date_graph: number[],
    p_male_graph: number[],
    p_female_graph: number[],
    p_total_graph: number[]
  },
  top_buyer: {
    details: TopBuyerDetail[],
    next: string,
    limit: number
  },
  top_buyer_location: {
    details: TopBuyerLocationDetail[],
    next: string,
    limit: number
  },
  follower_information: {
    links: {
      self: string,
      next: string,
      prev: string
    },
    data: {
      list: FollowerItemData[],
      total: number    }
  }
}