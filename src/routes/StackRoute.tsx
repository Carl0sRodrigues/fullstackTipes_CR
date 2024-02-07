import {
	NativeStackNavigationProp,
	createNativeStackNavigator,
} from "@react-navigation/native-stack"
import Frontend from "./RouteFrontend"
import Backend from "./RouteBackend"
import Main from "./Main"

const Stack = createNativeStackNavigator()
type StackNavigation = {
	Main: undefined
	FrontEnd: undefined
	BackEnd: undefined
}
export type StackTypes = NativeStackNavigationProp<StackNavigation>

const StackRoutes = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
			<Stack.Screen name="FrontEnd" component={Frontend} options={{ headerShown: false }} />
			<Stack.Screen name="BackEnd" component={Backend} options={{ headerShown: false }} />
		</Stack.Navigator>
	)
}
export default StackRoutes
