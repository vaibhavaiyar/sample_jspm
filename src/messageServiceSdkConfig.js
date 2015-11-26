/**
 * @class {MessageServiceSdkConfig}
 */
export default class MessageServiceSdkConfig {

    _serviceApiBaseUrl:String;

    /**
     * @param {string} serviceApiBaseUrl
     */
    constructor(serviceApiBaseUrl:String) {

        if (!serviceApiBaseUrl) {
            throw 'serviceApiBaseUrl required';
        }
        this._serviceApiBaseUrl = serviceApiBaseUrl;

    }

    /**
     * @returns {string}
     */
    get serviceApiBaseUrl():String {
        return this._serviceApiBaseUrl;
    }

}