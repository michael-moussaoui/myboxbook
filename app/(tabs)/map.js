import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import * as Location from "expo-location";

export default function Map() {
	const [data, setData] = useState([]);
	const [mapRegion, setMapRegion] = useState({
		latitude: 45.1810309,
		longitude: 5.7497118,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});

	useEffect(() => {
		fetch("http://mybook.jpmh7747.odns.fr/public/api/v1/boxbook")
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);

	useEffect(() => {
		(async () => {
			let { status } =
				await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({
				enableHighAccuracy: true,
			});
			setMapRegion({
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			});
		})();
	}, []);

	const markers = data.map((item) => {
		const coords = item.geoloc["1"].split(",");
		return {
			coordinate: {
				latitude: parseFloat(coords[0]),
				longitude: parseFloat(coords[1]),
			},
			title: item.sreet,
			description: `${item.zipcode} ${item.city}`,
			id: item.id,
		};
	});

	return (
		<View style={styles.container}>
			<MapView style={styles.map} region={mapRegion}>
				{markers.map((marker) => (
					<Marker
						key={marker.id}
						coordinate={marker.coordinate}
						title={marker.title}
						description={marker.description}
					/>
				))}
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: "100%",
		height: "100%",
	},
});
