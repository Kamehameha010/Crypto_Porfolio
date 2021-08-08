var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var HttpRequest = /** @class */ (function () {
    function HttpRequest() {
    }
    HttpRequest.SendAsync = function (objRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var request, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(objRequest)];
                    case 1:
                        request = _a.sent();
                        return [4 /*yield*/, request.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return HttpRequest;
}());
var Wallet = /** @class */ (function () {
    function Wallet(data) {
        this.cryptos = [];
        this.GetTokens(data);
    }
    Wallet.prototype.Converter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Wallet.prototype.toNumber = function (value) {
        return Number.parseInt(value);
    };
    Wallet.prototype.toFloat = function (value, fixed) {
        var number = Number(value);
        return fixed ? Number(number.toFixed(fixed)) : number;
    };
    return Wallet;
}());
var WalletKucoin = /** @class */ (function (_super) {
    __extends(WalletKucoin, _super);
    function WalletKucoin(data) {
        return _super.call(this, data) || this;
    }
    WalletKucoin.prototype.GetCapital = function () {
        throw new Error("Method not implemented.");
    };
    WalletKucoin.prototype.GetTokens = function (tokens) {
        var _this = this;
        this.cryptos = tokens.map(function (x) {
            var data = x.data;
            return data.filter(function (x) { return x.balance !== "0"; })
                .map(function (t) {
                var currency = t.currency, holds = _this.toFloat(t.holds, 7), balance = _this.toFloat(t.balance, 7), available = _this.toFloat(t.available, 7), type = t.type;
                return { currency: currency, balance: balance, available: available, holds: holds, type: type };
            });
        });
    };
    return WalletKucoin;
}(Wallet));
var WalletBinance = /** @class */ (function (_super) {
    __extends(WalletBinance, _super);
    function WalletBinance(data) {
        return _super.call(this, data) || this;
    }
    WalletBinance.prototype.GetCapital = function () {
        throw new Error("Method not implemented.");
    };
    WalletBinance.prototype.GetTokens = function (tokens) {
        var _this = this;
        this.cryptos = tokens.map(function (t) {
            return t.filter(function (x) { return x.free != "0" || x.locked != "0"; })
                .map(function (x) {
                var coin = x.coin, free = _this.toFloat(x.free, 7), locked = _this.toFloat(x.locked, 7), balance = free + locked;
                return { coin: coin, free: free, locked: locked, balance: balance };
            });
        });
    };
    return WalletBinance;
}(Wallet));
function SearchKey(object, key, initKey) {
    if (initKey) {
        object = object[initKey];
    }
    if (object.hasOwnProperty(key)) {
        return object[key];
    }
    Object.values(object)
        .filter(function (x) { return typeof x === "object"; })
        .forEach(function (val) {
        var obj = SearchKey(val, key);
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
