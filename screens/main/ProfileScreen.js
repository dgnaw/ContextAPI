import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 

import { AppContext } from '../../context/AppContext';

export default function ProfileScreen() {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topSection}></View>
      
      <View style={styles.bottomSection}>
        <Text style={styles.nameText}>Nam</Text>
        <Text style={styles.roleText}>Mobile developer</Text>
        
        <Text style={styles.descText}>
          I have above 5 years of experience in native mobile apps development, now i am learning React Native
        </Text>

        <TouchableOpacity 
          style={styles.signOutBtn}
          onPress={() => setIsLoggedIn(false)}
        >
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F5F5F5' },
  topSection: {
    flex: 0.4,
    backgroundColor: '#00BFFF', 
  },
  bottomSection: {
    flex: 0.6,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  nameText: {
    fontSize: 28,
    fontWeight: '400',
    color: '#555',
    marginBottom: 5,
  },
  roleText: {
    fontSize: 16,
    color: '#00BFFF',
    marginBottom: 20,
  },
  descText: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },
  signOutBtn: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});