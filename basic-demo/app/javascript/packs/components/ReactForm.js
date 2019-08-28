"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactForm = /** @class */ (function (_super) {
    __extends(ReactForm, _super);
    function ReactForm(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChangeUser = _this.handleChangeUser.bind(_this); // needed to be able to call this.; react team says that's the most performant way
        _this.handleChangeMessage = _this.handleChangeMessage.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.state = {
            user: '',
            message: ''
        };
        return _this;
    }
    ReactForm.prototype.handleChangeUser = function (event) {
        this.setState({ user: event.target.value });
    };
    ReactForm.prototype.handleChangeMessage = function (event) {
        this.setState({ message: event.target.value });
    };
    ReactForm.prototype.handleSubmit = function (event) {
        console.log('submitting');
        event.preventDefault();
        var newMessage = { message: { user: this.state.user, message: this.state.message } };
        var json = JSON.stringify(newMessage);
        console.log(json);
        fetch(this.props.post_to_path, {
            method: 'post',
            body: json,
            headers: { 'Content-type': 'application/json' }
        })
            .then(this.successCallback, this.failureCallback);
    };
    ReactForm.prototype.successCallback = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('success');
                        return [4 /*yield*/, response.json()];
                    case 1:
                        json = _a.sent();
                        alert('message was created successfully.' + json);
                        return [2 /*return*/];
                }
            });
        });
    };
    ReactForm.prototype.failureCallback = function (response) {
        throw new Error('call to ' + this.props.post_to_path + ' unsuccessful');
    };
    ReactForm.prototype.render = function () {
        return (React.createElement("form", { onSubmit: this.handleSubmit },
            React.createElement("p", null,
                React.createElement("input", { name: "user", type: "text", onChange: this.handleChangeUser, placeholder: "enter your name" }),
                React.createElement("br", null),
                React.createElement("input", { name: "message", type: "text", onChange: this.handleChangeMessage, placeholder: "enter your message" })),
            React.createElement("input", { type: "submit" })));
    };
    return ReactForm;
}(React.Component));
exports.default = ReactForm;
//# sourceMappingURL=ReactForm.js.map