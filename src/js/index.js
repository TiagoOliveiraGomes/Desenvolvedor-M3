import api from './api'
import createList from './createList'
import switchHiddenElement from './switchHidden'
import checkboxFilterColor from './checkboxFilterColor'
import checkboxFilterPrice from './checkboxFilterPrice'

createList(api)


document.querySelectorAll(".checkboxContainer input").forEach(element=> {
    element.onclick = checkboxFilterColor
})
// document.querySelectorAll(".checkboxContainer input[data-tipo='price']").forEach(element=> {
//     element.onclick = checkboxFilterPrice
// })
document.getElementById("loadMore").onclick= switchHiddenElement