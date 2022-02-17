import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import NumberContainer from './NumberContainer'
import Card from './Card'

const generateRandomNumberBetween = (min, max, exclude) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	const randomNumber = Math.floor(Math.random() * (max - min) + min)
	if (randomNumber === exclude) {
		return generateRandomNumberBetween(min, max, exclude)
	} else {
		return randomNumber
	}
}

const GameScreen = props => {
	const [currentGuess, setCurrentGuess] = useState(
		generateRandomNumberBetween(1, 100, props.userChoice)
	)

	return (
		<View style={styles.gameScreenContainer}>
			<Text>Computer's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<Button title='Lower!' />
				<Button title='Greater!' />
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
	gameScreenContainer: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: '80%'
	}
})

export default GameScreen
