import {Component} from "react";
import {Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from "react";

class LeftTitleLogo extends Component{
    render(){
        return(
            <Image
                style={{width:30,height:30}}
                source={require('../assets/lefticon.jpg')}/>
        )
    }
};

class RightTitleLogo extends Component{
    render(){
        return(
            <Image
                style={{width:30,height:30}}
                source={require('../assets/mouse_icon.jpg')}/>
        )   //gönder ok
    }
};


export default class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {writing:''};
    }
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Text style={styles.yazi}>Give a feedback</Text>,
            headerLeft: (
                <TouchableOpacity
                    style={{marginLeft: 5 }}
                    onPress={() => navigation.goBack()}>
                    <LeftTitleLogo/>
                </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity
                    style={{marginRight: 10 }}
                    onPress={() => navigation.navigate('FeedBack')}>
                <RightTitleLogo/>
                </TouchableOpacity>
            )
        }
    };



    render() {
        const {navigate,goBack,push,getParam}=this.props.navigation;
        const title=getParam('title');
        return (
            <View style={styles.container}>
                <View><Text style={{fontSize: 32}}>How was the food?</Text><Image style={styles.photo_1} source={require('../assets/photomachineicon.jpg')}/></View>
                <View style={styles.emoji}>
                    <TouchableOpacity><Image style={styles.photo_2} source={require('../assets/sad_face_icon_3.jpg')}/></TouchableOpacity>
                    <TouchableOpacity><Image style={styles.photo_2} source={require('../assets/sad_face_icon.jpg')}/></TouchableOpacity>
                    <TouchableOpacity><Image style={styles.photo_2} source={require('../assets/sad_face_icon_2.jpg')}/></TouchableOpacity>
                </View>
                <View style={styles.text_con}>
                    <Text>Decribe your feeling...</Text>
                    <TextInput style={styles.text_input} placeholder="..." onChangeText={(writing) => this.setState({writing})} value={this.state.writing}/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    yazi:{
        fontSize:16,
        fontWeight:'bold'
    },
    emoji:{
        flexDirection:'row',
        marginTop: 80
       // width:40,
       // height:40

    },
    photo_2:{
        width:40,
        height:40,
        marginLeft: 20
    },
    photo_1:{
        width:170,
        height:150,
        marginTop:30,
        marginLeft:50
    },
    text_con:{
        width:250,
        height:150,
        marginTop:80,
        marginLeft:-80

    },
    text_input: {
        height: 120,
        width: 340,
        borderWidth:0.5,
        borderColor:'#aaa',
        marginTop: 10
    }
});
