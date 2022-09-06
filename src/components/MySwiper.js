import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import Login from '../screen/Login'

const MySwiper = (props) => {
    let arr = props.images
    const goLoginPage = () => {
        console.log('111');
      
    }
    return (
        <View style={styles.swiperWrapper}>
            <Swiper>
                {
                    arr.map((item)=>{
                        return (
                            <View key={item.id} style={styles.swiperItem}>
                                <View>
                                    <Image style={styles.swiperImg} source={item.img}/>
                                </View>
                                {
                                    item.id === 3 && (
                                        <TouchableHighlight 
                                        style={styles.swiperImgButton}
                                        underlayColor="#F27600"
                                        activeOpacity={0.6}
                                        onPress={goLoginPage}>
                                            <View>
                                                <Text>立即体验</Text>
                                            </View>
                                        </TouchableHighlight>
                                    )
                                }
                            </View>
                        )
                    })
                }
            </Swiper>
        </View>
    )
}

export default MySwiper

const styles = StyleSheet.create({
    swiperWrapper: {
        flex: 1
    },
 
    swiperItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    swiperImg: {
        width: 200,
        height: 200
    },
    swiperImgButton: {

    }
})
