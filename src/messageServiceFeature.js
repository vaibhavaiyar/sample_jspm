import {inject} from 'aurelia-dependency-injection';
import {HttpClient} from 'aurelia-http-client';
import MessageServiceSdkConfig from './messageServiceSdkConfig';
import MessageView from './messageView';

//@inject(MessageServiceSdkConfig, HttpClient)
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

    static inject() {
        return [MessageServiceSdkConfig, HttpClient];
    }

    /**
     * Greets user
     * @param {string} name
     * @returns a promise of {MessageView[]}
     */
    execute(name:String):Promise<MessageView[]> {

        return this._httpClient
            .createRequest('users/' + name + '/repos')
            .asGet()
            .withBaseUrl(this._config.serviceApiBaseUrl)
            .send()
            .then(response =>
                   Array.from(
                              response.content, item =>
                              new MessageView(item.name)
                             )
                 );
    }
}

export default MessageServiceFeature;
