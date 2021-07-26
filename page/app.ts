const Highcharts = require('highcharts/highcharts');
const HttpRequest = require('./request');

localStorage.setItem("kucoin", JSON.stringify([]));
localStorage.setItem("binance", JSON.stringify([]));


interface Credential {
    apiKey: string,
    apiSecret: string,
    apiPassphrase: string
}

interface Component {
    element: string;
    type: string;
    name?: string;
    placeholder?: string;
    className?: string;
}
function createElement(config: Component) {
    let element = document.createElement(`${config.element}`);
    let key: keyof Component;
    for (key in config) {
        element.setAttribute(key, `${config[key]}`);
    };
    return element;
}

function clear(): void {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input[type=text]");
    inputs.forEach(element => {
        element.value = "";
    })
}


const select = document.querySelector(".selected-exchange");
let wallet: string = "binance";
select?.addEventListener("change", WalletToggle);

function WalletToggle(): void {
    const input: HTMLElement | null = document.querySelector("input[name=apiPassphrase]");

    if (input?.classList.contains("hide")) {
        wallet = "kucoin";
        input?.classList.remove("hide");

    } else {
        wallet = "binance";
        input?.classList.add("hide");
    }
    clear();
}

const submit = document.forms[0];
submit?.addEventListener("submit", Save);

function Save(evt: Event) {
    evt.preventDefault();
    let credential = getFormData(evt.target as HTMLFormElement) as Credential;
    StoreCredential(credential, wallet);
    clear();
}

async function DrawGraphAsync(body: Credential) {

    let uri = `https://localhost:44396/api/v1/Wallet/${wallet}`;
    let objRequest = new Request(uri, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body)
    })
    await HttpRequest.SendAsync(objRequest)
}


function Chart(container: string, title: string, data: object[]) {
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

function StoreCredential(credential: Credential, wallet: string): void {
    if (!isExists(credential, wallet)) {
        let storage = localStorage.getItem(wallet);


        if (storage) {
            let collection: Credential[] = JSON.parse(storage?.valueOf());
            collection.push(credential);
            localStorage.setItem(wallet, JSON.stringify(collection));
        }
        return;
    }
    console.error("ya existe");

}

function isExists(credential: Credential, storageName: string): Credential | undefined {
    let storage = localStorage.getItem(storageName);
    let collection: Credential[] = JSON.parse(storage ?? "[]");
    if (collection.length > 0) {
        return collection.find(x => x.apiKey == credential.apiKey
            && x.apiSecret == x.apiSecret
            && x.apiPassphrase == credential.apiPassphrase);
    }
}

function getFormData(form: HTMLFormElement): object {
    return Object.fromEntries(new FormData(form).entries());
}

/*async function conversion(cryptoInfo) {
    let data = await apiRequest(cryptoInfo);
    let y = searchData(data, "price", "data"),
        name = searchData(data, "symbol", "data");
    return { name, y };
}
 */

