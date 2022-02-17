import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
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

	const currentLow = useRef(1)
	const currentHigh = useRef(100)

	const nextGuessHandler = direction => {
		if (
			(direction === 'lower' && currentGuess < props.userChoice) ||
			(direction === 'greater' && currentGuess > props.userChoice)
		) {
			Alert.alert("Don't lie!", 'You know that this is incorrect!', [
				{ text: 'Sorry!', style: 'cancel' }
			])
			return
		}
		if (direction === 'lower') {
			currentHigh.current = currentGuess
		} else {
			currentLow.current = currentGuess
		}
		const nextNumber = generateRandomNumberBetween(
			currentLow.current,
			currentHigh.current,
			currentGuess
		)
		setCurrentGuess(nextNumber)
	}

	return (
		<View style={styles.gameScreenContainer}>
			<Text>Computer's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<Button title='Lower!' onPress={nextGuessHandler.bind(this, 'lower')} />
				<Button
					title='Greater!'
					onPress={nextGuessHandler.bind(this, 'greater')}
				/>
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
