import React, { useContext } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 

import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { AppContext } from '../../context/AppContext';

export default function SignInScreen() {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email ID</Text>
          <TextInput 
            style={styles.input}
            placeholder="Enter your email here!"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput 
            style={styles.input}
            placeholder="Enter your password here!"
            placeholderTextColor="#999"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.forgotBtn}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.signInBtn}
          onPress={() => setIsLoggedIn(true)}
        >
          <Text style={styles.signInBtnText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or sign in with</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.googleBtn}>
            <AntDesign name="google" size={20} color="#EA4335" />
            <Text style={styles.googleBtnText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.facebookBtn}>
            <FontAwesome name="facebook-f" size={20} color="#fff" />
            <Text style={styles.facebookBtnText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Not yet a member? </Text>
          <TouchableOpacity>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: '#000',
  },
  forgotBtn: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotText: {
    color: '#FFA500',
    fontSize: 14,
    fontWeight: 'bold',
  },
  signInBtn: {
    backgroundColor: '#FFA500',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 25,
  },
  signInBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  googleBtn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 5,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  googleBtnText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  facebookBtn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#4267B2',
    borderRadius: 5,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  facebookBtnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#333',
    fontSize: 14,
  },
  signUpText: {
    color: '#FFA500',
    fontSize: 14,
    fontWeight: 'bold',
  },
});