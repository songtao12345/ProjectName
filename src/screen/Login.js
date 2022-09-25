import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions, TextInput, 
         TouchableHighlight, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import IconAntd from 'react-native-vector-icons/dist/AntDesign'

const {width, height} = Dimensions.get("window")
const Login = (props) => {
    const [telVal, setTelVal] = useState('')
    const onChangeText = (v) => {
        setTelVal(v)
    }
    const SubmitEditing = () => {
        checkTel()
    }
    const checkTel = ()=>{
        let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
        if(reg.test(telVal)) {
            // Alert.alert('验证结果','手机号码通过验证')
            setTelVal('')
            props.navigation.navigate("InputAuthCode",{
                telVal
            });
        }else {
           Alert.alert('验证结果','手机号码输入不规范')
        }
    }
    return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ImageBackground style={styles.bgImg} source={require("../assets/login/loginbg.png")}>
            <View style={styles.blackbgContainer}>
                {/* 上半部分 */}
                <View style={styles.header}>
                    <View style={styles.headerText}>
                        <Text style={styles.headerTextBig}>手机号登录/注册</Text>
                        <Text style={styles.headerTextSmall}>未注册手机验证后自动登录</Text>
                    </View>
                    <View style={styles.inputTel}>
                        <Text style={{color: 'white',fontSize: 18}}>+86</Text>
                        <Text style={styles.sortDown}> 
                            <Icon name="sort-down" size={20} color="#fff"/>
                        </Text>
                        <TextInput keyboardType="phone-pad"
                                   value={telVal}
                                   onChangeText={text => onChangeText(text)}
                                   placeholder="请输入11位手机号码"
                                   placeholderTextColor="white"
                                   maxLength={11}
                                   onSubmitEditing={SubmitEditing}
                                   style={styles.textInput}/>
                    </View>
                    <TouchableHighlight 
                    activeOpacity={0.6} 
                    underlayColor="#DDD"
                    onPress={()=>{
                        checkTel()
                    }}
                    >
                        <View style={styles.loginButton}>
                            <Text style={styles.loginText}>一键登录</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {/* 下半部分 */}
                <View style={styles.loginother}> 
                    <View>
                        <Text style={styles.otherTitle}>其他登录方式</Text>
                    </View>
                    <View style={styles.otherIcons}>
                        <TouchableHighlight activeOpacity={0.6} underlayColor="rgba(0,0,0,0.5)" 
                                            style={styles.otherIconItem} onPress={()=>{}}>
                            <Icon name="weixin" size={20} color="#fff" style={styles.otherIcon}/>
                        </TouchableHighlight>
                        <TouchableHighlight activeOpacity={0.6} underlayColor="rgba(0,0,0,0.5)" 
                                            style={styles.otherIconItem} onPress={()=>{}}>
                            <Icon name="qq" size={20} color="#fff" style={styles.otherIcon}/>
                        </TouchableHighlight>
                        <TouchableHighlight activeOpacity={0.6} underlayColor="rgba(0,0,0,0.5)" 
                                            style={styles.otherIconItem} onPress={()=>{}}>
                            <Icon name="weibo" size={20} color="#fff" style={styles.otherIcon}/>
                        </TouchableHighlight>
                        <TouchableHighlight activeOpacity={0.6} underlayColor="rgba(0,0,0,0.5)" 
                                            style={styles.otherIconItem} onPress={()=>{}}>
                            <IconAntd name="alipay-circle" size={20} color="#fff" style={styles.otherIcon}/>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <Text style={styles.footerdes}>登录即代表同意 运动GO
                            <Text style={styles.textLink}> 用户协议 </Text> 和 <Text style={styles.textLink}> 隐私政策 </Text>
                        </Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    bgImg: {
        width,
        height
    },
    blackbgContainer: {
        backgroundColor: "rgba(0,0,0,0.3)",
        height,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40
    },
    header: {
        height: '50%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around'
     
    },
    headerText: {
        paddingTop: 80,
        paddingBottom: 20
    },
    headerTextBig: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600'
    },
    headerTextSmall:{
        color: 'white', 
        paddingTop: 5,
        fontSize: 12
    },
    inputTel: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 40
    },
    textInput: {
        flexGrow: 1,
        height: 40,
        color: 'white',
        borderWidth: 0,
        fontSize: 18
    },
    sortDown: {
        marginHorizontal: 5,
        marginTop: -5
    },
    loginButton: {
        backgroundColor: "rgba(3,118,191,0.8)",
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 40,
        marginTop: -30
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    },
    loginother:{
        height: '50%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 100
    },
    otherTitle: {
     color: '#fff',
     fontSize: 16
     
    },
    otherIcons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20
    },
    otherIconItem:{
        width: 50,
        height: 50,
        backgroundColor: 'rgba(0,0,0,0.6)',
        lineHeight: 50,
        borderRadius: 25,
        marginHorizontal: 20
    },
    otherIcon: {
        width: 50,
        height: 50,
        lineHeight: 50,
        textAlign: 'center'
    },
    footerdes: {
        color: 'white',
        fontSize: 14
    },
    textLink: {
       textDecorationLine: 'underline'
    }
})
