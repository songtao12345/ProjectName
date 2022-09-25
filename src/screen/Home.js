import React, { PureComponent } from 'react'
import { View,Text,StyleSheet, TouchableHighlight } from 'react-native'

export default class Home extends PureComponent {
    constructor(props) {
        super(props)
        console.log("HomeScreen constructor start")
        this.didFocusListener = this.props.navigation.addListener(
            'didFocus',
            (obj) => {console.log("HomeScreen didFocus start")}
            );
        this.didBlurListener = this.props.navigation.addListener(
            'didBlur',
            (obj) => {console.log('HomeScreen didBlur start')}
            );
    
    }
    render() {
        return (
            <View>
                <Text>Home</Text>
                <TouchableHighlight onPress={()=>{this.props.navigation.navigate("Profiles")}}>
                    <View>
                        <Text>下一页</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
