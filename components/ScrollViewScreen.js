import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';


export default class ScrollViewScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style ={{ fontSize: 20, textAlign: 'center', paddingTop: 40}}>1. ScrollView Horisontalt</Text>
                <ScrollView style={{height: 50}} horizontal={true}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et malesuada dolor. Duis turpis
                        nisl, fermentum sit amet tincidunt eget, eleifend in nisi. Vestibulum pharetra diam quis metus
                        interdum viverra. Suspendisse venenatis vehicula lobortis. Etiam id tellus porta, porttitor eros
                        sed, porta urna. Fusce elit orci, ultrices ut purus at, euismod placerat justo. Pellentesque id
                        quam
                        volutpat, ullamcorper tortor eu, mattis ante. Aliquam et ligula tempor, pulvinar leo rhoncus,
                        feugiat enim.

                        Aliquam erat volutpat. Maecenas ac lectus eget ex bibendum laoreet et et diam. Integer nulla
                        eros,
                        eleifend nec quam ut, tincidunt porta libero. Aenean turpis metus, consectetur et mollis in,
                        suscipit non neque. Curabitur lobortis risus eget turpis condimentum, vitae venenatis massa
                        molestie. Sed eget tortor elementum, mattis urna et, consequat enim. Donec interdum ac velit
                        quis
                        venenatis.

                        Sed non volutpat dolor. Phasellus consequat ultrices luctus. Pellentesque eleifend tortor quis
                        metus
                        interdum, id mollis neque porttitor. Vivamus efficitur dapibus orci sed eleifend. Quisque nec
                        ultricies diam. Phasellus et lacus at lorem rutrum laoreet. Maecenas suscipit mattis ultricies.
                        Nullam facilisis lacinia turpis, non mollis est cursus ac. Fusce viverra felis nisi, a elementum
                        tellus placerat nec. Ut dui neque, bibendum ac volutpat ut, porta in purus. Mauris tincidunt
                        ante
                        magna, ut convallis ex tincidunt nec. Nam quis egestas nisi.

                        Quisque malesuada tempus magna non efficitur. Pellentesque pulvinar mauris nec pellentesque
                        pretium.
                        Suspendisse cursus lacinia augue, vel blandit nisl placerat non. Vivamus maximus viverra
                        lacinia.
                        Pellentesque auctor semper semper. Sed sit amet dui accumsan, elementum ante at, mattis est.
                        Pellentesque quis dolor lacinia, placerat augue eu, euismod ipsum. Morbi posuere cursus dui,
                        quis
                        feugiat eros. Integer sit amet bibendum ex, a consectetur tortor. Nullam suscipit vulputate ante
                        id
                        ultrices. Proin dignissim tristique orci iaculis tempus. Aliquam felis augue, eleifend sodales
                        magna
                        sit amet, consequat ornare dolor.

                        Sed non volutpat dolor. Phasellus consequat ultrices luctus. Pellentesque eleifend tortor quis
                        metus
                        interdum, id mollis neque porttitor. Vivamus efficitur dapibus orci sed eleifend. Quisque nec
                        ultricies diam. Phasellus et lacus at lorem rutrum laoreet. Maecenas suscipit mattis ultricies.
                        Nullam facilisis lacinia turpis, non mollis est cursus ac. Fusce viverra felis nisi, a elementum
                        tellus placerat nec. Ut dui neque, bibendum ac volutpat ut, porta in purus. Mauris tincidunt
                        ante
                        magna, ut convallis ex tincidunt nec. Nam quis egestas nisi.

                        Quisque malesuada tempus magna non efficitur. Pellentesque pulvinar mauris nec pellentesque
                        pretium.
                        Suspendisse cursus lacinia augue, vel blandit nisl placerat non. Vivamus maximus viverra
                        lacinia.
                        Pellentesque auctor semper semper. Sed sit amet dui accumsan, elementum ante at, mattis est.
                        Pellentesque quis dolor lacinia, placerat augue eu, euismod ipsum. Morbi posuere cursus dui,
                        quis
                        feugiat eros. Integer sit amet bibendum ex, a consectetur tortor. Nullam suscipit vulputate ante
                        id
                        ultrices. Proin dignissim tristique orci iaculis tempus. Aliquam felis augue, eleifend sodales
                        magna
                        sit amet, consequat ornare dolor.


                    </Text>
                </ScrollView>


                <Text style ={{ fontSize: 20, textAlign: 'center', paddingTop: 40}}>1. ScrollView Vertikalt</Text>
                <ScrollView style={{height: 500}} horizontal={false}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et malesuada dolor. Duis turpis
                        nisl, fermentum sit amet tincidunt eget, eleifend in nisi. Vestibulum pharetra diam quis metus
                        interdum viverra. Suspendisse venenatis vehicula lobortis. Etiam id tellus porta, porttitor eros
                        sed, porta urna. Fusce elit orci, ultrices ut purus at, euismod placerat justo. Pellentesque id
                        quam
                        volutpat, ullamcorper tortor eu, mattis ante. Aliquam et ligula tempor, pulvinar leo rhoncus,
                        feugiat enim.

                        Aliquam erat volutpat. Maecenas ac lectus eget ex bibendum laoreet et et diam. Integer nulla
                        eros,
                        eleifend nec quam ut, tincidunt porta libero. Aenean turpis metus, consectetur et mollis in,
                        suscipit non neque. Curabitur lobortis risus eget turpis condimentum, vitae venenatis massa
                        molestie. Sed eget tortor elementum, mattis urna et, consequat enim. Donec interdum ac velit
                        quis
                        venenatis.

                        Sed non volutpat dolor. Phasellus consequat ultrices luctus. Pellentesque eleifend tortor quis
                        metus
                        interdum, id mollis neque porttitor. Vivamus efficitur dapibus orci sed eleifend. Quisque nec
                        ultricies diam. Phasellus et lacus at lorem rutrum laoreet. Maecenas suscipit mattis ultricies.
                        Nullam facilisis lacinia turpis, non mollis est cursus ac. Fusce viverra felis nisi, a elementum
                        tellus placerat nec. Ut dui neque, bibendum ac volutpat ut, porta in purus. Mauris tincidunt
                        ante
                        magna, ut convallis ex tincidunt nec. Nam quis egestas nisi.

                        Quisque malesuada tempus magna non efficitur. Pellentesque pulvinar mauris nec pellentesque
                        pretium.
                        Suspendisse cursus lacinia augue, vel blandit nisl placerat non. Vivamus maximus viverra
                        lacinia.
                        Pellentesque auctor semper semper. Sed sit amet dui accumsan, elementum ante at, mattis est.
                        Pellentesque quis dolor lacinia, placerat augue eu, euismod ipsum. Morbi posuere cursus dui,
                        quis
                        feugiat eros. Integer sit amet bibendum ex, a consectetur tortor. Nullam suscipit vulputate ante
                        id
                        ultrices. Proin dignissim tristique orci iaculis tempus. Aliquam felis augue, eleifend sodales
                        magna
                        sit amet, consequat ornare dolor.

                        Sed non volutpat dolor. Phasellus consequat ultrices luctus. Pellentesque eleifend tortor quis
                        metus
                        interdum, id mollis neque porttitor. Vivamus efficitur dapibus orci sed eleifend. Quisque nec
                        ultricies diam. Phasellus et lacus at lorem rutrum laoreet. Maecenas suscipit mattis ultricies.
                        Nullam facilisis lacinia turpis, non mollis est cursus ac. Fusce viverra felis nisi, a elementum
                        tellus placerat nec. Ut dui neque, bibendum ac volutpat ut, porta in purus. Mauris tincidunt
                        ante
                        magna, ut convallis ex tincidunt nec. Nam quis egestas nisi.

                        Quisque malesuada tempus magna non efficitur. Pellentesque pulvinar mauris nec pellentesque
                        pretium.
                        Suspendisse cursus lacinia augue, vel blandit nisl placerat non. Vivamus maximus viverra
                        lacinia.
                        Pellentesque auctor semper semper. Sed sit amet dui accumsan, elementum ante at, mattis est.
                        Pellentesque quis dolor lacinia, placerat augue eu, euismod ipsum. Morbi posuere cursus dui,
                        quis
                        feugiat eros. Integer sit amet bibendum ex, a consectetur tortor. Nullam suscipit vulputate ante
                        id
                        ultrices. Proin dignissim tristique orci iaculis tempus. Aliquam felis augue, eleifend sodales
                        magna
                        sit amet, consequat ornare dolor.


                    </Text>
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },
    StyledView: {
        height: 15,
    }
});

