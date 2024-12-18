import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style ={styles.appTitle}>
        <Text style ={styles.appTitle}>TO-DO List</Text>
      </View>
      <View style = {styles.inputContainer}>
        <TextInput 
        style = {styles.textInput} 
        placeholder = "Enter your goal..." 
        onChangeText={goalInputHandler}
        />
        <Button title = "Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
        {courseGoals.map((goal) => (
          <View key={goal} style = {styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  }, 
  appTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cccccc'
  },
  inputContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer:{
    flex: 5
  },
  goalItem:{
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText:{
    color: 'white',
  }
});
