
export interface VariantUnitValue {
  value_id: Number,
  value: string,
  hex_code: "",
  icon: ""
}

export interface VariantUnit {
  unit_id: number,
  name: string,
  short_name: string,
  value: VariantUnitValue[],
}

export default interface GetVariantByCategoryResponse {
  variant_id: number,
  name: string,
  identifier: string,
  status: number,
  has_unit: number,
  units: VariantUnit[],
}