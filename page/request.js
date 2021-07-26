"use strict";
class HttpRequest {
    static async SendAsync(objRequest) {
        const request = await fetch(objRequest);
        const data = await request.json();
        return data;
    }
}
class WalletKucoin {
    constructor(data) {
    }
    GetCapital(data) {
        throw new Error("Method not implemented.");
    }
}
class WalletBinance {
    constructor(data) {
    }
    GetCapital(data) {
        throw new Error("Method not implemented.");
    }
}
function SearchKey(object, key, initKey) {
    if (initKey) {
        object = object[initKey];
    }
    if (object.hasOwnProperty(key)) {
        return object[key];
    }
    const values = Object.values(object).map(x => typeof x === "object");
    if (values) {
        values.forEach(val => {
            object = SearchKey(val, key) ?? {};
        });
    }
    return object;
}
