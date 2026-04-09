import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); 
  const [userToken, setUserToken] = useState(null); 

  const checkLoginState = async () => {
    console.log("1. Bắt đầu đọc ổ cứng...");
    try {
      const storedToken = await AsyncStorage.getItem('userToken');
      console.log("2. Đọc xong! Token tìm thấy là:", storedToken);
      
      if (storedToken !== null) {
        setUserToken(storedToken);
      }
    } catch (e) {
      console.log("Lỗi đọc Storage:", e);
    } finally {
      console.log("3. Tắt vòng xoay Loading.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkLoginState();
  }, []);

  const login = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.setItem('userToken', 'da-dang-nhap');
      setUserToken('da-dang-nhap'); 
    } catch (e) {
      console.log("Lỗi lưu Storage:", e);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.removeItem('userToken');
      setUserToken(null);
    } catch (e) {
      console.log("Lỗi xóa Storage:", e);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <AppContext.Provider value={{ isLoading, userToken, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};