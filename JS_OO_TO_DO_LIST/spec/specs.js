describe('List', function() {

  it('has a name', function() {
    var list = Object.create(List);
    list.initialize('myList');
    list.listName.should.equal('myList');
  });

  it('has a task list', function() {
    var list = Object.create(List);
    list.initialize();
    list.tasksToDo.length.should.equal(0);
  });

  it('has a list of completed tasks', function() {
    var list = Object.create(List);
    list.initialize();
    list.completedTasks.length.should.equal(0);
  });

  describe('addTask', function() {
    it('adds a task to the task list', function() {
      var list = Object.create(List);
      list.initialize();
      var task = Object.create(Task);
      list.addTask(task);
      list.tasksToDo.length.should.equal(1);
    });
  });
  describe('markTaskComplete', function() {
    it('removes task from to do list', function() {
      var list = Object.create(List);
      list.initialize();
      var task = Object.create(Task);
      list.addTask(task);
      list.markTaskComplete(task); 
      list.tasksToDo.length.should.equal(0);
    });

    it('adds the task to the list of completed tasks', function() {
      var list = Object.create(List);
      list.initialize();
      var task = Object.create(Task);
      list.addTask(task);
      list.markTaskComplete(task);
      list.completedTasks.length.should.equal(1);
    });
  });
});


describe('Task', function() {
  it('has a name', function(){
    var task = Object.create(Task);
    task.initialize('myTask');
    task.taskName.should.equal('myTask', '2013-08-01');
  });

  it('has a due date', function() {
    var task = Object.create(Task);
    task.initialize('myTask', '2013-08-01');
    task.date.should.equal('2013-08-01');
  });
});




















