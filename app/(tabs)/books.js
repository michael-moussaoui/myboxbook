import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";

const Books = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://mybook.jpmh7747.odns.fr/public/api/v1/books")
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<View>
			{data.map((item) => (
				<Text key={item.id}>{item.title}</Text>
			))}
		</View>
	);
};

export default Books;
