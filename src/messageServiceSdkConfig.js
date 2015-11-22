/**
 * @class {MessageServiceSdkConfig}
 */
export default class MessageServiceSdkConfig {

    _serviceApiBaseUrl:string;

    /**
     * @param {string} serviceApiBaseUrl
     */
    constructor(serviceApiBaseUrl:string) {

        if (!serviceApiBaseUrl) {
            throw 'serviceApiBaseUrl required';
        }
        this._serviceApiBaseUrl = serviceApiBaseUrl;

    }

    /**
     * @returns {string}
     */
    get serviceApiBaseUrl():string {
        return this._serviceApiBaseUrl;
    }

}