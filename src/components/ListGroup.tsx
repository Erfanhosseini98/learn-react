import { useState } from "react";

function ListGroup() {
	const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
	const [selectedIndex, setSelectedIndex] = useState(-1);
	return (
		<>
			{items.length === 0 && <p>No item found</p>}
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						key={item}
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item "
						}
                        onClick={() => setSelectedIndex(index)}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;