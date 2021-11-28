import React from 'react'
import { Image } from 'react-native'
import Zanate from '../../../assets/zanate.png'

 const Bird = (props) => {
     const {birdBottom,birdLeft} = props
     const birdWidth = 50
        const birdHeight = 50
      

    return (
            <Image style={{ 
                width: birdWidth,
                height: birdHeight,
                backgroundImage: {Zanate},
                
                position: 'absolute',
               bottom: birdBottom,
                left: birdLeft - (birdWidth / 2),
              
             
            }}
            source={Zanate}/>
    )
}


export default Bird