import { Image, View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import  CustomButton from '../../components/CustomButton'
import { Link, useRouter, router } from 'expo-router'
import { signIn } from '../../lib/appwrite'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await signIn(form.email, form.password);


      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <SafeAreaView className ="bg-beige h-full" >
      <ScrollView>
        <View className="w-full justify-center min-h-[92vh] px-4 my-7">
          <Image source={images.logoo}
            resizeMode='contain' className="w-[205px] h-[85px]"  />
        
          <Text className="text-2xl text-black 
          text-semibold mt-10 font-psemibold">Ingresar</Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({...form, password: e})}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Ingresar"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black font-pregular">
              No tienes cuenta?
            <Link href="/sign-up" className='text-lg font-psemibold 
            text-400'> Registrate </Link>

            </Text>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn