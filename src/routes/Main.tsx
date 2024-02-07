import { ImgBack, ContainerHands, BtnHands, ImgHands } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { StackTypes } from "./StackRoute"

const Main = () => {
	const navigation = useNavigation<StackTypes>()
	const goBack = () => {
		navigation.navigate("BackEnd")
	}
	const goFront = () => {
		navigation.navigate("FrontEnd")
	}
	return (
		<ImgBack source={require("../assets/background01.jpg")}>
			<ContainerHands>
				<BtnHands onPress={goBack}>
					<ImgHands source={require("../assets/right.png")} />
				</BtnHands>
				<BtnHands onPress={goFront}>
					<ImgHands source={require("../assets/left.png")} />
				</BtnHands>
			</ContainerHands>
		</ImgBack>
	)
}
export default Main
