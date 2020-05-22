import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity, View, Button, Image} from 'react-native';
import Swiper from 'react-native-swiper';

export default class MainScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Text style={styles.t_1}>Welcome</Text>,
            headerRight: (
                <Text style={styles.t_2}>Get Started</Text>
            )
        }
    };

    render() {
        const {navigate,goBack,push,getParam}=this.props.navigation;
        return(
        <Swiper style={styles.wrapper} showsButtons loop={false}>
            <View testID="1" style={styles.slide1}>
                <Image
                    style={{width:180,height:250}}
                    source={require('../assets/bluetoothicon.jpg')}/>
                <Text style={{color: '#00BFFF',marginTop: 150,fontWeight:'bold',fontSize:16}}>Slide to read more ---></Text>
            </View>
            <View testID="2" style={styles.slide2}>
                <Text style={styles.text}>Connect your device</Text>
                <Image
                    style={{width:180,height:250,marginTop:30}}
                    source={require('../assets/bluetoothicon.jpg')}/>
                <Text style={{marginTop: 20,fontSize:16}}>Slide 2</Text>
            </View>
            <View testID="3" style={styles.slide3}>
                <Text style={styles.text}>Set your information</Text>
                <Image
                    style={{width:180,height:250,marginTop:30}}
                    source={require('../assets/bluetoothicon.jpg')}/>
                <Text style={{marginTop: 20,fontSize:16}}>Slide 3</Text>
            </View>
            <View testID="4" style={styles.slide4}>
                <Text style={styles.text}>Make your diet much healthier!</Text>
                <Image
                    style={{width:180,height:250,marginTop:30}}
                    source={require('../assets/bluetoothicon.jpg')}/>
                <Text style={{marginTop: 20,fontSize:16}}>Slide 4</Text>
            </View>

            <View testID="5" style={styles.slide5}>
                <Image
                    style={{width:300,height:120,marginTop:100}}
                    source={require('../assets/Logo.png')}/>

                <TouchableOpacity
                    style={styles.button_con}
                    onPress={() => { navigate('Home')}}>

                    <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:23,marginTop: 5}}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </Swiper>
        );
    }
}



var styles = {
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       // backgroundColor: '#9DD6EB',
        backgroundColor: 'white'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
        //backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
       // backgroundColor: '#92BBD9'
    },
    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
     //   backgroundColor: '#97CAE5'
    },
    slide5: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      //  backgroundColor: '#92BBD9'
    },
    t_1: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        marginTop: 8,
        fontWeight: 'bold'
    },
    t_2: {
        fontSize: 16,
        color: '#00BFFF',
        textAlign: 'center',
        marginTop: 8,
        fontWeight: 'bold',
        marginRight: 8
    },
    text: {
        color: 'black',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop:-120
    },
    button_con: {
        width: 220,
        height: 50,
        marginTop: 230,
        fontWeight: 'bold',
        fontSize: 25,
        backgroundColor:'#00BFFF',
        borderRadius: 5
    }
}
