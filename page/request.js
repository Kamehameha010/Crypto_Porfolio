"use strict";
const Highcharts = require('highcharts/highcharts');
Array.prototype.groupBy = function (propertyName) {
    let map = new Map(), groups = [];
    this.forEach(item => {
        let key = item[propertyName];
        if (map.has(key)) {
            let elm = map.get(key);
            elm.push(item);
            map.set(key, elm);
        }
        else {
            map.set(key, [item]);
        }
    });
    for (const it of Array.from(map)) {
        groups.push(Object.defineProperty(new Object(), it[0], {
            value: it[1],
            enumerable: true,
            writable: false
        }));
    }
    return groups;
};
class Chart {
    constructor(container, title, data) {
        this.renderChart(container, title, data);
    }
    renderChart(container, title, data) {
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
class HttpRequest {
    static async SendAsync(objRequest) {
        const request = await fetch(objRequest);
        const data = await request.json();
        return data;
    }
}
class Wallet {
    constructor(data) {
        this.cryptos = [];
        this.prices = [];
        this.seriesData = [];
        this.GetTokens(data);
    }
    async Converter(amount, from, to = "USD") {
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
        });
        return await HttpRequest.SendAsync(objRequest);
    }
    toNumber(value) {
        return Number.parseInt(value);
    }
    toFloat(value, fixed) {
        let number = Number(value);
        return fixed ? Number(number.toFixed(fixed)) : number;
    }
}
class WalletKucoin extends Wallet {
    constructor(data, container, title) {
        super(data);
        this.container = container;
        this.title = title;
        this.Render();
    }
    GetCapital() {
        throw new Error("Method not implemented.");
    }
    GetTokens(tokens) {
        this.cryptos = tokens.data.filter(x => x.balance !== "0")
            .map(t => {
            let currency = t.currency, holds = this.toFloat(t.holds.toString(), 7), balance = this.toFloat(t.balance.toString(), 7), available = this.toFloat(t.available.toString(), 7), type = t.type;
            return { currency, balance, available, holds, type };
        });
        console.log("groupbu", this.cryptos.groupBy("currency"));
    }
    Render() {
        const series = this.cryptos.map((token) => {
            let { currency: name, balance: y } = token;
            y = parseFloat(y.toFixed(7));
            return { name, y };
        });
        new Chart(this.container, this.title, series);
    }
}
class WalletBinance extends Wallet {
    constructor(data, container, title) {
        super(data);
        this.container = container;
        this.title = title;
        this.Render();
    }
    GetCapital() {
        throw new Error("Method not implemented.");
    }
    GetTokens(tokens) {
        this.cryptos = tokens.filter(x => x.free != "0" || x.locked != "0")
            .map(x => {
            let coin = x.coin, free = this.toFloat(x.free.toString(), 7), locked = this.toFloat(x.locked.toString(), 7), balance = free + locked;
            return { coin, free, locked, balance };
        });
    }
    Render() {
        const series = this.cryptos.map((token) => {
            let { coin: name, balance: y } = token;
            y = parseFloat(y.toFixed(7));
            return { name, y };
        });
        new Chart(this.container, this.title, series);
    }
}
function SearchKey(object, key, initKey) {
    if (initKey) {
        object = object[initKey];
    }
    if (object.hasOwnProperty(key)) {
        return object[key];
    }
    Object.values(object)
        .filter(x => typeof x === "object")
        .forEach(val => {
        let obj = SearchKey(val, key);
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
