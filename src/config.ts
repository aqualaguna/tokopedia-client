export interface TokopediaClientConfig {
  fs_id: string,
  client_id: string,
  client_secret: string,
  staging?: boolean
}

const defaultConfig: TokopediaClientConfig = {
  fs_id: '',
  client_id: '',
  client_secret: '',
  staging: false
}

export default defaultConfig