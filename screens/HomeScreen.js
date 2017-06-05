import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Button,
  ActivityIndicator,
  Keyboard,
} from 'react-native';

import { connect } from 'react-redux';
import { fetchMovie } from '../actions/movieActions';

import { MonoText } from '../components/StyledText';
import Colors from '../constants/Colors';

import Movie from '../components/Movie';
const rogueOne = {
  "Title": "Rogue One",
  "Year": "2016",
  "Rated": "PG-13",
  "Released": "16 Dec 2016",
  "Runtime": "133 min",
  "Genre": "Action, Adventure, Sci-Fi",
  "Director": "Gareth Edwards",
  "Writer": "Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story by), Gary Whitta (story by), George Lucas (based on characters created by)",
  "Actors": "Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen",
  "Plot": "The Rebel Alliance makes a risky move to steal the plans for the Death Star, setting up the epic saga to follow.",
  "Language": "English",
  "Country": "USA",
  "Awards": "Nominated for 2 Oscars. Another 11 wins & 67 nominations.",
  "Poster": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "7.9\/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "85%"
    },
    {
      "Source": "Metacritic",
      "Value": "65\/100"
    }
  ],
  "Metascore": "65",
  "imdbRating": "7.9",
  "imdbVotes": "315,407",
  "imdbID": "tt3748528",
  "Type": "movie",
  "DVD": "04 Apr 2017",
  "BoxOffice": "$532,171,696",
  "Production": "Walt Disney Pictures",
  "Website": "http:\/\/www.starwars.com\/",
  "Response": "True"
};

class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Movie Search',
      headerStyle: {
        backgroundColor: Colors.primary,
      },
    },
  };
  constructor() {
    super();
    this.state = {
      t: ''
    };
  }

  render() {
    const { movieFetchError, loading, moviesByID, allMovieIDs } = this.props;
    let selectedMovie = {};
    // currently selected move is the last one in the list of ids
    if (allMovieIDs.length > 0) selectedMovie = moviesByID[allMovieIDs[allMovieIDs.length - 1]];

    const movieFetchErrorAlert = this.props.movieFetchError === '' ? null : (
      <View style={styles.movieFetchErrorContainer}>
        <Text style={styles.movieFetchErrorText}>{this.props.movieFetchError}</Text>
      </View>
    );
    const loadingView = this.props.loading ? (
      <ActivityIndicator
        animating={true}
        size="large"
        color="#000000"
      />
    ) : null;
    const fetchMovie = () => {
      Keyboard.dismiss();
      this.props.onFetchMovie(this.state);
    }
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="always"
         >
           <View style={styles.searchboxContainer}>
             <TextInput
               style={styles.searchbox}
               onChangeText={(text) => this.setState({ t: text })}
               placeholder="Search for a movie title..."
               value={this.state.t}
               caretHidden
             />
             <Button
               style={styles.searchMoviesButton}
               onPress={fetchMovie}
               title="Search"
               color={Colors.tintColor}
             />
           </View>
           <View>{loadingView}</View>
           <View>{movieFetchErrorAlert}</View>
           <View>
             <Movie {...selectedMovie} />
           </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 10,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  searchboxContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 45,
    marginLeft: 5,
    marginRight: 5,
    ...Platform.select({
      ios: {},
      android: {}
    }),
  },
  searchbox: {
    flex: 5,
  },
  searchMoviesButton: {
    flex: 1,
  },
  centering: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieFetchErrorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 56,
    height: 40,
    backgroundColor: '#D50000',
  },
  movieFetchErrorText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

const mapStateToProps = (state) => {
  return {
    loading: state.movies.loading,
    moviesByID: state.movies.byID,
    allMovieIDs: state.movies.allIDs,
    movieFetchError: state.movies.movieFetchError
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMovie: (movie) => dispatch(fetchMovie(movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
