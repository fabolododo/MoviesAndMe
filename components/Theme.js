import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import  { ThemeStyle } from '../styles/ThemeStyle'

class Theme extends React.Component {
    constructor(props) {
        super(props);

    }

    _toggleChangeTheme() {
        let action
        if (this.props.toggleTheme == 'light') {
            action = { type: "TOGGLE_DARK" }
        } else {
            action = { type: "TOGGLE_LIGHT" }
        }
        this.props.dispatch(action);
    }

    render () {
        return (
            <View style={ this.props.toggleTheme === 'dark' ? ThemeStyle.main_dark : ThemeStyle.main_light }>
                {/* <View style={styles.main_container}> */}
                    <Text style={ this.props.toggleTheme === 'dark' ? ThemeStyle.text_dark : ThemeStyle.text_light }>Couleur du thème: { this.props.toggleTheme }</Text>
                    <Button title='Changer de thème' onPress={() => this._toggleChangeTheme()}>
                    </Button>
                {/* </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const mapStateToProps = (state) => {
    return {
        toggleTheme: state.toggleChangeTheme.toggleTheme
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Theme);