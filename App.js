import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'

import Header from './components/Header'
import StartGameScreen from './components/StartGameScreen'
import GameScreen from './components/GameScreen'

export default function App() {
	const [userNumber, setUserNumber] = useState()

	const startGameHandler = selectedNumber => {
		setUserNumber(selectedNumber)
	}

	let content = <StartGameScreen onStartGame={startGameHandler} />

	if (userNumber) {
		content = <GameScreen userChoice={userNumber} />
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
