
export interface Etalase {
  id: number,
  name: string,
  uri: string,
  location: string,
}

export default interface GetEtlaseResponse {
  shop: {
    etalase_id: number,
    etalase_name: string,
    uri: string,
  },
  etalase: Etalase[],
}