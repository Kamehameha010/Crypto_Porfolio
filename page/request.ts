import { log, timeLog } from "console";
import { url } from "inspector";

class HttpRequest {

    static async SendAsync(objRequest: Request) {
        const request: Response = await fetch(objRequest);
        const data: object = await request.json();
        return data;
    }
}



interface ResponseKucoin {
    code?: string;
    data: [{
        id?: string;
        currency: string;
        type: string;
        balance: string | number;
        available: string | number;
        holds: string | number;
    }];
}

interface ResponseBinance {
    coin: string;
    depositAllEnable?: boolean;
    free: string | number;
    freeze?: string;
    ipoable?: string;
    ipoing?: string;
    isLegalMoney?: boolean;
    locked: string | number;
    name?: string;
    networkList?: object[];
    storage?: string;
    trading?: boolean;
    withdrawAllEnable?: boolean;
    withdrawing?: string;
    balance?: number;

}


interface IFormattterConverter {
    toNumber(value: string): number
    toFloat(value: string, fixed?: number): number
}

type Data = (ResponseBinance | ResponseKucoin) | (ResponseBinance | ResponseKucoin)[] | (ResponseBinance | ResponseKucoin)[][]


abstract class Wallet implements IFormattterConverter {

    protected cryptos: Data = [];
    protected prices = [];
    protected seriesData = [];


    constructor(data: Data) {
        this.GetTokens(data);
    }
    abstract GetCapital(): object;
    abstract GetTokens(tokens: Data): void;
    abstract Render(): void;

    async Converter(amount: number, from: string, to: string = "USD") {
        let objRequest = new Request("http://cryptodata.somee.com/api/conversion", {
            method: "POST",
            body: JSON.stringify({
                baseUrl: "https://sandbox-api.coinmarketcap.com",
                endpoint: "v1/tools/price-conversion",
                params: {
                    amount: amount,
                    convert: from,
                    to: to,
                }
            })
        })
        return await HttpRequest.SendAsync(objRequest);
    }

    toNumber(value: string): number {
        return Number.parseInt(value);
    }
    toFloat(value: string, fixed?: number): number {
        let number = Number(value);
        return fixed ? Number(number.toFixed(fixed)) : number;
    }
}

class Chart {

    constructor(container: string, title: string, data: object[]) {
        this.renderChart(container, title, data);
    }

    private renderChart(container: string, title: string, data: object[]) {
        Highcharts.chart(container, {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: title
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: data
            }]
        });
    }
}

class WalletKucoin extends Wallet {

    constructor(data: ResponseKucoin[]) {
        super(data);
    }
    GetCapital(): object {
        throw new Error("Method not implemented.");
    }
    GetTokens(tokens: ResponseKucoin[]): void {

        this.cryptos = tokens.map(x => {
            let { data } = x;
            return data.filter(x => x.balance !== "0")
                .map(t => {
                    let currency = t.currency, holds = this.toFloat(t.holds.toString(), 7),
                        balance = this.toFloat(t.balance.toString(), 7), available = this.toFloat(t.available.toString(), 7), type = t.type;
                    return { currency, balance, available, holds, type };
                });
        });

    }
    Render(): void {
        throw new Error("Method not implemented.");
    }
}


class WalletBinance extends Wallet {
    constructor(data: ResponseBinance[][]) {
        super(data);
    }
    GetCapital(): object {
        throw new Error("Method not implemented.");
    }
    GetTokens(tokens: ResponseBinance[][]): void {
        this.cryptos = tokens.map(t => {
            return t.filter(x => x.free != "0" || x.locked != "0")
                .map(x => {
                    let coin = x.coin, free = this.toFloat(x.free.toString(), 7), locked = this.toFloat(x.locked.toString(), 7),
                        balance = free + locked;
                    return { coin, free, locked, balance }
                });
        });
    }

    Render(): void {

    }

    async Process() {

        t
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



module.exports = {
    HRequest: HttpRequest,
    WKucoin: WalletKucoin,
    WBinance: WalletBinance
};


