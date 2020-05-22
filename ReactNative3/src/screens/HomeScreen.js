import {Component} from "react";
import {StyleSheet, Text,TextInput, View,Button,Image,TouchableOpacity} from "react-native";
import React from "react";
import AboutModal from './AboutModal';

class TitleLogo extends Component{
    render(){
     return(
         <Image
             style={{width:110,height:42}}
             source={require('../assets/Logo.png')}/>
     )
    }
};


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '',
        mail:'',
        number:''};
    }

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <TitleLogo/>,
            headerRight: (
                <TouchableOpacity
                    style={{marginRight: 10 }}
                    onPress={() => navigation.navigate('Modal')}>

                    <Text style={{color:'#00BFFF'}}>Done</Text>
                </TouchableOpacity>
            ),
            headerLeft: (
                <TouchableOpacity
                    style={{marginLeft: 10 }}
                    onPress={() => navigation.navigate('Slides')}>

                    <Text style={{color:'#00BFFF'}}>Cancel</Text>
                </TouchableOpacity>
            )
        }
    };
    render() {

        // navigate,goBack,getParam,push

        return (
            <View style={styles.container}>

                <View style={styles.photo_con}><Image  style={{width:152,height:152}} source={require('../assets/webcam.png')}/></View>
            <View style={styles.info_container}>

                <View style={styles.info_con}><Text style={styles.yazi}>Set your information</Text></View>
                <View style={styles.info_con}><TextInput style={{height: 40}} placeholder="How can we call you? (your name)" onChangeText={(name) => this.setState({name})} value={this.state.name}/></View>
                <View style={styles.info_con}><TextInput style={{height: 40}} placeholder="Email" onChangeText={(mail) => this.setState({mail})} value={this.state.mail}/></View>
                <View style={styles.info_con}><TextInput style={{height: 40}} placeholder="Phone Number!" onChangeText={(number) => this.setState({number})} value={this.state.number}/></View>
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
        backgroundColor: '#DCDCDC',
    },
    yazi:{
        fontSize:16,
        color:'#00BFFF',
        textAlign :'center',
        marginTop: 8
        //justifyContent: 'center',
       // alignItems: 'center'
    },
    info_container:{
        backgroundColor: 'white',
         width:395,
        height:160,
        borderWidth:0.5,
        borderColor:'#aaa',
        marginTop:15

    },
    info_con:{
        width: 395,
        height: 40,
        borderWidth:0.5,
        borderColor:'#aaa',
    },
    photo_con:{
        width:155,
        height:155,
        borderWidth:1.75,
        borderColor:'black',
    }
});
