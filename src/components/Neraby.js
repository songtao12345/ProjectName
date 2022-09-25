import React, {useRef, useState} from 'react'
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconAntd from 'react-native-vector-icons/AntDesign'

const DATA = [
    {
      zid: 1, title: '家家都有本难念的经，希望大家都好',
      nickname: '冲啊！黎明',
      zancount: 323,
      msgcount: 3,
      img: require('../assets/nearby/fj_03.png'),
      userphoto: require('../assets/nearby/fj-up_03.png')
    },
    {
      zid: 2, title: '练功练功！',
      nickname: '乐呵呵',
      zancount: 233,
      msgcount: 7,
      img: require('../assets/nearby/fj_05.png'),
      userphoto: require('../assets/nearby/fj-up_06.png')
    }, {
      zid: 3, title: '家家都有本难念的经，希望大家都好',
      nickname: '冲啊！黎明',
      zancount: 323,
      msgcount: 3,
      img: require('../assets/nearby/fj_03.png'),
      userphoto: require('../assets/nearby/fj-up_03.png')
    },
    {
      zid: 4, title: '练功练功！',
      nickname: '乐呵呵',
      zancount: 233,
      msgcount: 7,
      img: require('../assets/nearby/fj_05.png'),
      userphoto: require('../assets/nearby/fj-up_06.png')
    }, {
      zid: 5, title: '家家都有本难念的经，希望大家都好',
      nickname: '冲啊！黎明',
      zancount: 323,
      msgcount: 3,
      img: require('../assets/nearby/fj_03.png'),
      userphoto: require('../assets/nearby/fj-up_03.png')
    },
    {
      zid: 6, title: '练功练功！',
      nickname: '乐呵呵',
      zancount: 233,
      msgcount: 7,
      img: require('../assets/nearby/fj_05.png'),
      userphoto: require('../assets/nearby/fj-up_06.png')
    },
  ]
const Neraby = () => {
    const flatRef = useRef()
    const [list,setList] = useState(DATA)
    const renderItem = ({item}) => {
        return (
            <View style={styles.item}>
                <View>
                    <Image source={item.img} style={styles.themeImg}/>
                </View>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.userInfo}>
                    <Image source={item.userphoto} style={styles.userphoto}/>
                    <Text style={styles.nickname}>{item.nickname}</Text>
                </View>
                <View style={[styles.userInfo, styles.counts]}>
                    <View style={styles.countNumber}>
                        <IconAntd name="like2" size={20} style={styles.icons}/>
                        <Text>{item.zancount}</Text>
                    </View>
                    <View style={styles.countNumber}>
                        <IconAntd name="message1" size={20} style={styles.icons}/>
                        <Text>{item.zancount}</Text>
                    </View>
                </View>
            </View>
        )
    }
    const onEndReachedHandler = () => {
        Alert.alert("上拉触底", "数据加载成功")
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList ref={flatRef} 
                      data={list} 
                      renderItem={renderItem}
                      keyExtractor={item => item.zid}
                      horizontal={false}
                      numColumns={2}
                      scrollEnabled={true}
                      onRefresh={()=>{
                        Alert.alert("下拉刷新", "重新请求后台数据")
                      }}  // 下拉刷新
                      refreshing={false}
                      onEndReachedThreshold={0.05}  // 列表底部当距离底部距离时出发上拉触底
                      onEndReached={onEndReachedHandler}
                      ListFooterComponent={(
                          <View>
                              <MaterialIcons name="timer" size={30} style={styles.loads}/>
                          </View>
                      )}
                      >
                      

            </FlatList>
        </SafeAreaView>
    )
}

export default Neraby

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0'
    },
    loads: {
        textAlign: 'center',
        marginVertical: 20
    },
    item: {
        width: '50%',
        height: 350,
        padding: '1.5%',
        marginVertical: 5
    },
    themeImg: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    title: {
        fontSize: 14,
        color: 'black'
    },
    titleView: {
        height: 45,
        marginVertical: 5
    },
    userInfo: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center'
    },
    userphoto: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    nickname: {
        fontSize: 14,
        marginLeft: 10
    },
    counts: {
        justifyContent: 'space-around'
    },
    icons: {
        paddingRight: 10
    },
    countNumber: {
        flexDirection: 'row'
    }
})
