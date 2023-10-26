import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useSearchParams, useNavigation } from "expo-router";
import { BarCodeScanner } from "expo-barcode-scanner";
import { AuthContext } from "../AuthContext";

const BorrowBook = ({ route }) => {
	const navigation = useNavigation();
	const [scanned, setScanned] = useState(false);
	const [userId, setUserId] = useState(1);
	const [bookId, setBookId] = useState(null);
	// const { user } = useContext(AuthContext);
	//const { qrData } = route.params;
	// console.log(user);

	const handleBarCodeScanned = ({ data }) => {
		// setUserId(user);
		setBookId(data);

		fetch(
			`http://mybook.jpmh7747.odns.fr/public/api/v1/user/${userId}/book/${bookId}/borrow`,
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					userId: 1,
					bookId: data,
				}),
			}
		)
			.then((response) => response.json())
			.then((data) => {
				alert("Le livre " + data.title + " a été emprunté");
				setScanned(false);
				// navigation.navigate("borrow");
				console.log(data);
			})
			.catch((error) => {
				console.error(error);
				setScanned(false);
			});
	};

	const handleScan = () => {
		setScanned(true);
	};

	return (
		<View style={styles.container}>
			<View style={styles.barcodeScanner}>
				<Text style={styles.title}>
					Scan a book's barcode to borrow it
				</Text>
				{/* <Text style={styles.title}>{user.email}</Text> */}
				{scanned ? (
					<Text style={styles.scannedText}>Scanned!</Text>
				) : (
					<BarCodeScanner
						onBarCodeScanned={handleBarCodeScanned}
						style={StyleSheet.absoluteFillObject}
					/>
				)}
			</View>
			<Button title="Scan" onPress={handleScan} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 20,
		textAlign: "center",
		marginVertical: 20,
	},
	barcodeScanner: {
		height: 300,
		width: 300,
		borderWidth: 1,
		borderColor: "gray",
		overflow: "hidden",
		marginVertical: 20,
	},
	scannedText: {
		fontSize: 20,
		textAlign: "center",
		marginVertical: 20,
	},
});

export default BorrowBook;
