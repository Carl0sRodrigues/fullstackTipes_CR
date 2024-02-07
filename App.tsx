import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import StackRoutes from "./src/routes/StackRoute"

const App = () => {
	return (
		<NavigationContainer>
			<StackRoutes />
		</NavigationContainer>
	)
}
export default App
