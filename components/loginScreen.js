import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";

const LoginScreen = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const onQRCodeRead = (e) => {
		// TODO: Handle QR code scan result
		console.log(e.data);
		setIsLoggedIn(true);
	};

	return (
		<View style={styles.container}>
			{isLoggedIn ? (
				<Text style={styles.text}>You are logged in!</Text>
			) : (
				<QRCodeScanner
					onRead={onQRCodeRead}
					showMarker={true}
					reactivate={true}
					reactivateTimeout={5000}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
	},
});

export default LoginScreen;
