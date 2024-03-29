import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import ExpenseApp from "./ExpenseApp.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className="container">
			{/* <App /> */}
			<ExpenseApp />
		</div>
	</React.StrictMode>
);
