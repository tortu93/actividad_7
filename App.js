import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CatComponent from "./scr/components/CatComponent";
import CatState from "./scr/components/CatState"
import CatProps from "./scr/components/CatProps"

export default function App() {
  return (
    <View style={styles.container}>
      <CatProps></CatProps>
      <CatState></CatState>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
