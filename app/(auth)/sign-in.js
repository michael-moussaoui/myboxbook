import { Text, View } from "react-native";
import { useAuth } from "../../context/auth";

export default function SignIn() {
	const { logIn } = useAuth();
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text onPress={() => SignIn()}>Se Connecter</Text>
		</View>
	);
}
