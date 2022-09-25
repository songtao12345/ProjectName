import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Alert, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Neraby from '../components/Neraby'
import Attention from '../components/Attention'
import DynamicState from '../components/DynamicState'

const GoCircle = (props) => {
    const [searchText, setSearchText] = useState("请输入搜索内容")
    const [searchValue, setSearchValue] = useState("")
    const [indexValue,setIndexValue] = useState(0)
    // 显示要渲染的组件
    // console.log(props.route.key);
    const componentId = props.route.key
    const showTabsComponent = (componentId) => {
        switch(indexValue) {
            case 0:
                return <Neraby componentId={componentId}/>
            case 1:
                return <Attention componentId={componentId}/>
            case 2:
                return <DynamicState componentId={componentId}/>
        }
    }
    return (
        <View style={styles.container}>
            {/* 顶部搜索栏 */}
            <View style={styles.headerSearch}>
                <View style={styles.searchInput}>
                    <Icon name="search" size={20} color="#999"/>
                    <TextInput placeholder={searchText} 
                               value={searchValue}
                               inlineImagePadding={5}
                               returnKeyType="search"
                               maxLength={50}
                               onSubmitEditing={()=>{
                                   Alert.alert("搜索", searchValue)
                               }}
                               onChangeText={(text)=>{
                                    setSearchValue(text)
                               }}
                               onFocus={(e)=>{
                                e.target.clear()
                               }}/>
                </View>
                <View style={styles.headerIcons}>
                    <Icon name="user-plus" size={20} color="gray"/>
                    <Icon2 name="mail" size={20} color="gray"/>
                </View>
            </View>
            {/* 选项卡 */}
            <View style={styles.tab}> 
                <TouchableHighlight >
                        <Text style={indexValue === 0 ? styles.activeTab : styles.defaultTab}
                              onPress= {()=>{
                                setIndexValue(0)  
                            }}>附件</Text>
                </TouchableHighlight>
                <TouchableHighlight >
                        <Text style={indexValue === 1 ? styles.activeTab : styles.defaultTab}
                            onPress= {()=>{
                                setIndexValue(1)
                            }}>关注</Text>
                </TouchableHighlight>
                <TouchableHighlight >
                        <Text style={indexValue === 3 ? styles.activeTab : styles.defaultTab}
                            onPress= {()=>{
                                setIndexValue(2)
                            }}>动态</Text>
                </TouchableHighlight>
            </View>
            {/* 选项卡内容区域 */}
            <View style={styles.tabcontent}>
                {
                    showTabsComponent(componentId)
                }
            </View>


        </View>
    )
}

export default GoCircle

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerSearch: {
        height: 50,
        marginTop: 10,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    searchInput: {
        width: "80%",
        height: 40,
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexShrink: 1,
        paddingLeft: 5,
        borderRadius: 20
    },
    headerIcons: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tab: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: '#dbd8d8'
    },
    activeTab: {
        color: 'red',
        height: 40,
        lineHeight: 40,
        borderBottomWidth: 2,
        borderBottomColor: 'red',
        fontSize: 16,
        fontWeight: 'blod'
    },
    defaultTab: {
        height: 40,
        lineHeight: 40,
        color: '#000'
    },
    tabcontent: {
        backgroundColor: '#eee',
        flex: 1
    }
})
