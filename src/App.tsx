import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
	const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
	const handelSelectItem = (item: string) => {
		console.log(item)
	}
	return (
		<div>
			<ListGroup items={items} heading="Cities" onSelectItem={handelSelectItem} />
			<Alert>
				This last notice
			</Alert>
			<Button color="danger" onClick={() => console.log("Clicked")}>hello</Button>
		</div>
	);
}

export default App;