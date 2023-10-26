import { Link } from "expo-router";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
} from "react-native";
// import { useAuth } from "../../context/auth";

export default function Page() {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Text style={styles.title}>BoxBook</Text>
				<View style={styles.roundedButton}>
					<Link href="/loginScreen" style={styles.ButtonText}>
						Start
					</Link>
				</View>
			</View>
		</View>
	);
}

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
