import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Library',
    },
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

       <View style={styles.libraryContainer}>
         <Text>Library Coming Soon!</Text>
       </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  libraryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
