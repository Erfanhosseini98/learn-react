import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
	const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
	const handelSelectItem = (item: string) => {
		console.log(item);
	};
	const [alarmVisibile, setAlarmVisibile] = useState(false);
	return (
		<div>
			<ListGroup
				items={items}
				heading="Cities"
				onSelectItem={handelSelectItem}
			/>
			<Alert>This last notice</Alert>
			<Button color="danger" onClick={() => console.log("Clicked")}>
				hello
			</Button>
			{alarmVisibile && (
				<div
					className="alert alert-warning alert-dismissible fade show"
					role="alert"
				>
					<strong>Holy guacamole!</strong> You should check in on some
					of those fields below.
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="alert"
						aria-label="Close"
						onClick={() => setAlarmVisibile(false)}
					></button>
				</div>
			)}
		<Button color="secondary" onClick={() => setAlarmVisibile(true)}> show alarm </Button>
		</div>
	);
}

export default App;
