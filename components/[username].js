import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useRouter, useSearchParams } from "expo-router";

const profile = () => {
	const router = useRouter();

	// const params = useSearchParams();
	const { name, username } = useSearchParams();
	// console.log(username, name);
	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Text>
				Hello {name} (@{username})
			</Text>

			<Button onPress={() => router.back()} title="Retour" />
		</View>
	);
};

export default profile;

const styles = StyleSheet.create({
	link: {
		margin: 10,
	},
});
