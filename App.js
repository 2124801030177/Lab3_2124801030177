import React from 'react';
import { View, Text } from 'react-native';
import Contacts from './screens/Contacts';
import DrawerNavigator from './screens/routes';
import Favorites from './screens/Favorites';
import User from './screens/User';
import Options from './screens/Options';
import Store from './screens/Store';
import { Provider } from 'react-redux';


// // Import các màn hình
// import Contacts from './screens/Contacts';
// import Profile from './screens/Profile';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Contacts">
//         <Stack.Screen name="Contacts" component={Contacts} />
//         <Stack.Screen name="Profile" component={Profile} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

const App=()=>{
  return(
    <Provider store={Store}>
      <DrawerNavigator/>
    </Provider>
  );
}

export default App;