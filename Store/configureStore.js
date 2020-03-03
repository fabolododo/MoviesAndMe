import { createStore } from 'redux';
import toggleFavorite from '../reducers/favoriteReducer';
import setAvatar from '../reducers/avatarReducer';
import { persistCombineReducers } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    timeout: null
}

export default createStore(persistCombineReducers(rootPersistConfig, {toggleFavorite, setAvatar}))