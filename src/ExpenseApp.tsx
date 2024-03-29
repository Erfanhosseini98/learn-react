import { useEffect, useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import axios, { CanceledError } from "axios";
import { set } from "react-hook-form";

export interface ExpenseData {
	id: number;
	description: string;
	amount: number;
	category: string;
}

function ExpenseApp() {
	const [expenses, setExpenses] = useState<ExpenseData[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<String>("");
	const [error, setError] = useState("");
	const [isloading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setLoading(true);
		axios
			.get<ExpenseData[]>("http://localhost:3000/expenses", {
				signal: controller.signal,
			})
			.then((res) => {
				setExpenses(res.data);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});

		return () => controller.abort();
	}, []);

	const visibleExpenses = selectedCategory
		? expenses.filter((e) => e.category === selectedCategory)
		: expenses;

	return (
		<>
			{error && (
				<div className="alert alert-danger m-3" role="alert ">
					{error}
				</div>
			)}
			{isloading && <div className="spinner-border"></div>}
			<div className="row mt-3">
				<ExpenseForm
					onSubmit={(expense) => {
						const originalExpenses = [...expenses];

						setExpenses([
							...expenses,
							{ ...expense, id: expenses.length + 1 },
						]);
						axios
							.post("http://localhost:3000/expenses/", {
								...expense,
								id: expenses.length + 1,
							})
							.then(({ data: savedExpense }) =>
								setExpenses([savedExpense, ...expenses])
							)
							.catch((err) => {
								setError(err.message);
								setExpenses(originalExpenses);
							});
					}}
				/>
			</div>
			<div className="row mt-3">
				<div className="mt-5">
					<div className="mb-3">
						<ExpenseFilter
							onSelectCategory={(category) =>
								setSelectedCategory(category)
							}
						/>
					</div>
					<ExpenseList
						expenses={visibleExpenses}
						onDelete={(id) => {
							const originalExpenses = [...expenses];
							setExpenses(expenses.filter((e) => e.id !== id));
							axios
								.delete("http://localhost:3000/expenses/" + id)
								.catch((err) => {
									setError(err.message);
									setExpenses(originalExpenses);
								});
						}}
					/>
				</div>
			</div>
		</>
	);
}

export default ExpenseApp;
