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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactForm = /** @class */ (function (_super) {
    __extends(ReactForm, _super);
    function ReactForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            user: '',
            message: ''
        };
        _this.handleChange = _this.handleChange.bind(_this); // needed, to be able to call this.setState
        return _this;
    }
    ReactForm.prototype.handleChange = function (event) {
        var _a;
        var element = event.target;
        var value = event.target.value;
        this.setState((_a = {},
            _a[element] = value,
            _a));
    };
    ReactForm.prototype.handleSubmit = function (event) {
        event.preventDefault();
        console.log(event);
    };
    ReactForm.prototype.render = function () {
        return (React.createElement("form", { onSubmit: this.handleSubmit },
            React.createElement("input", { name: "user", type: "text", onChange: this.handleChange }),
            React.createElement("input", { name: "message", type: "text", onChange: this.handleChange }),
            React.createElement("input", { type: "submit" })));
    };
    return ReactForm;
}(React.Component));
exports.default = ReactForm;
//# sourceMappingURL=ReactForm.js.map