import react, { FormEvent, useRef } from "react";

const Form = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const ageRef = useRef<HTMLInputElement>(null);
	const person = {
		name: "",
		age: 0,
	};
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		if (nameRef.current !== null) {
			person.name = nameRef.current.value;
			console.log(nameRef.current.value);
		}
		if (ageRef.current !== null) {
			person.age = parseInt(ageRef.current.value);
			console.log(ageRef.current.value);
		}
        console.log(person);
        
	};
	return (
		<div className="row">
			<form className="m-3 col-6" onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="nameInput" className="form-label">
						Name
					</label>
					<input
						ref={nameRef}
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
						ref={ageRef}
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
