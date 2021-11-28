import React from 'react'
import { View, Image } from 'react-native'
import tuberiaUp from '../../assets/tuberiaUp.png'
import tuberiaDown from '../../assets/tuberiaDown.png'
const Obstacles = (props) => {
    const {obstacleLeft,obstacleHeight,obstacleWidth,gap,color,random} = props
    
    return (
       <>
       <View style={{
              position: 'absolute',
                width: obstacleWidth,
                height: obstacleHeight,
               
                left: obstacleLeft,
                bottom: random + obstacleHeight + gap,
         }}>
             <Image source={tuberiaUp} style={{width: '100%', height: '100%'}} />
         </View>

            <View style={{
                position: 'absolute',
                  width: obstacleWidth,
                  height: obstacleHeight,
                  
                  left: obstacleLeft,
                  bottom: random,
                  boxShadow: '0 8px 10px rgba(0, 0, 0, 0.5)',
                  
           }}>
                    <Image source={tuberiaDown} style={{width: '100%', height: '100%'}} />
           </View>
           </>
           
    )
}
export default Obstacles

