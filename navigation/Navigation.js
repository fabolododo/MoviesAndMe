import { createStackNavigator, createAppContainer } from 'react-navigation';
import Search from '../components/Search';
import FilmDetail from '../components/FilmDetail';

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

export default createAppContainer(SearchStackNavigator);