var test = require('tape');
var logic = require('../logic');

test('Example test', function(t) {
  var existingTodos = [];
  var todos = logic.addTodo(existingTodos, "324");
  var expectedTodos = [
    {
    id: 1,
    description: '324',
    done: false,
    },
  ];
  t.deepEquals(todos, expectedTodos);

  var todosList = logic.addTodo(todos, "1234");
  var expectedTodosList = [
    {
    id: 1,
    description: '324',
    done: false,
    },
    {
    id: 2,
    description: '123',
    done: false,
    },
  ];
  t.deepEquals(todosList, expectedTodosList);
  t.end();
});

test('Delete test', function(t) {
  var existingTodos = [
    {
    id: 1,
    description: '324',
    done: false,
    },
    {
    id: 2,
    description: '1234',
    done: false,
    },
  ];
  var todos = logic.deleteTodo(existingTodos, 1);
  var expectedTodos = [
    {
    id: 2,
    description: '1234',
    done: false,
    },
  ];
  t.deepEquals(todos, expectedTodos);


  t.end();
});
