export default interface RegisterWebhookRequest {
  order_actions_url: string,
  order_notification_url: string,
  order_cancellation_url: string,
  order_status_url: string,
  order_confirm_delivery_notification_url: string,
  order_request_cancellation_url: string,
  chat_notification_url: string,
  product_creation_url: string,
  webhook_secret: string
}