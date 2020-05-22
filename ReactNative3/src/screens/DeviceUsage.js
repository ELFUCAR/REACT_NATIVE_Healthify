import {Component} from "react";
import {Slider,Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from "react";

class RightTitleLogo extends Component{
    render(){
        return(
            <Image
                style={{width:30,height:30}}
                source={require('../assets/zilicon.jpg')}/>
        )
    }
};

export default class DeviceUsage extends Component {
    state = {
        value: 0.2
    };

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Text style={styles.yazi}>Take the action!</Text>,
            headerRight: (
                <TouchableOpacity
                    style={{marginRight: 10 }}
                    onPress={() => navigation.navigate('FeedB')}>
                    <RightTitleLogo/>
                </TouchableOpacity>
            )
        }
    };


    render() {
        const {navigate,goBack,push,getParam}=this.props.navigation;
     //   const title=getParam('title');

        return (
            <View style={styles.container}>
                <View style={styles.general_con}>

                    <View style={styles.photo_con}>
                        <Image  style={{width:100,height:100}} source={require('../assets/webcam.png')}/>
                    </View>

                    <View style={styles.up_con}>
                            <View style={styles.info_con}>
                                <TouchableOpacity style={{marginRight: 10 }}
                                                   onPress={() => navigate('LogHis')}>
                                    <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.text_con1}>Collected Logs</Text>
                                     <View><Image style={styles.image_con} source={require('../assets/righticon.jpg')}/></View>
                                    </View>
                                </TouchableOpacity>
                                <Text style={styles.text_con2}>5k items to share with server</Text>
                            </View>
                            <View style={styles.info_con}>
                                <TouchableOpacity style={{marginRight: 10 }}
                                                  onPress={() => navigate('Direct')}>
                                    <Text style={styles.text_con3}>Sync With Server</Text>
                                </TouchableOpacity>
                       </View>
                    </View>
             </View>

                <View style={styles.down_con}>
                    <View><Image style={styles.close_con} source={require('../assets/closeIcon.jpg')}/></View>

                <View style={{flexDirection: 'row',marginTop: 90}}>
                    <Image style={styles.images_left} source={require('../assets/lefticon.jpg')}/>
                    <Text style={{fontSize:26,marginTop:12}}>Pulse Mode 1</Text>
                    <Image style={styles.images_right} source={require('../assets/righticon.jpg')}/>
                </View>
                <View style={styles.Slider_con}>
                    <Slider
                        value={this.state.value}
                        onValueChange={value => this.setState({ value })}/>
                    <Text>Value: {this.state.value}</Text>
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // justifyContent: 'center',
     //   alignItems: 'center',
       // backgroundColor: '#F5FCFF',
        backgroundColor:'white'
    },
    yazi:{
        fontSize:16,
        fontWeight:'bold'
    },
    general_con:{
        flexDirection:'row',
        marginTop:40
    },
    photo_con:{
        width:103,
        height:103,
        borderWidth:1.5,
        borderColor:'#808080',
        marginLeft:5
    },
    up_con:{
        //   alignItems: 'center',
       // marginTop:10
    },

    info_con:{
        width: 290,
        height: 51,
        borderWidth:0.5,
        borderColor:'#aaa',
        alignItems: 'center',
      //  flexDirection: 'column'

    },
    text_con1:{
        marginTop: 5,
        marginLeft:30,
        fontWeight:'bold'
    },
    image_con:{
        width:15,
        height:15,
        marginTop: 8,
        marginLeft: 10
    },
    text_con2:{
        marginTop: 5,
        color:'#A9A9A9',
        fontWeight:'bold'
    },
    text_con3:{
        marginTop:15,
        color:'#00BFFF',
        fontWeight:'bold',

    },
    down_con:{
     //  justifyContent: 'center',
        alignItems: 'center',
        marginTop:70,
        height:390,
        width:400
    },
    close_con:{
        height:165,
        width:150
    },
    Slider_con:{
     width:320,
     marginLeft:30,
        marginTop:50
    },
    images_left:{
    marginRight: 15,
    },
    images_right:{
       marginLeft:15,
    }
});
