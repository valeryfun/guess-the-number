import React from 'react'
import Colors from '../constants/colors'
import BodyText from './BodyText'
import { StyleSheet, Text, View } from 'react-native'

const Header = props => {
	return (
		<View style={styles.headerContainer}>
			<BodyText style={styles.headerTitle}>{props.title}</BodyText>
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
		fontSize: 22,
		fontWeight: 'bold'
	}
})

export default Header
