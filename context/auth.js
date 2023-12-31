// import React, { createContext } from "react";

// export const AuthContext = { createContext };

import { useRouter, useSegments } from "expo-router";
import React from "react";

const AuthContext = React.createContext(null);

// This hook can be used to access the user info.
export function useAuth() {
	return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user) {
	const segments = useSegments();
	const router = useRouter();

	React.useEffect(() => {
		const inAuthGroup = segments[0] === "(auth)";

		if (
			// If the user is not signed in and the initial segment is not anything in the auth group.
			!user &&
			!inAuthGroup
		) {
			// Redirect to the sign-in page.
			router.replace("/sign-in");
		} else if (user && inAuthGroup) {
			// Redirect away from the sign-in page.
			router.replace("/borrow");
		}
	}, [user, segments]);
}

export function Provider(props) {
	const [user, setAuth] = React.useState(null);

	useProtectedRoute(user);

	return (
		<AuthContext.Provider
			value={{
				LogIn: () => setAuth({}),
				LogOut: () => setAuth(null),
				user,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}
