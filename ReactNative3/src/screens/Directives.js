import {Component} from "react";
import {Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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

export default class Directives extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Text style={styles.yazi}>Directives</Text>,
            headerLeft: (
                <TouchableOpacity
                    style={{marginLeft: 5 }}
                    onPress={() => navigation.goBack()}>
                    <LeftTitleLogo/>
                </TouchableOpacity>
            )
        }
    };

    render() {
        const {navigate,goBack,push,getParam}=this.props.navigation;
        const title=getParam('title');
        return (
            <View style={styles.container}>
                <View style={styles.Directives_con}><Text style={{fontWeight:'bold',marginLeft:8,marginTop:8}}>Directives received from server</Text></View>
                <View style={styles.flatlist_con}><FlatList
                    data={[
                        {key: 'Yesterday-Use device for 20 minutes on lunch'},
                        {key: 'Monday-Today please do not activate the device'},
                        {key: 'Last Week-You are not using properly, this affects the'},


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
     //   alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    yazi:{
        fontSize:16,
        fontWeight:'bold'
    },
    Directives_con:{
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
    },
});
