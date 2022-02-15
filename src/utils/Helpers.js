import AsyncStorage from '@react-native-community/async-storage'

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.log('store error is here', e)
    // saving error
  }
}
const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value
  } catch (e) {
    console.log('data get error', e)
    // error reading value
  }
}

export default {
  storeData,
  getData,
}
