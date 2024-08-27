import {ScrollView, Text, View, Image, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../constants'
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
  
    <SafeAreaView className =" bg-beige h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
      <View className="w-full justify-center items-center min-h-[85vh] px-4">
        <Image
          source={images.logoo}
          className="max-w-[380px] w-full h-[300px]"
          resizeMode="contain"
        />


        <View className="relative mt-5">
          <Text className="text-3xl text-black font-bold text-center" >
          Bienvenido a Mila{' '}</Text>
          <Text className=" text-400 font-bold text-center text-3xl"
          style={{
            textShadowColor: 'black',
            textShadowOffset: { width: -1.15, height: 1.15 },
            textShadowRadius: 1,
          }}>GastroFusion</Text>
        </View>
        <Text className="text-sm font-pregular text-black-100
        mt-7 text-center">Un bar fuera de lo ordinario, con comida, eventos y mas!
        </Text>
        
        

        <CustomButton 
        title="Continuar con Correo"
        handlePress={() => router.push('/sign-in')}
        containerStyless="w-full mt-7"
        />
      </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style='dark'></StatusBar>
    </SafeAreaView>
  
)
}
