import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Battisti from '../screens/backend/MatheusBattisti'
import Rodolfo from '../screens/backend/RodolfoMori'
import Sujeito from '../screens/backend/SujeitoProgramador'
import TechGuide from '../screens/backend/TechGuide'
import Back from '../screens/backend/Back'

const Tab = createBottomTabNavigator()

const Backend = () => {
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
export default Backend
