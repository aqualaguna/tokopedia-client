
export interface TransactionCellItem {
  cpc_shop_sum: number,
  insurance_amt: number,
  success_sum: number,
  ship_amt: number,
  delivered_amt: number,
  rejected_amt: number,
  cpc_prod_sum: number,
  new_sum: number,
  date: number,
  rejected_sum: number,
  delivered_sum: number
}

export default interface GetTransactionStatisticResponse {
  TransGraph: {
    summary: {
      cpc_shop_sum: number,
      insurance_amt: number,
      success_sum: number,
      ship_amt: number,
      delivered_amt: number,
      rejected_amt: number,
      new_sum: number,
      cpc_prod_sum: number,
      rejected_sum: number,
      delivered_sum: number
    },
    cells: TransactionCellItem[],
  },
  TransSummary: {
    summary: {
      rejected_sum: number,
      new_sum: number,
      success_sum: number
    }
  }
}