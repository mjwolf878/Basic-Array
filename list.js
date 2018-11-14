

var todos = ["Buy new dog"];
var input = prompt("what would you like to do?");
while(input!== "quit"){
if (input ==="list"){
  console.log(todos);
}else if (input==="new"){
  var newTodo = prompt('Enter new todo');
  todos.push(newTodo);
}
  // to run a loop so that it's constantly asking you questions until you quit, run
  //the following
  //so while you are not quitting
  //keep running the the loop, otherwise
  input = prompt("what would you like to do?");
}
console.log('ok, i quit the app');
