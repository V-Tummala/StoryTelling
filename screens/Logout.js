import React, {Component} from 'react';
import { View, Text } from 'react';
import firebase from 'firebase';

export default class Logout extends React.Component {

    componentDidMount() {
        firebase.auth().signOut();
        this.props.navigation.navigate('Login');
    }


    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Logout</Text>
            </View>
        )
    }
}