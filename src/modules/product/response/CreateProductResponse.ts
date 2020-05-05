export default interface CreateProductResponse {
  /**
   *  check the status through GET /v2/products/fs/:fs_id/status/:upload_id or get notified when upload is complete using webhook url field product_creation_url by registering through Webhook Registration Endpoint.
   */
  upload_id: number,
}