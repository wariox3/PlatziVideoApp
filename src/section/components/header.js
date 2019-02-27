import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native';

function Header(props) {
    return (
        <View>
            <SafeAreaView>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={styles.logo}
                >

                </Image>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 26,
        resizeMode: 'contain',
    }
})

export default Header;