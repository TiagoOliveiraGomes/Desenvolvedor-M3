import switchHiddenElement from "./switchHidden"

export default function checkboxFilter (filterValue) {
    const checkboxList = document.querySelectorAll(".checkboxContainer input")
    const ulElement = document.getElementById('cardList')
    const productList = ulElement.querySelectorAll("li")
    let filters = []
    let filtersPrice = []
    let filtersSize = []

    productList.forEach(element => {
        element.classList.add("hidden")
    });

    checkboxList.forEach(element => {
        if(element.dataset.tipo == "color"){
            if(element.checked){
                filters.push(element.value)
            }
        }
    })
    checkboxList.forEach(element => {
        if(element.dataset.tipo == "price"){
            if(element.checked){
                var array = JSON.parse("[" + element.value + "]");
                filtersPrice.push(array)
            }
        }
    })
    

    productList.forEach(element => {
        var array = `${element.dataset.size}`.split(",", 2);
        filtersSize.push(array)
    })
    console.log(filtersSize)
    productList.forEach(element => {
        filtersSize.forEach(filtro => {
            if(filtro.length = 2){
            if(filtro[0] == filterValue || filtro[1] == filterValue){
                element.classList.remove("hidden")
            }}else {
                if(filtro[0] == filterValue){
                    element.classList.remove("hidden")
                }
            }
        })
    })

    productList.forEach(element => {
        filters.forEach(filtro => {
            if(element.dataset.color == filtro){
                if(filtersPrice.length){
                    filtersPrice.forEach(filtro => {
                        if(element.dataset.price > filtro[0] && element.dataset.price <= filtro[1]){
                            element.classList.remove("hidden")
                        }
                    })
                }else {
                    element.classList.remove("hidden")
                }
            }
        })
    })

    

    let allUnchecked = true
    checkboxList.forEach(filterOption => {
        if(filterOption.checked){
            allUnchecked = false
        }
    })
    if(allUnchecked){
        productList.forEach(element => {
            if(!(element.classList == "hidden")){
                element.classList.add("hidden")
            }
        })
        switchHiddenElement()
    }
    
}