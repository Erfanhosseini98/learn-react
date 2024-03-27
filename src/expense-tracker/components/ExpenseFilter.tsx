import React from "react";

interface Props {
	onSelectCategory: (category: String) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
	return (
		<>
			<label className="mb-2" htmlFor="categoryFilter">
				Category Filter
			</label>
			<select
				className="form-select"
				name="categoryFilter"
				id="categoryFilter"
                onChange={(event) => onSelectCategory(event.target.value)}
			>
				<option value="">All Categories</option>
				<option value="Health">Health</option>
				<option value="Food">Food</option>
				<option value="Taxi">Taxi</option>
			</select>
		</>
	);
};

export default ExpenseFilter;
