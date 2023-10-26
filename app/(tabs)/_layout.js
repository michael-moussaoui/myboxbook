import react, { useState } from "react";
// import { Provider } from "../../context/auth";
import { AuthContext } from "../../AuthContext";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

//export default Tabs;
export default function AppLayout() {
	const [user, setUser] = useState(null);
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<Tabs>
				<Tabs.Screen
					// Name of the route to hide.
					name="index"
					options={{
						// This tab will no longer show up in the tab bar.
						href: null,
					}}
				/>
				<Tabs.Screen
					// Name of the route to hide.
					name="loginScreen"
					options={{
						// This tab will no longer show up in the tab bar.
						href: null,
					}}
				/>
				<Tabs.Screen
					// Name of the route to hide.
					name="map"
					options={{
						tabBarIcon: ({ color, size }) => (
							<FontAwesome name="map" size={24} color="black" />
						),
					}}
				/>
				<Tabs.Screen
					// Name of the route to hide.
					name="search"
					options={{
						tabBarIcon: ({ color, size }) => (
							<FontAwesome name="search" size={24} color="black" />
						),
					}}
				/>
				<Tabs.Screen
					// Name of the route to hide.
					name="profile"
					options={{
						tabBarIcon: ({ color, size }) => (
							<FontAwesome name="user" size={24} color="black" />
						),
					}}
				/>
				<Tabs.Screen
					name="books"
					options={{
						tabBarIcon: ({ color, size }) => (
							<FontAwesome name="book" size={24} color="black" />
						),
					}}
				/>

				<Tabs.Screen
					name="borrow"
					initialParams={{ email: "" }}
					options={{
						tabBarIcon: ({ color, size }) => (
							<FontAwesome name="exchange" size={24} color="black" />
						),
					}}
				/>
			</Tabs>
		</AuthContext.Provider>
	);
}
