
export function filterForSize (filterValue) {
    const ulElement = document.getElementById('cardList')
    const productList = ulElement.querySelectorAll("li")
    let filters = []

    productList.forEach(element => {
        var array = JSON.parse("[" + element.dataset.size + "]");
        filters.push(array)
    })
    productList.forEach(element => {
        filters.forEach(filtro => {
            if(filtro[0] == filterValue || filtro[1] == filterValue){
                element.classList.remove("hidden")
            }
        })
    })
}