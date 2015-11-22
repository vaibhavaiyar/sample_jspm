/**
 * @class {MessageView}
 */
export default class MessageView {

    _message:string;

    /**
     * @param {string} message
     */
    constructor(message) {

        if (!message) {
            throw new TypeError('message required');
        }
        this._message = message;
    }

    /**
     * @returns {string}
     */
    get message():string {
        return this._message;
    }
}