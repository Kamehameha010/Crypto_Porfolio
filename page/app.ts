const Highcharts = require('highcharts/highcharts');
let r = require('./request');
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

    let uri = `https://localhost:44396/api/v1/Wallet/${wallet}`;
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
    switch (target) {
        case "all":
            console.log(await AllWalletRequestAsync())
            break;
        case "binance":
            console.log(new WBinance(await WalletRequestAsync("binance")))
            break;
        case "kucoin":
            console.log(new WKucoin(await WalletRequestAsync("kucoin")))
            break;
    }
}






