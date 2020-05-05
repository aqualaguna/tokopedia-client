
export interface ShipmentService {
  service_id: number,
  service_name: string,
  service_desc: string,
}

export default interface GetShipmentInfo {
  shipper_id: number,
  shipper_name: string,
  logo: string,
  services: ShipmentService[],
}