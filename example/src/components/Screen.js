import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export function Screen({ children }) {
  return (
    <View testID="welcome" style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>{children}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    padding: 10,
  },
});