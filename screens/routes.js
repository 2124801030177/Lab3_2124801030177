import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Favorites from './Favorites';
import colors from '../utility/colors';
import {MaterialIcons} from '@expo/vector-icons';
import User from './User';
import Options from './Options';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contacts from './Contacts';
import Profile from './Profile';

const getDrawerItemIcon = icon = ()=> ({tintColor}) => (
    <MaterialIcons name={icon} size={22} style={{color: tintColor}} />
);

const Stack = createNativeStackNavigator();
const ContactsScreens = ()=>
{
    return(
        // <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Contacts"
            screenOptions={{
                // headerTintColor: 'white',
                // headerStyle: {backgroundColor: 'tomato'},
                // headerTitleAlign: 'center'
                headerShown: false
            }}>
                <Stack.Screen name='Contacts' component={Contacts} options={{title:"Contacts"}}/>
                <Stack.Screen 
                    name='Profile' 
                    component={Profile} 
                    options={({route})=>
                        {
                            const {contact} = route.params;
                            const {name} = contact;
                            return{
                                title: name.split(' ')[0],
                                headerTintColor: 'white',
                                headerStyle: {
                                    backgroundColor: colors.blue,
                                }
                            };
                        }
                    }
                    />
            </Stack.Navigator>
        // </NavigationContainer>
    );
}

const FavoritesScreens = ()=>
{
    return (
        <Stack.Navigator
            initialRouteName='Favarites'
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name='Favorites' component={Favorites} options={{title:"Favorites"}}/>
            <Stack.Screen name='Profile' component={Profile} options={{title:"Profile"}}/>
        </Stack.Navigator>
    );
}

const UserScreens = ({navigation})=>
{
    return (
        <Stack.Navigator
            initialRouteName='user'
        >
                <Stack.Screen  name='User' component={User}
                    options={{
                        headerTitle: "Me",
                        headerTintColor: 'white',
                        headerStyle:{
                            backgroundColor: colors.blue,
                        },
                        headerRight: ()=>(
                            <MaterialIcons
                                name='settings'
                                size={24}
                                style={{color:'white', marginRight: 10}}
                                onPress={()=> navigation.navigate('Options')}
                            />
                        ),
                    }}
                />
                <Stack.Screen name='Options' component={Options} options={{title:"Options"}}/>
            </Stack.Navigator>
    );
}

// const Tab = createMaterialBottomTabNavigator();
// const TabNavigator = () => 
// {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//                 initialRouteName='ContactsScreens'
//                 barStyle = {{backgroundColor: colors.blue}}
//                 labeled={false}
//                 activeTintColor={colors.greyLight}
//                 activeColor={colors.greyDark}
//             >
//                 <Tab.Screen name='ContactsScreens' component={ContactsScreens} options={{
//                     tabBarIcon: getTabBarIcon('list'),}}
//                 />
//                 <Tab.Screen name='FavoritesSceens' component={FavoritesScreens} options={{
//                     tabBarIcon: getTabBarIcon('start'),}}
//                 />
//                 <Tab.Screen name='UsersScreens' component={UserScreens} options={{
//                     tabBarIcon: getTabBarIcon('person'),}}
//                 />
//             </Tab.Navigator>
//         </NavigationContainer>
//     )
// }

// export default TabNavigator;

const Drawer = createDrawerNavigator();
const DrawerNavigator = ()=>{
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName='ContactsScreens'
            >
                <Drawer.Screen name="ContactsScreens" component={ContactsScreens}
                    options={{
                        drawerIcon: getDrawerItemIcon('list'),
                    }}
                />
                <Drawer.Screen name="FavoritesScreens" component={FavoritesScreens}
                    options={{
                        drawerIcon: getDrawerItemIcon('star'),
                    }}
                />
                <Drawer.Screen name="UsersScreens" component={UserScreens}
                    options={{
                        drawerIcon: getDrawerItemIcon('person'),
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigator;