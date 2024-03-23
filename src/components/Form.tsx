import react, { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
	const { register ,handleSubmit} = useForm();
    const onSubmit = (data : FieldValues ) => console.log(data);
    
	return (
		<div className="row">
			<form className="m-3 col-6" onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<label htmlFor="nameInput" className="form-label">
						Name
					</label>
					<input
						{...register("name")}
						type="text"
						className="form-control"
						id="nameInput"
						aria-describedby="nameInput"
					/>
					<div id="nameInput" className="form-text">
						We'll never share your name with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="age" className="form-label">
						Age
					</label>
					<input
						{...register("age")}
						type="number"
						className="form-control"
						id="age"
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;
