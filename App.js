import { StyleSheet, View } from 'react-native'
import React from 'react'

import Header from './components/Header'
import StartGameScreen from './components/StartGameScreen'

export default function App() {
	return (
		<View style={styles.container}>
			<Header title='Guess a Number!' />
			<StartGameScreen />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
