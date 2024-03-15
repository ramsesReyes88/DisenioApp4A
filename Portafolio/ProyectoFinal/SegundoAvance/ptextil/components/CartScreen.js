import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function CartScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.text} >Hola Cart</Text>
        </View>
    );    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
      fontSize: 30,
      alignItems: 'center',
      marginTop: '20%',
    },
});