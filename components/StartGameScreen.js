import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import Input from './Input'
import Card from './Card'
import Colors from '../constants/colors'

const StartGameScreen = props => {
	return (
		<View style={styles.screenContainer}>
			<Text style={styles.title}>Start a New Game!</Text>
			<Card style={styles.inputContainer}>
				<Text>Select a Number!</Text>
				<Input />
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='Reset' color={Colors.accent} onPress={() => {}} />
					</View>
					<View style={styles.button}>
						<Button title='Confirm' color={Colors.primary} onPress={() => {}} />
					</View>
				</View>
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	title: {
		fontSize: 20,
		marginVertical: 10
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignContent: 'center'
	},
	button: {
		width: 100
	}
})

export default StartGameScreen
