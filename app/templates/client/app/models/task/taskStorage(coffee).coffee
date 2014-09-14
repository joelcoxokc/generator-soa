'use strict'

angular.module('<%= scriptAppName %>', [])

.factory('taskStorage', ->
  STORAGE_ID = 'tasks'
  DEMO_TASKS = '[
    {"title": "Finish homework", "completed": true},
    {"title": "Make a call", "completed": true},
    {"title": "Build a snowman!", "completed": false},
    {"title": "Tango! Tango! Tango!", "completed": false},
    {"title": "Play games with friends", "completed": false},
    {"title": "Shopping", "completed": false}

  ]'

  return {
    get: ->
      JSON.parse(localStorage.getItem(STORAGE_ID) || DEMO_TASKS )

    put: (tasks)->
      localStorage.setItem(STORAGE_ID, JSON.stringify(tasks))
  }
)

# cusor focus when dblclick to edit
.directive('taskFocus', [
  '$timeout'
  ($timeout) ->
    return {
      link: (scope, ele, attrs) ->
        scope.$watch(attrs.taskFocus, (newVal) ->
          if newVal
            $timeout( ->
              ele[0].focus()
            , 0, false)
        )
    }
])

