import React,{useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const {width, height} = Dimensions.get('window');
const InputAuthCode = props => {
  // console.log(props.route.params.telVal);
  const CELL_COUNT = 4;
  let second = 60
  const [value, setValue] = useState('');
  const [isActive, setActive] = useState(false)
  const [time, modifyTimeValue] = useState(second)
  const [timeId, setTimeId] = useState(null)
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props1, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const submitHandle = () => {
      if(isActive == false) return
      // 请求后台数据接口
    //   console.log("手机号码：", props.route.params.telVal);
    //   console.log("验证码：", value);
    // 进行页面跳转
    props.navigation.navigate("TabNav")
      
  }
  const checkValueLength = (text) => {
      setValue(() => {
          if(value.length + 1 == 4) {
              setActive(true)
          }
          return text
      })
  }
  // 请求发送验证码方法
  const getCode = () => {
      console.log('请求后台，发送短信到当前手机号');
  } 
  const changeTime = (time) => {
    let now = Date.now()
    const overTimes = now + time * 1000 + 100
    setTimeId(setInterval(() => {
        const nowStamp = Date.now()
        if(nowStamp >= overTimes) {
            clearInterval(timeId)
        }else {
            const leftTime = parseInt((overTimes - nowStamp)/1000,10)
            modifyTimeValue(leftTime)
        }
    },1000))
  }
  useEffect(()=>{
    getCode()
    const focusListener =  props.navigation.addListener("focus",(obj)=>{
        changeTime(second)
    })
    const blurListener = props.navigation.addListener("blur",(obj)=>{
        clearInterval(timeId)
    })
    return () => {
        focusListener()
        blurListener()
    }

  },[])
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/login/loginbg.png')}
        style={styles.bgImg}>
        <View style={styles.headerText}>
          <Text style={styles.headerTextDes}>请输入验证码</Text>
          <Text style={styles.headerTextTel}>
            已发送 4 位验证码到+86{' '}
            <Text style={styles.headerTelValue}>{'13888888888'}</Text>
          </Text>
        </View>
        {/* 验证码输入框 */}
        <SafeAreaView style={styles.root}>
          <CodeField
            ref={ref}
            {...props1}
            value={value}
            onChangeText={(text) => {
                checkValueLength(text)
            }}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            onFocus = {() => {
                setActive(false)
            }}
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </SafeAreaView>
        {/* 确定按钮 */}
        <TouchableHighlight onPress={submitHandle} style={[styles.buttonWrap,isActive ? styles.activeButton : ""]}>
            <View>
                <Text style={styles.button}>确定</Text>
            </View>
        </TouchableHighlight>

        {/* 倒计时功能 */}
        <View>
            <Text style={styles.regain} 
                 onPress={() => {
                     if(time != 0) return
                     modifyTimeValue(second)
                     changeTime(second)
                 }}>重新获取(<Text style={styles.time}>{time}</Text>)</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InputAuthCode;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    justifyContent: 'flex-start',
  },
  bgImg: {
    flex: 1,
    paddingHorizontal: 40,
  },
  headerText: {
    marginTop: 80,
  },
  headerTextDes: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
  headerTextTel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
  },
  headerTelValue: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  // 验证码样式
  root: { padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {paddingVertical: 40},
  cell: {
    width: 60,
    height: 60,
    lineHeight: 58,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#fff',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: "white",
    borderRadius: 5
  },
  focusCell: {
    borderColor: '#fff',
  },
  buttonWrap: {
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  activeButton: {
    backgroundColor: "rgba(47,152,255,0.8)"
  },
  button: {
      color: "white",
      textAlign: "center",
      fontSize: 18
  },
  regain: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    marginTop: 20
  },
  time: {
    color: 'gray',
    fontWeight: 'bold'
  }
});
