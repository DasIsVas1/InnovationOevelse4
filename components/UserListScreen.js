import React,{Component} from 'react';
import { Text, FlatList, View, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import UserItem from "./Api/UserItem";

const USERS_URL = 'https://randomuser.me/api?results=30'


export default class UserListScreen extends Component{

    state = {
        users: null,
        isLoading: false,
        error: null,
    };

    componentDidMount = () => {
        this.loadUserProfiles();
    };

    startLoading = () => this.setState({ isLoading: true });

    stopLoading = () => this.setState({ isLoading: false });

    setError = message => this.setState({ error: message });

    clearError = () => this.setState({ error: null });

    loadUserProfiles = async () => {
        try {
            this.startLoading();
            const response = await fetch(USERS_URL);
            const json = await response.json();
            console.log('json response from network', json);
            this.setState({ users: json.results });
            this.stopLoading();
            this.clearError();
        } catch (error) {
            this.stopLoading();
            this.setError(error.message);
        }
    };


    render() {

        const {isLoading, users, error} = this.state;

        return (
            <View style = {styles.container}>

                {isLoading && <ActivityIndicator />}

                {users && (
                    <FlatList style = {styles.inlineScroll}
                        data = {users}
                        // Vi sender vores item, som er en enkelt user med som prop til userItem
                        // Vi sender også vores eventhandler med som prop, så UserItem ikke ksal håndtere navigation
                        // this.handleSelectUser modtager en uder som argument

                        renderItem ={({item}) => (
                            <UserItem user = {item} onSelect = {this.handleSelectUser} />
                        )}

                        keyExtractor = {item => item.login.uuid}
                    />
                )}
                {/*Hvis der er fejl, dvs. state.error er sat, viser vi fejlen */}
                {error && <Text style = {styles.error}> Error: {error}</Text>}

            </View>
        );


    }
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    inlineScroll:{
        height: 500
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    error: {
        color:'red'
    },
});

