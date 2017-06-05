import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/Colors';

const Movie = (props) => {
	if (!props || !props.Title) return null;
	const {
		Title, Year, Rated, Released, Runtime, Genre, Director, Writer,
		Actors, Plot, Awards, Ratings, BoxOffice
	} = props;
	return (
		<View style={styles.movieContainer}>

			<View style={styles.lineContainer}>
				<Text style={styles.header}>{Title}</Text>
				<Text style={styles.year}>{`(${Year})`}</Text>
				<Text style={styles.boxOffice}>{`Box Office ${BoxOffice}`}</Text>
			</View>
			<View style={styles.plotContainer}>
				<Text style={styles.header}>Plot</Text>
				<Text style={styles.plot}>{Plot}</Text>
			</View>
		</View>
	);
};

const itemFontWeight = '200';
const styles = StyleSheet.create({
	movieContainer: {
		flex: 1,
		backgroundColor: Colors.secondary,
	},
	lineContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		height: 50,
		borderWidth: 1,
		borderColor: Colors.secondaryDark,
	},
	header: {
		flex: 1,
		fontSize: 24,
		fontWeight: '300',
	},
	year: {
		flex: 1,
		fontSize: 14,
		fontWeight: itemFontWeight,
	},
	boxOffice: {
		flex: 1,
		marginLeft: 5,
	},
	lineItem: {
		flex: 1,
		fontWeight: itemFontWeight,
	},
	plotContainer: {
		flex: 1,
		backgroundColor: Colors.secondary,
	},
	plot: {
		flex: 1,
		fontSize: 20,
		fontWeight: itemFontWeight
	}
})

export default Movie;
