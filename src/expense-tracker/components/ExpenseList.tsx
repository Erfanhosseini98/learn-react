import React from "react";
import Expense from "../../components/Expense";

interface Expense {
	id: number;
	description: string;
	amount: number;
	category: string;
}
interface Props {
	expenses: Expense[];
	onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
	if (expenses.length === 0) return null;
	return (
		<div>
			<table className="table table-hover table-bordered border-secondary align-middle">
				<thead>
					<tr>
						<th scope="col">Descripion</th>
						<th scope="col">Amount</th>
						<th scope="col">Category</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{expenses.map((expense) => (
						<tr key={expense.id}>
							<td>{expense.description}</td>
							<td>{expense.amount}</td>
							<td>{expense.category}</td>
							<td>
								<button
									onClick={() => onDelete(expense.id)}
									className="btn btn-outline-danger btn-sm"
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr className="table-light">
						<td>Total</td>
						<td colSpan={3}>
							$
							{expenses
								.reduce(
									(acc, expense) => expense.amount + acc,
									0
								)
								.toFixed(2)}
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default ExpenseList;
