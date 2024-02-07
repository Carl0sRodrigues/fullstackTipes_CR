import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Battisti from '../screens/frontend/MatheusBattisti'
import Rodolfo from '../screens/frontend/RodolfoMori'
import Sujeito from '../screens/frontend/SujeitoProgramador'
import TechGuide from '../screens/frontend/TechGuide'
import Back from '../screens/frontend/Back'

const Tab = createBottomTabNavigator()

const Frontend = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TechGuide" component={TechGuide} />
      <Tab.Screen name="Matheus Battisti" component={Battisti} />
      <Tab.Screen name="Rodolfo Mori" component={Rodolfo} />
      <Tab.Screen name="Sujeito Programador" component={Sujeito} />
      <Tab.Screen name="Voltar" component={Back} />
    </Tab.Navigator>
  )
}
export default Frontend
