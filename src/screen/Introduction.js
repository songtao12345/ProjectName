import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MySwiper from '../components/MySwiper'

const Introduction = (props) => {
    const [swiperImgs,setSwiperImgs] = useState([
        {id:1,img: require("../assets/introduction/introduction1.png")},
        {id:2,img: require("../assets/introduction/introduction2.png")},
        {id:3,img: require("../assets/introduction/introduction3.png")}
    ])
    return (
        <View style={styles.container}>
            <MySwiper {...props} images={swiperImgs}></MySwiper>
        </View>
    )
}

export default Introduction

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
