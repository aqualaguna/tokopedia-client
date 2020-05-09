import axios, { AxiosInstance } from 'axios';
import defaultConfig, { TokopediaClientConfig } from './config';
import InvalidConfigError from './error/InvalidConfigError';
import ProductModule from './modules/product';
import ChatModule from './modules/chat';
import LogisticModule from './modules/logistic';
import OrderModule from './modules/order';
import ShopModule from './modules/shop';
import StatisticModule from './modules/statistic';
import WebhookModule from './modules/webhook';
import UnknownError from './error/response/UnknownError';
import UnauthorizedError from './error/response/UnauthorizedError';

export interface AuthenticateResponse {
    access_token: string,
    expires_in: number,
    token_type: string,
}

export default class TokopediaClient {
    
    
    protected client: AxiosInstance;
    protected config: TokopediaClientConfig = defaultConfig;
    protected token!: AuthenticateResponse;
    product!: ProductModule;
    chat!: ChatModule;
    logistic!: LogisticModule;
    order!: OrderModule;
    shop!: ShopModule;
    statistic!: StatisticModule;
    webhook!: WebhookModule;
    
    private ready: boolean = false;
    
    isReady() {
        return this.ready;
    }

    constructor(config: TokopediaClientConfig) {
        Object.assign(this.config, config);
        this.validateConfig();
        this.client = axios.create({
            baseURL: this.config.staging ? 'https://fs-staging.tokopedia.com' : 'https://fs.tokopedia.net',
            timeout: 5000,
        });
    }

    private initialize () {
        this.product = new ProductModule(this.client, this.config.fs_id, this.token);
        this.chat = new ChatModule(this.client, this.config.fs_id, this.token);
        this.logistic = new LogisticModule(this.client, this.config.fs_id, this.token);
        this.order = new OrderModule(this.client, this.config.fs_id, this.token);
        this.shop = new ShopModule(this.client, this.config.fs_id, this.token);
        this.statistic = new StatisticModule(this.client, this.config.fs_id, this.token);
        this.webhook = new WebhookModule(this.client, this.config.fs_id, this.token);
        this.ready = true;
    }

    validateConfig () {
        if (!this.config.client_id) {
            throw new InvalidConfigError("Client Id is not set!");
        }
        if (!this.config.fs_id) {
            throw new InvalidConfigError("Fullfilment Service Id is not set!");
        }

        if (!this.config.client_secret) {
            throw new InvalidConfigError("Client Secret is not set!");
        }
    }

    async authenticate() : Promise<AuthenticateResponse>{
        let base_url: string;
        if(typeof this.config.staging == 'boolean') {
            base_url = this.config.staging ? 'https://accounts-staging.tokopedia.com': 'https://accounts.tokopedia.com';
        } else {
            base_url = 'https://accounts.tokopedia.com';
        }
        console.log()
        let result = await this.client.post( base_url + '/token?grant_type=client_credentials', {}, {
            auth: {
                username: this.config.client_id,
                password: this.config.client_secret
            }
        }).then(d => {
            let data = d.data;
            if (data.error) {
                throw new UnauthorizedError(`${data.error}: ${data.error_description}`)
            }
            this.token = d.data;
            this.initialize();
            return d.data;
        }) as AuthenticateResponse;
        return result;
    }
}