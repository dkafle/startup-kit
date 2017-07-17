import {getUsers} from './api/userApi'
import {deleteUser} from './api/userApi'

getUsers().then(result => {
  let usersBody = ''

  result.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="delete-user">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>`
  })

  global.document.getElementById('users').innerHTML = usersBody

  const deleteLinks = global.document.getElementsByClassName('delete-user')
  console.log(deleteLinks)

  Array.from(deleteLinks, link => {
    link.onclick = function (evt) {
      console.log(evt)
      const el = evt.target
      evt.preventDefault()
      deleteUser(el.attributes['data-id'].value)
      const row = el.parentNode.parentNode
      row.parentNode.removeChild(row)
    }
  })
})
