import React, {Component} from 'react';
import {Text, View, SafeAreaView, FlatList, ScrollView, StyleSheet} from 'react-native';
import CarBrandItem from "./local/CarBrandItem";

export default class CarFlatListScreen extends Component {
    render() {

        const carBrands = [
            "Abarth",
            "Alfa Romeo",
            "Aston Martin",
            "Audi",
            "Bentley",
            "BMW",
            "Bugatti",
            "Cadillac",
            "Chevrolet",
            "Chrysler",
            "Citroën",
            "Dacia",
            "Daewoo",
            "Daihatsu",
            "Dodge",
            "Donkervoort",
            "DS",
            "Ferrari",
            "Fiat",
            "Fisker",
            "Ford",
            "Honda",
            "Hummer",
            "Hyundai",
            "Infiniti",
            "Iveco",
            "Jaguar",
            "Jeep",
            "Kia",
            "KTM",
            "Lada",
            "Lamborghini",
            "Lancia",
            "Land Rover",
            "Landwind",
            "Lexus",
            "Lotus",
            "Maserati",
            "Maybach",
            "Mazda",
            "McLaren",
            "Mercedes-Benz",
            "MG",
            "Mini",
            "Mitsubishi",
            "Morgan",
            "Nissan",
            "Opel",
            "Peugeot",
            "Porsche",
            "Renault",
            "Rolls-Royce",
            "Rover",
            "Saab",
            "Seat",
            "Skoda",
            "Smart",
            "SsangYong",
            "Subaru",
            "Suzuki",
            "Tesla",
            "Toyota",
            "Volkswagen",
            "Volvo"
        ];

        const renderCarBrandItem = ({item}) =>(
            <CarBrandItem CarBrandName={item}/>
        )

        return (
            <View style={styles.container}>

                <Text style ={{ fontSize: 20, textAlign: 'center', paddingTop: 40}}>2. Flatlist</Text>

                <FlatList
                    style = {styles.inlineScroll}
                    data = {carBrands}
                    renderItem = {renderCarBrandItem}
                    keyExtractor = {item => item}
                />

            </View>
        )


    }
}

const styles = StyleSheet.create({
    inlineScroll: {
        height: 500
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


