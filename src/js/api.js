export default async function getData () {
    const response = await fetch("http://localhost:5000/products", {
        method: 'GET'
    })
    const data = await response.json()
    return data
}