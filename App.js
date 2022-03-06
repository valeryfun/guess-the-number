import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

import Header from './components/Header'
import StartGameScreen from './components/StartGameScreen'
import GameScreen from './components/GameScreen'
import GameOverScreen from './components/GameOverScreen'

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/open-sans.ttf')
	})
}

export default function App() {
	const [userNumber, setUserNumber] = useState()
	const [rounds, setRounds] = useState(0)
	const [isDataLoaded, setIsDataLoaded] = useState(false)

	if (!isDataLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setIsDataLoaded(true)}
				onError={err => console.log(err)}
			/>
		)
	}

	const configureNewGameHandler = () => {
		setRounds(0)
		setUserNumber(null)
	}

	const startGameHandler = selectedNumber => {
		setUserNumber(selectedNumber)
	}

	const gameOverHandler = numberOfRounds => {
		setRounds(numberOfRounds)
	}

	let content = <StartGameScreen onStartGame={startGameHandler} />

	if (userNumber && rounds <= 0) {
		content = (
			<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
		)
	} else if (rounds > 0) {
		content = (
			<GameOverScreen
				numberOfRounds={rounds}
				userNumber={userNumber}
				onRestart={configureNewGameHandler}
			/>
		)
	}

	return (
		<View style={styles.container}>
			<Header title='Guess a Number!' />
			{content}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
