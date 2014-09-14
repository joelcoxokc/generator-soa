'use strict';
(function(){
  angular
    .module('<%= scriptAppName %>')
    .controller('TaskCtrl', TaskCtrl);

  TaskCtrl
    .$inject = ['$scope', 'taskStorage', 'filterFilter', '$rootScope', 'logger'];

  function TaskCtrl($scope, taskStorage, filterFilter, $rootScope, logger) {
    var tasks;
    tasks = $scope.tasks = taskStorage.get();
    $scope.newTask = '';
    $scope.remainingCount = filterFilter(tasks, {
      completed: false
    }).length;
    $scope.editedTask = null;
    $scope.statusFilter = {
      completed: false
    };
    $scope.filter = function(filter) {
      switch (filter) {
        case 'all':
          return $scope.statusFilter = '';
        case 'active':
          return $scope.statusFilter = {
            completed: false
          };
        case 'completed':
          return $scope.statusFilter = {
            completed: true
          };
      }
    };
    $scope.add = function() {
      var newTask;
      newTask = $scope.newTask.trim();
      if (newTask.length === 0) {
        return;
      }
      tasks.push({
        title: newTask,
        completed: false
      });
      logger.logSuccess('New task: "' + newTask + '" added');
      taskStorage.put(tasks);
      $scope.newTask = '';
      return $scope.remainingCount++;
    };
    $scope.edit = function(task) {
      return $scope.editedTask = task;
    };
    $scope.doneEditing = function(task) {
      $scope.editedTask = null;
      task.title = task.title.trim();
      if (!task.title) {
        $scope.remove(task);
      } else {
        logger.log('Task updated');
      }
      return taskStorage.put(tasks);
    };
    $scope.remove = function(task) {
      var index;
      $scope.remainingCount -= task.completed ? 0 : 1;
      index = $scope.tasks.indexOf(task);
      $scope.tasks.splice(index, 1);
      taskStorage.put(tasks);
      return logger.logError('Task removed');
    };
    $scope.completed = function(task) {
      $scope.remainingCount += task.completed ? -1 : 1;
      taskStorage.put(tasks);
      if (task.completed) {
        if ($scope.remainingCount > 0) {
          if ($scope.remainingCount === 1) {
            return logger.log('Almost there! Only ' + $scope.remainingCount + ' task left');
          } else {
            return logger.log('Good job! Only ' + $scope.remainingCount + ' tasks left');
          }
        } else {
          return logger.logSuccess('Congrats! All done :)');
        }
      }
    };
    $scope.clearCompleted = function() {
      $scope.tasks = tasks = tasks.filter(function(val) {
        return !val.completed;
      });
      return taskStorage.put(tasks);
    };
    $scope.markAll = function(completed) {
      tasks.forEach(function(task) {
        return task.completed = completed;
      });
      $scope.remainingCount = completed ? 0 : tasks.length;
      taskStorage.put(tasks);
      if (completed) {
        return logger.logSuccess('Congrats! All done :)');
      }
    };
    $scope.$watch('remainingCount == 0', function(val) {
      return $scope.allChecked = val;
    });
    return $scope.$watch('remainingCount', function(newVal, oldVal) {
      return $rootScope.$broadcast('taskRemaining:changed', newVal);
    });
  };

}).call(this);
