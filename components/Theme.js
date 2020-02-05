import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';

class Theme extends React.Component {
    constructor(props) {
        super(props);


    }

    render () {
        return (
            <View style={styles.main_container}>
                <Text>Couleur du thème: </Text>
                <Button title='Changer de thème'>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Theme;