export default class Interceptor {
    /**
     * 
     * @param {Object} options 
     */
    constructor(interceptFunction, postRequest = true, preRequest = false) {
        this.interceptFunction=interceptFunction;
        this.preRequest = preRequest;
        this.postRequest = postRequest;
    }

    

}