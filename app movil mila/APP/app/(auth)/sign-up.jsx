import { Image, View, Text, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, useRouter } from 'expo-router';
import { createUser } from '../../lib/appwrite';


const SignUp = () => {
  const [form, setForm] = useState({
    userName: '',
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const submit = async () => {
    if (!form.userName || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.userName);
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
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image source={images.logoo}
            resizeMode='contain' className="w-[205px] h-[85px]"  />
        
          <Text className="text-2xl text-black 
          text-semibold mt-10 font-psemibold">Registrate en Mila!</Text>

          <FormField 
            title="Username"
            value={form.userName}
            handleChangeText={(e) => setForm({...form, userName: e})}
            otherStyles="mt-10"
          />
          
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
            title="Registrarme"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black font-pregular">
              Ya tienes cuenta?
            <Link href="/sign-in" className='text-lg font-psemibold 
            text-400'> Ingresa </Link>

            </Text>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp