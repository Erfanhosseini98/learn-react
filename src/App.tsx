import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
	const [category, setCategory] = useState("");
	return (
		<>
			<div className="row mt-3">
				<div className=" mt-3">
					<select
						name=""
						id=""
						className="form-select"
						onChange={(event) => {
							setCategory(event.target.value);
						}}
					>
						<option value=""></option>
						<option value="Clothing">Clothing</option>
						<option value="Household">Household</option>
					</select>
				</div>
				<div className=" mt-3">
					<ProductList category={category} />
				</div>
			</div>
		</>
	);
};

export default App;
