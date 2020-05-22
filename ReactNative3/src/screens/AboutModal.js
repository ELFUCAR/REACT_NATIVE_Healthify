import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
export default class AboutModal extends Component {


   static navigationOptions = ({navigation}) => {
        return {
            headerMode: 'screen',
            headerTitle: <Text style={styles.yazi}>Pair your device</Text>,
        }
    };

    render(){
        const {navigate}=this.props.navigation;
        return(
            <View style={styles.container}>

                <Text style={styles.title}>Device XYZ is connected and ready</Text>
                <Image
                    style={styles.image_con}
                    source={require('../assets/correcticon.jpg')}/>

                <TouchableOpacity
                    style={styles.button_con}
                    onPress={() => { navigate('Device')}}>

                    <Text>Continue</Text>
                </TouchableOpacity>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
       alignItems:'center',
        backgroundColor:'white'
    },
    title:{
        fontSize:16,
        marginTop:20
    },
    yazi:{
        fontWeight:'bold',
        fontSize: 16
    },
    image_con:{
        width:250,
        height:250,
        marginTop:40
    },
    button_con:{
        width:160,
        height:45,
        justifyContent:'center',
        alignItems: 'center',
        color:'gray',
        borderColor:'gray',
        backgroundColor:'white',
        borderWidth: 2,
        borderRadius:5,
        marginTop: 200
    }
});
