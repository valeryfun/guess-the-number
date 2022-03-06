import React, { useState } from 'react'
import {
	View,
	StyleSheet,
	Text,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert
} from 'react-native'
import BodyText from './BodyText'
import Input from './Input'
import Card from './Card'
import NumberContainer from './NumberContainer'
import Colors from '../constants/colors'

const StartGameScreen = props => {
	const [enteredNumber, setenteredNumber] = useState('')
	const [confirmed, setConfirmed] = useState(false)
	const [selectedNumber, setSelectedNumber] = useState()

	const numberInputHandler = inputText => {
		setenteredNumber(inputText.replace(/[^0-9]/g), '')
	}
	const resetInputHandler = () => {
		setenteredNumber('')
		setConfirmed(false)
	}
	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredNumber)
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Invalid Number!', 'Number has to be between 1 - 99', [
				{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }
			])
		}
		setConfirmed(true)
		setSelectedNumber(chosenNumber)
		setenteredNumber('')
		Keyboard.dismiss()
	}

	let confirmedOutput

	if (confirmed) {
		confirmedOutput = (
			<Card style={styles.summaryContainer}>
				<Text>You've selected</Text>
				<NumberContainer>{selectedNumber}</NumberContainer>
				<Button
					title='Start Game!'
					onPress={() => props.onStartGame(selectedNumber)}
				/>
			</Card>
		)
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss()
			}}
		>
			<View style={styles.screenContainer}>
				<BodyText style={styles.title}>Start a New Game!</BodyText>
				<Card style={styles.inputContainer}>
					<BodyText style={styles.subtitle}>Select a Number!</BodyText>
					<Input
						style={styles.input}
						blurOnSubmit
						keyboardType='number-pad'
						maxLength={2}
						onChangeText={numberInputHandler}
						value={enteredNumber}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button
								title='Reset'
								color={Colors.accent}
								onPress={resetInputHandler}
							/>
						</View>
						<View style={styles.button}>
							<Button
								title='Confirm'
								color={Colors.primary}
								onPress={confirmInputHandler}
							/>
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
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
	subtitle: {
		textAlign: 'center'
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
	input: {
		textAlign: 'center'
	},
	button: {
		width: 100
	},
	summaryContainer: {
		marginTop: 20,
		alignItems: 'center'
	}
})

export default StartGameScreen
