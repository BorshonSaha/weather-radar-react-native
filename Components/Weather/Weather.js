import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Search from '../Search/Search';

export default function Weather({ weatherData, fetchWeatherData }) {

    const { weather, name,
        main: { temp, humidity },
        wind: { speed }
    } = weatherData;

    const [{ main }] = weather;


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='lightgray' />
            <Search fetchWeatherData={fetchWeatherData} />

            <View style={{ alignItems: 'center' }}>
                <Text style={{ ...styles.headerText, fontWeight: 'bold', fontSize: 40 }}>{name}</Text>
                <Text style={{ ...styles.headerText, fontWeight: 'bold' }}>{main}</Text>
                <Text style={{ ...styles.headerText }}>{temp} °C</Text>
            </View>

            <View style={styles.extraInfo}>

                <View style={styles.info}>
                    <Text style={{ fontSize: 22, color: 'white' }}>Humidity</Text>
                    <Text style={{ fontSize: 22, color: 'white' }}>{humidity} %</Text>
                </View>

                <View style={styles.info}>
                    <Text style={{ fontSize: 22, color: 'white' }}>Wind Speed</Text>
                    <Text style={{ fontSize: 22, color: 'white' }}>{speed} m/s</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 36,
        marginTop: 10,
    },
    extraInfo: {
        marginTop: 20,
        justifyContent: 'space-between',
        padding: 10
    },
    info: {
        backgroundColor: 'darkgray',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center'
    }
});
