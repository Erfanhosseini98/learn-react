import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import categories from "../categories";

const schema = z.object({
	description: z
		.string()
		.min(3, { message: "Description must be at least 3 characters." }),
	amount: z
		.number({ invalid_type_error: "Amount is required" })
		.min(1, { message: "Amount must be Greater than 0." }),
	category: z.enum(categories,{
		errorMap: () => ({message: "Category is required."})
	}),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
	const onSubmit = (data: FieldValues) => console.log(data);

	return (
		<>
			<div className="row mt-3">
				<h1>Expense Tracker</h1>
				<p>
					Effortlessly Manage Your Finances with Our Comprehensive and
					User-Friendly Expense Tracker for Complete Financial
					Control.
				</p>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-3">
						<label className="mb-2" htmlFor="description">
							Description
						</label>
						<input
							{...register("description")}
							type="text"
							className="form-control"
							id="description"
						/>
						{errors.description && (
							<div id="description" className="form-text">
								{errors.description.message}
							</div>
						)}
					</div>
					<div className="mb-3">
						<label className="mb-2" htmlFor="amount">
							Amount
						</label>
						<input
							{...register("amount", { valueAsNumber: true })}
							type="number"
							className="form-control"
							id="amount"
						/>
						{errors.amount && (
							<div id="description" className="form-text">
								{errors.amount.message}
							</div>
						)}
					</div>
					<div className="mb-3">
						<label className="mb-2" htmlFor="category">
							Category
						</label>
						<select
							{...register("category")}
							className="form-select"
							name="category"
							id="category"
						>
							<option value=""></option>
							{categories.map((category) => (
								<option key={category} value={category}>
									{category}
								</option>
							))}
						</select>
						{errors.category && (
							<div  className="form-text">
								{errors.category.message}
							</div>
						)}
					</div>
					<button
						disabled={!isValid}
						type="submit"
						className="btn btn-primary"
					>
						Add
					</button>
				</form>
			</div>
		</>
	);
};

export default ExpenseForm;
