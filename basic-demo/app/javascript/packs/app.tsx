import * as React from "react";
import * as ReactDOM from "react-dom";

import CustomComponent from './components/CustomComponent';
import ReactForm from './components/ReactForm';


ReactDOM.render(<CustomComponent/>,  document.getElementById("CustomComponent"));
ReactDOM.render(<ReactForm/>,  document.getElementById("ReactForm"));