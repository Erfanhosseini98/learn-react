import { useState } from "react";
import categories from "./expense-tracker/categories";
import { Expense } from "./components/Expense";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
	const [expenses, setExpenses] = useState([
		{
			id: 1,
			description: "Rent",
			amount: 1200.0,
			category: "Housing",
		},
		{
			id: 2,
			description: "Electricity Bill",
			amount: 100.0,
			category: "Utilities",
		},
		{
			id: 3,
			description: "Groceries",
			amount: 200.5,
			category: "Food",
		},
		{
			id: 4,
			description: "Gasoline",
			amount: 60.0,
			category: "Transportation",
		},
		{
			id: 5,
			description: "Health Insurance Premium",
			amount: 300.0,
			category: "Healthcare",
		},
		{
			id: 6,
			description: "Car Insurance Premium",
			amount: 150.0,
			category: "Insurance",
		},
		{
			id: 7,
			description: "Internet Bill",
			amount: 70.0,
			category: "Utilities",
		},
		{
			id: 8,
			description: "Dinner at Restaurant",
			amount: 50.0,
			category: "Entertainment",
		},
		{
			id: 9,
			description: "Bus Fare",
			amount: 20.0,
			category: "Transportation",
		},
		{
			id: 10,
			description: "Gym Membership",
			amount: 50.0,
			category: "Savings",
		},
		{
			id: 11,
			description: "Student Loan Payment",
			amount: 200.0,
			category: "Debt Repayment",
		},
		// Additional expenses
		{
			id: 12,
			description: "Cell Phone Bill",
			amount: 80.0,
			category: "Utilities",
		},
		{
			id: 13,
			description: "Dinner at a Fast Food Restaurant",
			amount: 15.0,
			category: "Food",
		},
		{
			id: 14,
			description: "Taxi Fare",
			amount: 25.0,
			category: "Transportation",
		},
		{
			id: 15,
			description: "Medication",
			amount: 45.0,
			category: "Healthcare",
		},
		{
			id: 16,
			description: "Home Insurance Premium",
			amount: 200.0,
			category: "Insurance",
		},
		{
			id: 17,
			description: "Streaming Service Subscription",
			amount: 10.0,
			category: "Entertainment",
		},
		{
			id: 18,
			description: "Coffee at Cafe",
			amount: 5.0,
			category: "Food",
		},
		{
			id: 19,
			description: "Train Fare",
			amount: 30.0,
			category: "Transportation",
		},
		{
			id: 20,
			description: "Annual Health Checkup",
			amount: 150.0,
			category: "Healthcare",
		},
		{
			id: 21,
			description: "Home Internet Upgrade Fee",
			amount: 50.0,
			category: "Utilities",
		},
		{
			id: 22,
			description: "Concert Tickets",
			amount: 100.0,
			category: "Entertainment",
		},
	]);
	const [selectedCategory, setSelectedCategory] = useState<String>("");

	const visibleExpenses = selectedCategory
		? expenses.filter((e) => e.category === selectedCategory)
		: expenses;

	return (
		<>
			<div className="container">
				<div className="row mt-3">
					<ExpenseForm
						onSubmit={(expense) =>
							setExpenses([...expenses, { ...expense,id: expenses.length + 1}])
						}
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
							onDelete={(id) =>
								setExpenses(expenses.filter((e) => e.id !== id))
							}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
