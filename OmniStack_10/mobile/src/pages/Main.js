import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main() {
    const [currentRegion, setCurrentRegion] = useState(null);
    useEffect(() => {
        async function loadInitionPosition() {
            const { granted } = await requestPermissionsAsync();
            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04
                });
                console.log(currentRegion['latitude']);


            }
        }
        loadInitionPosition();
    }, [])

    if (!currentRegion) {
        return null;
    }
    return (
        <MapView initialRegion={currentRegion} style={style.map} >
            <Marker coordinate={{ latitude: currentRegion['latitude'], longitude: currentRegion['longitude'] }}>
                <Image style={style.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/24841314?s=460&v=4' }} />
                <Callout>
                    <View style={style.callout}>
                        <Text style={style.devName}>Lucas</Text>
                        <Text style={style.devBio}>BIO</Text>
                        <Text style={style.devTechs}>Tecnologia</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
    )
}

const style = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF'
    },
    callout: {
        width: 260,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    devBio: {
        color: '#666',
        marginTop: 5
    },
    devTechs: {
        marginTop: 5
    }

});

export default Main;