import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import UserPanel from '../screens/UserPanel';
import AdminPanel from '../screens/AdminPanel';
import PastReports from '../screens/PastReports';
import SearchReports from '../screens/SearchReports';
import Profile from '../screens/Profile';
import HastaEkle from '../screens/HastaEkle';
import RaporEkle from '../screens/RaporEkle';
import RaporListe from '../screens/RaporListe';

import KilavuzEkle from '../screens/KilavuzEkle';



const Stack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
const AdminStack = createNativeStackNavigator();

// Kullanıcı Paneli İçin Alt Navigatör
const UserPanelNavigator = () => {
  return (
    <UserStack.Navigator initialRouteName="UserPanel">
      <UserStack.Screen 
        name="UserPanel" 
        component={UserPanel} 
        options={{ title: 'Kullanıcı Paneli' }} 
      />
      <UserStack.Screen 
        name="PastReports" 
        component={PastReports} 
        options={{ title: 'Geçmiş Tahliller' }} 
      />
      <UserStack.Screen 
        name="SearchReports" 
        component={SearchReports} 
        options={{ title: 'Tahlil Ara' }} 
      />
      <UserStack.Screen 
        name="Profile" 
        component={Profile} 
        options={{ title: 'Profil Yönetimi' }} 
      />
    </UserStack.Navigator>
  );
};

// Admin Paneli İçin Alt Navigatör
const AdminPanelNavigator = () => {
  return (
    <AdminStack.Navigator initialRouteName="AdminPanel">
      <AdminStack.Screen 
        name="AdminPanel" 
        component={AdminPanel} 
        options={{ title: 'Admin Paneli' }} 
      />
      <AdminStack.Screen 
        name="HastaEkle" 
        component={HastaEkle} 
        options={{ title: 'Hasta Ekle' }} 
      />
      <AdminStack.Screen 
        name="RaporEkle" 
        component={RaporEkle} 
        options={{ title: 'Tahlil Ekle' }} 
      />
      <AdminStack.Screen 
        name="RaporListe" 
        component={RaporListe} 
        options={{ title: 'Tahlil Listele' }} 
      />
      
      <AdminStack.Screen 
        name="KilavuzEkle" 
        component={KilavuzEkle} 
        options={{ title: 'Kılavuz Ekle' }} 
      />
    </AdminStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Ana Sayfa' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Giriş Yap' }} />
        <Stack.Screen name="Signup" component={Signup} options={{ title: 'Kayıt Ol' }} />
        <Stack.Screen 
          name="UserPanelNavigator" 
          component={UserPanelNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="AdminPanelNavigator" 
          component={AdminPanelNavigator} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;