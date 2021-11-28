import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Bird from './components/characters/bird';
import Obstacles from './components/obstacles';

export default function App() {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const birdLeft = screenWidth / 2
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
  const [obstacleLeft, setObstacleLeft] = useState(screenWidth)
  const [obstacleSecondLeft, setObstacleSecondLeft] = useState(screenWidth + screenWidth/2 + 30)
  const [obstacleRandomHeight, setObstacleRandomHeight] = useState(0)
  const [obstacleSecondRandomHeight, setObstacleSecondRandomHeight] = useState(0)
  const [score, setScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)
  const obstacleWidth = 60
  const obstacleHeight = 300
  const gap = 200
  const gravity = 3;
  let gameTimerId
  let obstaclesLeftTimerId
  let obstaclesSecondLeftTimerId

  


  
  useEffect(() => {
    if(birdBottom > 0) {
   gameTimerId= setInterval(() => {
          setBirdBottom(birdBottom => birdBottom - gravity ) 
     
    }, 30)
    return () => clearInterval(gameTimerId)
  }
   }, [birdBottom])

   //obstacle timing 1
   useEffect(() => {
    if(obstacleLeft > -60) {
        obstaclesLeftTimerId = setInterval(() => {
            setObstacleLeft(obstacleLeft => obstacleLeft - 5 )
        }, 30)
        return () => clearInterval(obstaclesLeftTimerId)
    } else {
        setObstacleLeft(screenWidth)
        setObstacleRandomHeight(-Math.random() *100)
        setScore((score => score + 1))
    }
}, [obstacleLeft])


   //obstacle timing 2
   useEffect(() => {
    if(obstacleSecondLeft > -60) {
        obstaclesSecondLeftTimerId = setInterval(() => {
            setObstacleSecondLeft(obstacleSecondLeft => obstacleSecondLeft - 5 )
        }, 30)
        return () => clearInterval(obstaclesSecondLeftTimerId)
    } else {
        setObstacleSecondLeft(screenWidth)
        setObstacleSecondRandomHeight(-Math.random() *100)
        setScore((score => score + 1))
    }
}, [obstacleSecondLeft])

//check if bird hits obstacle
  useEffect(() => {
    if((birdBottom < (obstacleRandomHeight + obstacleHeight + 30)||
    birdBottom > (obstacleRandomHeight + obstacleHeight +gap - 30 ))&&
    (obstacleLeft > screenWidth / 2 - 30 && obstacleLeft < screenWidth / 2 + 30)
    ||
    ((birdBottom < (obstacleSecondRandomHeight + obstacleHeight + 30)||
    birdBottom > (obstacleSecondRandomHeight + obstacleHeight + gap - 30))&&
    (obstacleSecondLeft > screenWidth / 2 - 30 && obstacleSecondLeft < screenWidth / 2 + 30))) {
      gameOver()
    }
}, [birdBottom, obstacleLeft, obstacleSecondLeft])

const gameOver = () => {
  setIsGameOver(true)
  clearInterval(gameTimerId)
  clearInterval(obstaclesLeftTimerId)
  clearInterval(obstaclesSecondLeftTimerId)
}

const jump = () => {
  if(!isGameOver && birdBottom<screenHeight) {
    setBirdBottom(birdBottom => birdBottom + 50)
  }

  }

  return (
    <TouchableWithoutFeedback onPress={jump}>
    <View style={styles.container}>
  
      <Bird
      birdBottom={birdBottom} 
      birdLeft={birdLeft} />
      <Obstacles
      color={'blue'}
      obstacleLeft={obstacleLeft}
      obstacleWidth={obstacleWidth}
      obstacleHeight={obstacleHeight}
      random={obstacleRandomHeight}
      gap={gap} />
      {isGameOver && 
      <>
          <Text>{score}</Text>
      <Text>Game Over</Text>
      </>}
        <Obstacles
        color={'yellow'}
      obstacleLeft={obstacleSecondLeft}
      obstacleWidth={obstacleWidth}
      obstacleHeight={obstacleHeight}
      random={obstacleSecondRandomHeight}
      gap={gap} />
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
