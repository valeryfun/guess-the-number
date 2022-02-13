import React from 'react'
import Colors from '../constants/colors'
import { StyleSheet, Text, View } from 'react-native'

const Header = props => {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.headerTitle}>{props.title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	headerContainer: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerTitle: {
		color: 'black',
		fontSize: 18
	}
})

export default Header
