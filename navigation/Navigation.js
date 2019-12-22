import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet, Image } from 'react-native';
import Search from '../components/Search';
import FilmDetail from '../components/FilmDetail';
import Favorites from '../components/Favorites';

const SearchStackNavigator = createStackNavigator({
    search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher'
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const MoviesTabNavigator = createBottomTabNavigator({
    Search: {
        screen: SearchStackNavigator,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Image
                    source={require('../assets/ic_search.png')}
                    style={styles.icon}
                    tintColor={{ tintColor }}
                    />
            }
        }
    },
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Image
                    source={require('../assets/ic_favorite.png')}
                    style={styles.icon}
                    tintColor={{ tintColor }}
                    />
                
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeBackgroundColor: '#744481',
            activeTintColor: 'white',
            inactiveTintColor: '#d8d8d8',
            inactiveBackgroundColor: '#9973a2',
            showLabel: true,
            showIcon: true,
            safeAreaInset: { bottom: 'never', top: 'never' }  // <-- this is the solution
        }
    }
)

const styles = StyleSheet.create({
    icon: {
      width: 30,
      height: 30,
      tintColor: 'white'

    }
  })

export default createAppContainer(MoviesTabNavigator);