import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import BodyText from './BodyText'

const GameOverScreen = props => {
	return (
		<View style={styles.container}>
			<BodyText>Game Over!</BodyText>
			<BodyText>Number of Rounds: {props.numberOfRounds}</BodyText>
			<BodyText>Number was: {props.userNumber}</BodyText>
			<Button title='New Game' onPress={props.onRestart} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default GameOverScreen
