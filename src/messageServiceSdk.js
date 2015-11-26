import MessageServiceSdkConfig from './messageServiceSdkConfig';
import DiContainer from './diContainer';
import MessageView from './messageView';
import MessageServiceFeature from './messageServiceFeature';

/**
 * @class {MessageServiceSdk}
 */
export default class MessageServiceSdk {

    _diContainer:DiContainer;

    /**
     * @param {MessageServiceSdkConfig} config
     */
    constructor(config:MessageServiceSdkConfig) {

        this._diContainer = new DiContainer(config);

    }

    reposForUser(name:String):Promise<MessageView> {

        return this
            ._diContainer
            .get(MessageServiceFeature)
            .execute(name);
    }

}
