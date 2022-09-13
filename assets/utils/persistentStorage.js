import AsyncStorage from '@react-native-async-storage/async-storage';

export const savePersistentData = async (id, val) => {
  //   console.log(id, val);
  const data = JSON.stringify(val);
  const key = id.toString();
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    console.log('Error while setting persistent storage: ', error);
  }
};

export const getPersistentData = async id => {
  const key = id.toString();
  try {
    const data = await AsyncStorage.getItem(key);
    return await JSON.parse(data);
  } catch (error) {
    console.log('Error while getting persistent storage: ', error);
  }
};

export const clearPersistentData = async id => {
  try {
    await AsyncStorage.removeItem(id);
  } catch (error) {
    console.log('Error while clearing persistent storage: ', error);
  }
};
