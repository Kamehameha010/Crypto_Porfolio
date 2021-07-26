
 module.exports = class HttpRequest {

    static async SendAsync(objRequest: Request) {
        const request: Response = await fetch(objRequest);
        const data: object = await request.json();
        return data;
    }
}


interface IWallet {
    GetCapital(data: object): object;
}


class WalletKucoin implements IWallet {
    constructor(data: object) {

    }
    GetCapital(data: object): object {
        throw new Error("Method not implemented.");
    }
}

class WalletBinance implements IWallet {
    constructor(data: object) {
    }
    GetCapital(data: object): object {
        throw new Error("Method not implemented.");
    }
}

function SearchKey(object: object, key: string, initKey?: keyof typeof object): Object | null {


    if (initKey) {
        object = object[initKey];
    }
    if (object.hasOwnProperty(key)) {
        return object[key as keyof typeof object];
    }
    Object.values(object)
        .filter(x => typeof x === "object")
        .forEach(val => {
            let obj: Object | null = SearchKey(val, key);
            if (obj) {
                return obj;
            }
        });
    return null;
}

