import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Link } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { AuthContext } from "../../AuthContext";

const borrow = () => {
	const route = useRoute();
	const { user, setUser } = useContext(AuthContext);
	console.log(user);

	return (
		<View style={styles.container}>
			<Text>borrow</Text>
			<Text>hello : {user.email}</Text>

			<View style={styles.roundedButton}>
				<Link href="/borrowBook" style={styles.ButtonText}>
					Emprunter un livre
				</Link>
			</View>
			<View style={styles.roundedButton}>
				<Link href="/renderBook" style={styles.ButtonText}>
					Rendre un livre
				</Link>
			</View>
		</View>
	);
};
export default borrow;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 24,
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
	main: {
		flex: 1,
		justifyContent: "center",
		maxWidth: 960,
		marginHorizontal: "auto",
	},
	title: {
		fontSize: 64,
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 36,
		color: "#38434D",
	},
	link: {
		margin: 10,
	},
	roundedButton: {
		display: "flex",
		marginTop: 100,
		alignItems: "center",
		paddingHorizontal: 40,
		paddingVertical: 14,
		backgroundColor: "#334",
		borderRadius: 1000,
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
	},
	ButtonText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 16,
	},
});
