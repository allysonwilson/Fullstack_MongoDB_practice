var requestHelper = require('./helpers/request_helper.js')

window.addEventListener('DOMContentLoaded', function(){
  // goes in UI folder ?
  requestHelper.getRequest('http://localhost:3000/api/systems', function (films){
    var mainDiv = document.getElementById('main')

    var list = document.createElement('ul')

    systems.forEach(function (systems){
      var listItem = document.createElement('li')

      listItem.innerText = system.name

      list.appendChild(listItem)
    })

    mainDiv.appendChild(list)
  })
})
