

let { HRequest, WKucoin, WBinance } = require('./request');

window.addEventListener("load", () => {
    if (!GetDataStorage("Kucoin")) {
        localStorage.setItem("kucoin", JSON.stringify([]));
    }
    if (!GetDataStorage("binance")) {
        localStorage.setItem("binance", JSON.stringify([]));
    }
})

const kucoinRequests: Promise<any>[] = [];
const binanceRequests: Promise<any>[] = [];

interface Credential {
    apiKey: string,
    apiSecret: string,
    apiPassphrase?: string
}

interface Component {
    element: string;
    id?: string;
    type?: string;
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


const select = document.querySelector(".selected-exchange") as HTMLSelectElement;

select?.addEventListener("change", WalletToggle);

function WalletToggle(): void {
    const input = document.querySelector("input[name=apiPassphrase]") as HTMLInputElement;

    if (input?.classList.contains("hide")) {
        input?.classList.remove("hide");

    } else {
        input?.classList.add("hide");
    }
    clear();
}

const submit = document.forms[0];
submit?.addEventListener("submit", Save);

const walletOptions = document.querySelector(".wallet-options");
walletOptions?.addEventListener("click", async (evt) => {
    SelectedOption(evt)
})

function Save(evt: Event) {
    evt.preventDefault();
    let wallet: string = select?.value;

    let credential = GetFormData(evt.target as HTMLFormElement) as Credential;
    StoreCredential(credential, wallet);
    clear();
}

function StoreCredential(credential: Credential, wallet: string): void {
    if (!IsExists(credential, wallet)) {
        let credentials = GetDataStorage(wallet) ?? [];
        credentials.push(credential);
        SetDataStorage(wallet, credentials);
        return;
    }
    console.error("ya existe");

}

function IsExists(credential: Credential, storageName: string): boolean {

    let collection = GetDataStorage(storageName) ?? [];
    if (collection.length > 0) {
        return collection.find(findVal(credential)) ? true : false;
    }
    return false;
}
function findVal(credential: Credential): (old: Credential) => boolean {

    return function (old: Credential) {
        return old.apiKey == credential.apiKey
            && old.apiSecret == credential.apiSecret
            && old.apiPassphrase == credential.apiPassphrase
    }
}
function GetFormData(form: HTMLFormElement): object {
    return Object.fromEntries(new FormData(form).entries());
}

function GetDataStorage(wallet: string): Credential[] | undefined {
    let storage = localStorage.getItem(wallet);
    return JSON.parse(storage ?? "[]");
}
function SetDataStorage(wallet: string, credentials: Credential[]): void {
    let serialize = JSON.stringify(credentials);
    localStorage.setItem(wallet, serialize);
}
/*async function conversion(cryptoInfo) {
    let data = await apiRequest(cryptoInfo);
    let y = searchData(data, "price", "data"),
        name = searchData(data, "symbol", "data");
    return { name, y };
}
 */

async function SendRequestAsync(wallet: string, body: Credential): Promise<any> {

    let uri = `http://localhost:8190/api/v1/Wallet/${wallet}`;
    let objRequest = new Request(uri, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body)
    })
    return await HRequest.SendAsync(objRequest)
}

async function WalletRequestAsync(wallet: string): Promise<any[]> {
    let collection = GetDataStorage(wallet) as Credential[];
    let arrPromise = collection?.map(async (credential) => await SendRequestAsync(wallet, credential));
    return await Promise.all(arrPromise);
}

async function AllWalletRequestAsync(): Promise<[any[], any[]]> {
    return await Promise.all([WalletRequestAsync("binance"), WalletRequestAsync("kucoin")]);
}

async function SelectedOption(evt: Event) {
    let { id: target } = evt.target as HTMLInputElement;
    let divCount = 0;
    let chartContainer = document.querySelector(".highcharts-figure");
    switch (target) {
        case "all":
            console.log(await AllWalletRequestAsync())
            break;
        case "binance":
            for await (const iterator of await WalletRequestAsync("binance")) {
                let id = `chart-binance-n${++divCount}`;
                let subContainer = createElement({ element: "div", id: id });
                chartContainer?.appendChild(subContainer);
                new WBinance(iterator, id, "Portfolio");
            }

            break;
        case "kucoin":
            for (const iterator of await WalletRequestAsync("kucoin")) {
                let id = `chart-kucoin6-n${++divCount}`;
                let subContainer = createElement({ element: "div", id: id });
                chartContainer?.appendChild(subContainer);
                new WKucoin(iterator, id, "Portfolio");
            }
            break;
    }
    divCount = 0;
}



/* localStorage.setItem("clicks", JSON.stringify([]));
let nuevo: Array<HTMLElement | HTMLInputElement | HTMLDivElement | HTMLButtonElement | HTMLSelectElement | HTMLOptionElement> = [];
window.addEventListener("click", e => {
    console.clear()
    let element = e.target as HTMLElement
    nuevo.push(element);
    let name = element.nodeName
    let y: keyof typeof element
    for (y in element) {

        if (typeof element[y] === "string" && element[y] != "") {
            console.table(y + "--->" + element[y]);

        }
    }

}) */