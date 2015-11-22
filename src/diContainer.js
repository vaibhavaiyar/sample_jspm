import {Container} from 'aurelia-dependency-injection';
import {HttpClient} from 'aurelia-http-client';
import MessageServiceSdkConfig from './messageServiceSdkConfig';
import MessageServiceFeature from './messageServiceFeature';

/**
 * @class {DiContainer}
 */
export default class DiContainer {

    _container:Container;

    /**
     * @param {MessageServiceSdkConfig} config
     */
    constructor(config:MessageServiceSdkConfig) {

        if (!config) {
            throw 'config required';
        }

        this._container = new Container();

        this._container.registerInstance(MessageServiceSdkConfig, config);
        this._container.autoRegister(HttpClient);

        this._registerFeatures();
    }

    /**
     * Resolves a single instance based on the provided key.
     * @param key The key that identifies the object to resolve.
     * @return Returns the resolved instance.
     */
    get(key:any):any {
        return this._container.get(key);
    }

    _registerFeatures() {
        this._container.autoRegister(MessageServiceFeature);
    }

}
