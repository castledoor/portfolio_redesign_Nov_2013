var List = {
  initialize: function(name) {
    this.tasksToDo = [];
    this.completedTasks = [];
    this.listName = name;
  },

  addTask: function(task) {
    this.tasksToDo.push(task);
  },
  markTaskComplete: function(task) {
   var completedTask = this.tasksToDo.splice(this.tasksToDo.indexOf(task), 1);
   this.completedTasks.push(completedTask); 
  }
}

var Task = {
  initialize: function(name, date) {
    this.taskName = name;
    this.date = date;
  }
}

$(function() {
  function generateList(list) {
    var listNameForIds = list.listName.replace(/\s+/g, '');
    $('#insertLists').append("<div id='" + listNameForIds+ "'></div>");
    $("#"+ listNameForIds).append("<h3>" + list.listName + "</h3>").append("<form><label>Enter A Task:</label><input></input><label>Due Date</label><input type='date'></input><button>Add To List</button></form>").append("<h4>To Do:</h4>").append("<ul id='toDoList-" + listNameForIds+"'></ul><h4>Tasks You Have Completed</h4><ul id='markedCompleted-" + listNameForIds+ "'></ul>");
    $("#" + listNameForIds+ " form").submit(function() {
      var task = Object.create(Task);
      var name = $("#" + listNameForIds+ " form input").val();
      var date = $("#" + listNameForIds+ " form input:nth-of-type(2)").val();
      task.initialize(name, date);
      list.addTask(task);
      displayList(list);

      $("#" + list.listName + " form input").val("");
      return false;
    });
  }
  $("#name").submit(function(){
    var name = $("#listName").val();
    var list = Object.create(List);
    list.initialize(name);
    $("#hide").fadeIn();
    generateList(list);
    
    return false;
  });
});


function displayList(list) {
  var listNameForIds = list.listName.replace(/\s+/g, '')
  $("#toDoList-" + listNameForIds).empty();
  $("#markedCompleted-" + listNameForIds).empty();
  list.tasksToDo.forEach(function(task) {
    $("#toDoList-" + listNameForIds).append("<li class='clickable'>" + task.taskName + "-- due date: " + task.date + "</li>");
  });
  $(".clickable").click(function() {
    var elementName = $(this).text().slice(0, $(this).text().indexOf("-"));
    var completedTask;
    list.tasksToDo.forEach(function(task) {
      console.log(task.taskName);
      console.log(elementName);
      if (task.taskName === elementName) {
        completedTask = task;
      } 
    });
    console.log(completedTask);
    //mark complete needs a task object
    list.markTaskComplete(completedTask);
    console.log(completedTasks);
    displayList(list);
  });
  list.completedTasks.forEach(function(task){
    $("#markedCompleted-" + listNameForIds).append("<li>" + task.taskName + "</li>");
  });
}















