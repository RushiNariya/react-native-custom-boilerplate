import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItemInStorage = async (key: string, data: string) => {
  try {
    return await AsyncStorage.setItem(key, data);
  } catch (error) {
    return null;
  }
};

export const getItemFromStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return value;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const removeStoreItem = async (key: string) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    return null;
  }
};

export const setObjectInStore = async (key: string, data: string) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    return null;
  }
};

export const getObjectFromStore = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  } catch (error) {
    return null;
  }
};

//KEPT THE TYPE ANY FOR NOW. CHANGE ACCORDINGLY
export const storeMultiDelete = async (keyArray: any) => {
  try {
    return await AsyncStorage.multiRemove(keyArray);
  } catch (error) {
    return null;
  }
};

export const clearStorage = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (error: any) {
    return null;
  }
};
