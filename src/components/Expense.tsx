import React from "react";

export const Expense = () => {
	return (
		<div className="container">
			<div className="row mt-3">
                <h1>Expence Tracker</h1>
                <p>Effortlessly Manage Your Finances with Our Comprehensive and User-Friendly Expense Tracker for Complete Financial Control.</p>
				<form action="">
					<div className="mb-3">
						<label className="mb-2" htmlFor="description">
							Description
						</label>
						<input
							type="text"
							className="form-control"
							id="description"
						/>
					</div>
					<div className="mb-3">
						<label className="mb-2" htmlFor="amount">
							Amount
						</label>
						<input
							type="number"
							className="form-control"
							id="amount"
						/>
					</div>
					<div className="mb-3">
						<label className="mb-2" htmlFor="category">
							Category
						</label>
						<select
							className="form-select"
							name="category"
							id="category"
						>
							<option value="Health">Health</option>
							<option value="Food">Food</option>
							<option value="Taxi">Taxi</option>
						</select>
					</div>
					<button type="submit" className="btn btn-primary">
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
					<table className="table table-hover table-bordered border-secondary align-middle" >
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
