import React, {useRef,useState} from 'react'
import { Alert, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconAntd from 'react-native-vector-icons/AntDesign'



// 动态数据模拟：
const DtData = [
    {
      dtId: 1,
      uNickName: "-这家伙很懒-",
      time: '2020/11/04 21:02',
      uPhoto: require("../assets/dongtai/dongtai_13.png"),
      guanzhuCount: 65000,
      dtContent: '等待马甲线的52天今天只练早场消耗也蛮大的中午的牛排杂粮卷好好吃.',
      zanCount: 6696,
      msgCount: 2256,
      contentImg: [
        {
          cimgId: 1,
          img: require("../assets/dongtai/dongtai_17.png")
        },
        {
          cimgId: 2,
          img: require("../assets/dongtai/dongtai_19.png")
        },
      ]
    },
    {
      dtId: 2,
      uNickName: "冲A大力！",
      time: '2020/11/04 21:02',
      uPhoto: require("../assets/dongtai/dongtai_24.png"),
      guanzhuCount: 15000,
      dtContent: '帕梅拉简直是宝藏女孩啊！要说健练还是国外的狠，你累得面目全非，人家却无任何喘粗气的痕迹。',
      zanCount: 350,
      msgCount: 103,
      contentImg: [
        {
          cimgId: 1,
          img: require("../assets/dongtai/dongtai_28.png")
        },
        {
          cimgId: 2,
          img: require("../assets/dongtai/dongtai_29.png")
        },
      ]
    },
    {
      dtId: 3,
      uNickName: "撸铁绅士",
      time: '2020/11/04 21:02',
      uPhoto: require("../assets/dongtai/dongtai_32.png"),
      guanzhuCount: 25000,
      dtContent: '真正的稀缺资源是对方的谈吐，对方的知识面，对方 的商业视野，对方控制局面的能力，对方的情绪稳定。不要小看上面这些特点，要培养这些优点..',
      zanCount: 1235,
      msgCount: 564,
      contentImg: [
        {
          cimgId: 1,
          img: require("../assets/dongtai/dongtai_36.png")
        },
        {
          cimgId: 2,
          img: require("../assets/dongtai/dongtai_37.png")
        },
      ]
    },
    {
      dtId: 4,
      uNickName: "木木就是我啊",
      time: '2020/11/04 21:02',
      uPhoto: require("../assets/dongtai/dongtai_41.png"),
      guanzhuCount: 25000,
      dtContent: '时间返回到9年前记忆海绵体搜索其实顺产当天结束后一切正常',
      zanCount: 1234,
      msgCount: 244,
      contentImg: [
        {
          cimgId: 1,
          img: require("../assets/dongtai/dongtai_45.png")
        },
        {
          cimgId: 2,
          img: require("../assets/dongtai/dongtai_46.png")
        },
      ]
    }
  ]

const DynamicStateHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerItem}>
                <MaterialIcons style={[styles.headerIconView, styles.headerIconBlue]} name="library-books" size={30} color="white"/>
                <Text style={styles.headerText}>全部课程</Text>
            </View>
            <View style={styles.headerItem}>
                <MaterialIcons style={[styles.headerIconView, styles.headerIconPink]} name="tag" size={30} color="white"/>
                <Text style={styles.headerText}>热议话题</Text>
            </View>
            <View style={styles.headerItem}>
                <IconAntd style={[styles.headerIconView, styles.headerIconOrange]} name="filetext1" size={30} color="white"/>
                <Text style={styles.headerText}>百科知识</Text>
            </View>
        </View>
    )
}
const DynamicStateFooter = () => {
    return (
        <View>
            <MaterialIcons name="timer" size={30} color="red" style={styles.load}/>
        </View>
    )
}
const dtRenderItem = (item) => {
    return (
        <View style={styles.dtListItem}>
            <View style={styles.dtItemHeader}>
                <View style={styles.headerUser}>
                    <Image style={styles.uPhoto} source={item.uPhoto}/>
                    <View>
                        <Text style={styles.uNickName}>{item.uNickName}</Text>
                        <Text style={styles.guanzhuCount}>{item.guanzhuCount}人关注ta</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.guanzhutag} onPress={()=>{
                        Alert.alert("确定关注", "请确定你是否要关注该用户",[{text: '取消'},{text: '确定'}])
                    }}>关注</Text>
                </View>
            </View>
            <View style={styles.dtItemContent}>
                <Text style={styles.dtContent}>{item.dtContent}...
                    <Text style={styles.dtmore}>全部</Text>
               </Text>
            </View>
            <View style={styles.dtItemImgs}>
                {
                    item.contentImg.map((item,index)=>{
                        return (
                            <Image key={item.cimgId} source={item.img} style={styles.dtimg}/>
                        )
                    })
                }
            </View>
            <View style={styles.dtItemIcon}></View>
        </View>
    )
}
const DynamicState = (props) => {
    const flatRef = useRef()
    const [list,setList] = useState(DtData)
   
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            ref={flatRef}
            data={list}
            style={styles.flatlist}
            keyExtractor={(item) => {
                return item.dtId
            }}
            ListHeaderComponent={<DynamicStateHeader/>}
            ListFooterComponent={<DynamicStateFooter/>}
            renderItem={({item}) => {
                return dtRenderItem(item)
            }}
            onEndReachedThreshold={0.01}
            onEndReached={()=>{
                Alert.alert("上拉触底", "通过上拉触底来加载新的数据")
                flatRef.current.scrollToIndex({
                    animation: true,
                    index: 0.5
                })
            }}
            >

            </FlatList>
        </SafeAreaView>
    )
}

export default DynamicState

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3'
    },
    flatlist: {
        flex: 1
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#fff'
    },
    headerItem: {
        alignItems: 'center'
    },
    headerIconView: {
        width: 50,
        height: 50,
        lineHeight: 50,
        borderRadius: 25,
        backgroundColor: 'blue',
        textAlign: 'center'
    },
    headerIconBlue: {
        backgroundColor: '#8baae1'
    },
    headerIconPink: {
        backgroundColor: '#8a87d4'
    },
    headerIconOrange: {
        backgroundColor: '#e9c885'
    },
    headerText: {
        marginVertical: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    load: {
        textAlign: 'center',
        paddingVertical: 10,
        color: 'gray'
    },
    dtListItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        marginBottom: 5
    },
    dtItemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    guanzhutag: {
        backgroundColor: '#09f',
        color: "white",
        paddingHorizontal: 15,
        paddingVertical: 3,
        fontSize: 12,
        borderRadius: 25,
    },
    dtItemContent: {
        marginVertical: 10
    },
    dtContent: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 30,
        color: '#4a4b4b'
    },
    dtmore: {
        color: '#c3c3c3',
        fontWeight: 'bold'
    },
    dtItemImgs: {

    },
    dtItemIcon: {

    },
    headerUser: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    uPhoto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5
    },
    uNickName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    guanzhuCount: {
        color: 'gray',
        fontSize: 12
    },
    dtItemImgs:{
        flexDirection: 'row',
        marginVertical: 10
    },
    dtimg:{
        width: 100,
        height: 100,
        marginRight: 20
    }
})
