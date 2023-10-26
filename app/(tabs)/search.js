import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";

export default function Search() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://mybook.jpmh7747.odns.fr/public/api/v1/boxbook")
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);

	return (
		<View>
			<Text>search</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
