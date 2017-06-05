import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

export default class SettingsScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Settings',
    },
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        <View style={styles.settingsContainer}>
          <Text>Settings Coming Soon!</Text>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
