import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handelSelectItem = (item: string) => {
   console.log(item) 
  }
	return (
		<div>
			<ListGroup items={items} heading="Cities" onSelectItem={handelSelectItem}/>
			<Alert>
				This last notice
			</Alert>
		</div>
	);
}

export default App;
