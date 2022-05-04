import api from './api'
import createList from './createList'
import switchHiddenElement from './switchHidden'
import checkboxFilter from './checkboxFilter'

createList(api)


document.querySelectorAll(".checkboxContainer input").forEach(element=> {
    element.onclick = checkboxFilter
})
document.getElementById("loadMore").onclick= switchHiddenElement