import React from 'react';
import autobind from 'autobind';
import {StyleSheet, Text, View, Button, TextInput, StatusBar, TouchableOpacity} from 'react-native';

@autobind
export default class App extends React.Component {
  state;

  constructor() {
    super(...arguments);
    this.state = {
      todos: [],
      newTodo: null,
    };
  }

  _addTodo() {
    let {newTodo, todos} = this.state;
    if (!newTodo || newTodo === '') {
      return;
    }
    this.setState({todos: [...todos, newTodo], newTodo: null});
  }

  _removeTodo(index) {
    let todos = [...this.state.todos];
    todos.splice(index, 1);
    let newTodos = todos;
    this.setState({todos: newTodos});
  }

  render() {
    let {newTodo} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header} testID="headerView">
          <Text style={styles.title} testID="appTitle">TODO APP</Text>
          <TextInput
            placeholder="Type new todo here..."
            style={styles.input}
            autoFocus={true}
            value={newTodo ? newTodo : ''}
            onChangeText={(newTodo) => this.setState({newTodo})}
            testID="mainInput"
          />
          <Button
            title="Submit"
            onPress={this._addTodo}
            testID="submitButton"
          />
        </View>
        {this._renderTodos()}
      </View>
    );
  }

  _renderTodos() {
    let todos = this.state.todos.map((todo, index) => (
      <View key={index} style={styles.todo}>
        <TouchableOpacity onPress={() => this._removeTodo(index)} testID={'deleteButton' + index}>
          <Text>x</Text>
        </TouchableOpacity>
        <Text style={styles.todoText} testID={'todo' + index}>{todo}</Text>
      </View>
    ));
    return (
      <View style={styles.todos} testID="todosView">
        {todos}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 32,
  },
  input: {
    marginTop: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
  },
  todos: {
    flex: 1,
  },
  todo: {
    flexDirection: 'row',
  },
  todoText: {
    marginLeft: 10,
  },
});
