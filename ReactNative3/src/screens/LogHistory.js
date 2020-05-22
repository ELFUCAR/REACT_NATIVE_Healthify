import {Component} from "react";
import {Button, Image, StyleSheet, Text, TouchableOpacity, View,FlatList} from 'react-native';
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
                source={require('../assets/reloadicon.jpg')}/>
        )
    }
};

export default class LogHistory extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Text style={styles.yazi}>Log History</Text>,
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
                    onPress={() => navigation.navigate('LogHis')}>
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
            <View style={styles.Logs_con}><Text style={{fontWeight:'bold',marginLeft:8,marginTop:8}}>Logs</Text></View>
              <View style={styles.flatlist_con}><FlatList
                    data={[
                        {key: '201903301330 duration: 60sec'},
                        {key: '201903301330 duration: 5mins'},
                        {key: '201903301330 duration: 20mins'},
                        {key: '201903301330 duration: 60sec'},
                        {key: '201903301330 duration: 5mins'},
                        {key: '201903301330 duration: 20mins'},
                        {key: '201903301330 duration: 60sec'},
                    ]}
                    renderItem={({item}) => <Text style={styles.flatList}>{item.key}</Text>}
                /></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // justifyContent: 'center',
       // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    yazi:{
        fontSize:16,
        fontWeight:'bold'
    },
    Logs_con:{
        backgroundColor: '#4DD0E1',
        height:40,
        borderColor:'#aaa',
        borderWidth:0.8
    },
    flatlist_con:{
        width:390,
        marginLeft:3
    },
    flatList: {
       padding: 10,
        fontSize: 15,
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.6
    }
});
