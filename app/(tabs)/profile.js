import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

export default function profile() {
	const router = useRouter();
	return (
		<View style={styles.container}>
			<Text>profile</Text>

			<Button
				onPress={() => router.back()}
				title="retour"
				style={styles.ButtonText}
			/>
			<Link href={""}> QrCode</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 24,
	},
	ButtonText: {
		color: "#843",
		fontWeight: "bold",
		fontSize: 16,
	},
});
