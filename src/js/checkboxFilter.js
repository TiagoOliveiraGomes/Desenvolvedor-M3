export default function checkboxFilter () {
    const checkboxList = document.querySelectorAll(".checkboxContainer input")
    const ulElement = document.getElementById('cardList')
    const productList = ulElement.querySelectorAll("li")
    let filters = []

    let allUnchecked = true
    checkboxList.forEach(filterOption => {
        if(filterOption.checked){
            allUnchecked = false
        }
    })
    if(allUnchecked){
        let aux = 0
        productList.forEach(element => {
            element.classList.add("hidden")
        })
        productList.forEach(element => {
            console.log(element)
            element.classList.toggle("hidden")
            aux++
            if(aux == 9) return
        });
        // for(let x = 0; x == 9; x++) {
        //     console.log('productList[0]')
        //     console.log(productList[x])
        //     productList[x].classList.remove("hidden")
        // }
        
    }

    productList.forEach(element => {
        element.classList.add("hidden")
    });

    checkboxList.forEach(element => {
        if(element.dataset.tipo == "color"){
            if(element.checked){
                filters.push(element.value)
            }
        }
    });

    productList.forEach(element => {
        filters.forEach(filtro => {
            if(element.dataset.color == filtro){
                element.classList.remove("hidden")
            }
        })
    })

    
}