import react, { FormEvent, useRef, useState } from "react";

const Form = () => {
	const [person, setPerson] = useState({
		name: "",
		age: 0,
	});
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
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
						onChange={(event) =>
							setPerson({ ...person, name: event.target.value })
						}
                        value={person.name}
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
						onChange={(event) =>
							setPerson({
								...person,
								age: parseInt(event.target.value),
							})
						}
                        value={person.age}
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
