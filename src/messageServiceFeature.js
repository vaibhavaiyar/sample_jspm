import {inject} from 'aurelia-dependency-injection';
import MessageServiceSdkConfig from './messageServiceSdkConfig';
import {HttpClient} from 'aurelia-http-client'
import MessageView from './messageView';

@inject(MessageServiceSdkConfig, HttpClient)
class MessageServiceFeature {

    _config:MessageServiceSdkConfig;

    _httpClient:HttpClient;

    constructor(config:MessageServiceSdkConfig,
                httpClient:HttpClient) {

        if (!config) {
            throw 'config required';
        }
        this._config = config;

        if (!httpClient) {
            throw 'httpClient required';
        }
        this._httpClient = httpClient;
    }

    /**
     * Greets user
     * @param {string} name
     * @returns a promise of {MessageView[]}
     */
    execute(name:string):Promise<MessageView> {

        return this._httpClient
            .createRequest('message')
            .asGet()
            .withBaseUrl(this._config.serviceApiBaseUrl)
            //.withHeader('Authorization', `Bearer ${accessToken}`)
            .withParams({
                name: name
            })
            .send()
            .then(response => new MessageView(message)
            );
    }
}

export default MessageServiceFeature;