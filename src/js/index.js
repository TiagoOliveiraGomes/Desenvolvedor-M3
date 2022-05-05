import api from './api'
import createList from './createList'
import switchHiddenElement from './switchHidden'
import checkboxFilterColor from './checkboxFilterColor'
import {filterForSize} from './checkboxFilterSize'


createList(api)


document.querySelectorAll(".checkboxContainer input").forEach(element=> {
    element.onclick = checkboxFilterColor
})
document.querySelectorAll(".filterSection table button").forEach(element=> {
    element.onclick = () => checkboxFilterColor(element.value)
})

document.getElementById("loadMore").onclick= switchHiddenElement