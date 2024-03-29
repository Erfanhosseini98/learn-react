import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
	const [products, setProducts] = useState<string[]>([]);

	useEffect(() => {
		console.log("Fetching products", category);
		setProducts(["Clothing", "Household"]);
	}, [category]);
	{
		console.log(products);
	}
	return <div>ProductList</div>;
};

export default ProductList;
