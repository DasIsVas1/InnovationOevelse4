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