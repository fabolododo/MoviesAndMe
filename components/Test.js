import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import HelloWorld from './HelloWorld'

class Test extends React.Component {

    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.subview_container}>
                    <HelloWorld/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subview_container: {
        ...Platform.select({
            ios: {
                // backgroundColor: 'red',
                height: 'auto',
                width: 'auto'
            },
            android: {
                backgroundColor: 'blue',
                height: 50,
                width: 100
            }
        })
    }
})

export default Test