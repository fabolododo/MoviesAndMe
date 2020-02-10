import { createStore } from 'redux';
import toggleFavorite from '../reducers/favoriteReducer';
import setAvatar from '../reducers/avatarReducer';
import toggleChangeTheme from '../reducers/themeReducer';
import { persistCombineReducers } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage
}

export default createStore(persistCombineReducers(rootPersistConfig, {toggleFavorite, setAvatar, toggleChangeTheme}))