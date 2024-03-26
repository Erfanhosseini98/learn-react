import react, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
interface FormData {
	name: string;
	age: number;
}
const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	const onSubmit = (data: FieldValues) => console.log(data);
	return (
		<div className="row">
			<form className="m-3 col-6" onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<label htmlFor="nameInput" className="form-label">
						Name
					</label>
					<input
						{...register("name", { required: true, minLength: 3 })}
						type="text"
						className="form-control"
						id="nameInput"
						aria-describedby="nameInput"
					/>
					{errors.name?.type === "required" && (
						<div id="nameInput" className="form-text">
							The name field is required.
						</div>
					)}
					{errors.name?.type === "minLength" && (
						<div id="nameInput" className="form-text">
							The name must be at least 3 character.
						</div>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="age" className="form-label">
						Age
					</label>
					<input
						{...register("age", { required: true })}
						type="number"
						className="form-control"
						id="age"
					/>
					{errors.age?.type === "required" && (
						<div id="nameInput" className="form-text">
							The age field is required.
						</div>
					)}
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;
