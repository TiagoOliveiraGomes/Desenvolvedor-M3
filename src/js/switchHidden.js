export default function switchHiddenElement () {
    const ulElement = document.getElementById('cardList')
    const productList = ulElement.querySelectorAll("li")
    let hasHiddenElement = true
    let quantityOfNewContents = 0
    
    if(hasHiddenElement){
      console.log("entrou")
      productList.forEach(element => {
        if(quantityOfNewContents === 9) return
        if(element.classList == "hidden"){
          element.classList.remove("hidden")
          quantityOfNewContents++
        }
    })}
    productList.forEach(element => {
      if(element.classList == "hidden") {
        hasHiddenElement = true
      }else {
        hasHiddenElement = false
      }
    })

    if(!hasHiddenElement){
      document.getElementById('loadMore').style.display = "none"
    }
}