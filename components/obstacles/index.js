import React from 'react'
import { View, StyleSheet } from 'react-native'
const Obstacles = (props) => {
    const {obstacleLeft,obstacleHeight,obstacleWidth,gap,color,random} = props
    
    return (
       <>
       <View style={{
              position: 'absolute',
                width: obstacleWidth,
                height: obstacleHeight,
                backgroundColor: color,
                left: obstacleLeft,
                bottom: random + obstacleHeight + gap,
         }}>
         </View>
            <View style={{
                position: 'absolute',
                  width: obstacleWidth,
                  height: obstacleHeight,
                  backgroundColor: color,
                  left: obstacleLeft,
                  bottom: random,
                  boxShadow: '0 8px 10px rgba(0, 0, 0, 0.5)',
                  
           }}></View>
           </>
           
    )
}
export default Obstacles

