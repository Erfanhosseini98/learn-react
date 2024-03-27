import React from "react";
import categories from "../categories"; 

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
				{categories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
		</>
	);
};

export default ExpenseFilter;
