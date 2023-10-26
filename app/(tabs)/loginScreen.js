import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useSearchParams, useNavigation } from "expo-router";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../../AuthContext";

const SERVER_URL =
	"http://mybook.jpmh7747.odns.fr/public/api/v1/user/login";

export default function QRScanner() {
	const navigation = useNavigation();
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);
	// const [userData, setUserData] = useState(null);
	const [email, setEmail] = useState(null);
	const { user, setUser } = useContext(AuthContext);

	useEffect(() => {
		(async () => {
			const { status } =
				await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	const handleBarCodeScanned = ({ type, data }) => {
		setScanned(false);
		fetch(SERVER_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				uuid: data,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				setUser(data); // stocker les données de l'utilisateur
				// setEmail(data.email);
				// navigation.navigate("borrowBook", { qrData: data });
				navigation.navigate("borrow");
				console.log(data.id);
			})

			.catch((error) => {
				console.error(error);
			});
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={styles.container}>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={StyleSheet.absoluteFillObject}
			/>
			{/* {userData && <Text>{JSON.stringify(userData)}</Text>} */}
			{/* {scanned && (
				<Button
					title={"Tap to Scan Again"}
					onPress={() => setScanned(false)}
				/>
			)} */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
	},
});
