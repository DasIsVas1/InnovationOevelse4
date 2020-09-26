import React, {Component} from 'react';
import {Linking, StyleSheet, Button, Text, View, TouchableOpacity, Image} from 'react-native';

export default class UserItem extends Component {




    sendEmail = () => {
        const {user} = this.props;
        const emailUrl = "mailto:"+user.email;
        Linking.openURL(emailUrl);
    };

    handleClick = () => {
      const {user, onSelect} = this.props;
      onSelect(user);
    };



    render() {
        const {user} = this.props;

        return (
            <TouchableOpacity style = {styles.container} onPress = {this.handleClick}>

                <Image style={styles.image} source={{uri: user.picture.thumbnail}} />

                <Text> {user.name.first} {user.name.last} </Text>

                {/* Denne knap håndtere klik på email add. i rækken*/}

                <Button title={user.email} onPress={this.sendEmail}  />


            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create ({
    image: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    container: {
        flexDirection: 'column',
        margin: 10,
        alignItems: 'center',
    },
});







/*
import React,{Component} from 'react';
import {Text, View, ScrollView,StyleSheet } from 'react-native';

export default class CarBrandItem extends Component{
    render() {
        const{CarBrandName} = this.props
        return(
            <View >
                <Text>
                    Oh boy i love " {CarBrandName} "
                </Text>
            </View>

        )
    }
}
 */