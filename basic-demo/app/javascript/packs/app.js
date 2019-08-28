"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var ReactList_1 = require("./components/ReactList");
var ReactForm_1 = require("./components/ReactForm");
ReactDOM.render(React.createElement(ReactList_1.default, { all_messages_path: "api/v1/messages.json" }), document.getElementById("ReactList"));
ReactDOM.render(React.createElement(ReactForm_1.default, { post_to_path: "api/v1/messages" }), document.getElementById("ReactForm"));
//# sourceMappingURL=app.js.map