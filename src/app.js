import MessageServiceSdk, {MessageServiceSdkConfig} from './index';
const messageServiceSdkConfig = new MessageServiceSdkConfig("https://api.github.com/");
const messageServiceSdk = new MessageServiceSdk(messageServiceSdkConfig);
messageServiceSdk.reposForUser('Vaibhavaiyar').then( response => console.log(response));