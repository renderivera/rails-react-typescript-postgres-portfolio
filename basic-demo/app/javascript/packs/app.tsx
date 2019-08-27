import * as React from "react";
import * as ReactDOM from "react-dom";

import ReactList from './components/ReactList';
import ReactForm from './components/ReactForm';


ReactDOM.render(<ReactList all_messages_path="api/v1/messages.json"/>,  document.getElementById("ReactList"));
ReactDOM.render(<ReactForm/>,  document.getElementById("ReactForm"));