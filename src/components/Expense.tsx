import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
	description: z
		.string()
		.min(3, { message: "Description must be at least 3 characters." }),
	amount: z
		.number({ invalid_type_error: "Amount is required" })
		.min(1, { message: "Amount must be Greater than 0." }),
	category: z.string().min(1, { message: "most select a category" }),
});

type FormData = z.infer<typeof schema>;

export const Expense = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({ resolver: zodResolver(schema) });
	const onSubmit = (data: FieldValues) => console.log(data);

	return (
		<div className="container">
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
							<option value="Health">Health</option>
							<option value="Food">Food</option>
							<option value="Taxi">Taxi</option>
						</select>
						{errors.category && (
							<div id="description" className="form-text">
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
			<br />
			<hr />

			<div className="row mt-5">
				<div className="mb-3">
					<label className="mb-2" htmlFor="categoryFilter">
						Category Filter
					</label>
					<select
						className="form-select"
						name="categoryFilter"
						id="categoryFilter"
					>
						<option value="Health">Health</option>
						<option value="Food">Food</option>
						<option value="Taxi">Taxi</option>
					</select>
				</div>
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
							<tr>
								<td>Pizza</td>
								<td>124.00 $</td>
								<td>Food</td>
								<td>
									<button className="btn btn btn-outline-danger btn-sm">
										Delete
									</button>
								</td>
							</tr>
							<tr className="table-light">
								<td>Total</td>
								<td colSpan={3}>124.00 $</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Expense;
