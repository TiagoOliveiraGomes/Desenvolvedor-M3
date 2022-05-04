
export default async function createList (api) {
    const data = await api()
    const ul = document.getElementById("cardList")
    
    data.forEach((element, index) => {
        let li = document.createElement("li");
        let img = document.createElement("img")
        let h4 = document.createElement("h4")
        let h4Value = `${element.name}`.toUpperCase()
        let strong = document.createElement("strong")
        let span = document.createElement("span")
        let button = document.createElement("button")
        
        li.dataset.color = element.color
        img.src = element.image
        img.alt = "imagem de:" + element.name
        h4.innerHTML = h4Value
        strong.innerHTML = 'R$ ' + element.price
        span.innerHTML = `até ${element.parcelamento[0]}x de R$ ${element.parcelamento[1]}`
        button.className = "squareButton blackBackground"
        button.innerHTML = "COMPRAR"

        li.appendChild(img)
        li.appendChild(document.createElement("br"))
        li.appendChild(h4)
        li.appendChild(document.createElement("br"))
        li.appendChild(strong)
        li.appendChild(span)
        li.appendChild(document.createElement("br"))
        li.appendChild(button)
        
        if(index > 8){
            li.classList.add("hidden")
        }
        ul.appendChild(li)
    });

}