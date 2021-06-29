

""

document.forms[0].addEventListener("submit", e => {
    e.preventDefault();
    let credentials = Object.fromEntries(new FormData(document.forms[0]))
    let queryString = `timestamp=${Date.now()}&recvWindow=60000`

    let objReq = {
        url: "https://api.binance.com",
        endpoint: "sapi/v1/capital/config/getall",
        params: {
            "timestamp": Date.now(),
            "recvWindow": 60000
        },
        api: credentials,
        headers: {
            "X-MBX-APIKEY": credentials["apiKey"]
        }
    }
    console.log();
    let api = "https://localhost:44396/api/binance"
    fetch(api, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(objReq)
    }).then(r => r.json())
        .then(async (d) => {
            console.log(d);
            let cryptos = d.filter(x => x.free != 0);
            cryptos = cryptos.map(async function (x) {
                return await conversion({ symbol: x.coin, amount: parseFloat(x.free) + parseFloat(x.locked), convert: "USD" })
            });
            let ss = await Promise.resolve(Promise.all(cryptos))

            let money = ss.map(x=> x.y).reduce((acc,cur)=> acc+= cur)
            
            document.querySelector(".highcharts-description").textContent = `Capital:$${money}`
            printData(ss)
        })
})

/* "XUi5YncD1UqXyzZio8urvCEuWJyo1byUiEVbroT8jJR3jsd7ymPYoeLq7kjgwcgZ"
"rqQkTnb9uycOytKfoqhRNP54TvSyiqaduNmfwTyEHXgbWggB8XVnZ0TUSAb4m8JZ" */
function printData(data) {
    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Porfolio'
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
async function conversion(cryptoInfo) {
    let data = await apiRequest(cryptoInfo);
    let y = searchData(data, "price", "data"),
        name = searchData(data, "symbol", "data");
    return { name, y };
}

async function apiRequest(paramRequest) {
    const request = await fetch("http://cryptodata.somee.com/api/conversion", {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({
            baseUrl: "https://sandbox-api.coinmarketcap.com",
            endpoint: "v1/tools/price-conversion",
            params: paramRequest
        })
    });

    return await request.json();
}


function searchData(obj, key, initKey = "") {

    if (obj === null) { return null; }

    if (initKey) {
        obj = obj[initKey];
    }

    if (obj.hasOwnProperty(key)) { return obj[key]; }


    const values = Object.values(obj).filter(x => typeof x === "object");

    if (values) {
        for (const val of values) {

            obj = searchData(val, key);

            if (obj) { return obj; }
        }
    }
    return null;
}
