import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import IconAntd from 'react-native-vector-icons/AntDesign'

const GuanZhuItem = ({data}) => {
    return (
        <>
        <View style={styles.container}>
            <View style={styles.headers}>
                <Image style={styles.headerImg} source={data.uPhoto}/>
                <View>
                    <Text style={styles.headerNickname}>{data.uNickName}</Text>
                    <Text style={styles.timecity}>{data.time}.{data.city}</Text>
                </View>
            </View>
            <View>
            <Text style={styles.content}>{data.content}</Text>
            </View>
            <View>
                <Image source={data.imgContent} style={styles.imgContent}/>
            </View>
            <View style={styles.tags}> 
                <View style={styles.tagItem}> 
                    <Text style={styles.tagfirst}>#</Text>
                    <Text style={styles.tagtext}>{data.tag}</Text>
                </View>
            </View>
            <View style={styles.tools}>
                <View style={styles.defaultTools}>
                    <View style={styles.countnumber}>
                        <IconAntd style={[styles.icons,styles.colorblue]} name="like2" size={20} color="gray"/>
                        <Text style={styles.colorblue}>{data.zanCount}</Text>
                    </View>
                    <View style={styles.countnumber}>
                        <IconAntd name="message1" size={20} color="gray" style={styles.icons}/>
                        <Text style={styles.msgCount}>{data.msgCount}</Text>
                    </View>
                </View>

            </View>
        </View>
        <View style={styles.msgList}>
            {
                data.leaveWord.map((item,index)=>{
                    return (
                        <View key={item.lid} style={styles.msgItem}>
                            <Text style={styles.luNickName}>{item.luNickName}</Text>
                            <Text style={styles.lmsg}>{item.lmsg}</Text>
                        </View>    
                    )
                })
            }
            <View>
                <Text style={styles.showmore}>查看全部评论</Text>
            </View>
        </View>
        </>
    )
}

export default GuanZhuItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10
    },
    headers: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5
    },
    headerImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10
    },
    headerNickname: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    timecity: {
        fontSize: 14,
        color: 'gray'
    },
    content: {
        fontSize: 14,
        fontWeight: '800',
        lineHeight: 25,
        marginVertical: 15
    },
    imgContent: {
        width: 150,
        height: 150
    },
    tags: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 10
    },
    tagfirst: {
        backgroundColor: '#fff',
        width: 16,
        height: 16,
        borderRadius: 8,
        textAlign: 'center',
        lineHeight: 16,
        color: '#c5c2f7',
        marginRight: 4,
        fontSize: 12
    },
    tagItem: {
        backgroundColor: '#7fccff',
        flexDirection: 'row',
        padding: 5,
        borderRadius: 25
    },
    tagtext: {
        fontSize: 12,
        color: 'white'
    },
    tools: {
        
    },
    defaultTools: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '50%'
    },
    icons:{
        paddingRight: 10
    },
    colorblue: {
        color: "#7fccff"
    },
    countnumber: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '50%'
    },
    msgCount: {

    },
    msgList: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10
    },
    msgItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    luNickName: {
        fontSize: 14,
        fontWeight: 'blod',
        color: 'black',
        lineHeight: 24,
        marginRight: 10
    },
    lmsg:{
        color: 'gray'
    },
    showmore: {
        lineHeight: 30,
        fontSize: 16,
        color: 'gray',
        marginVertical: 3
    }

})

