// XHR = XML Http Request

let xhr = new XMLHttpRequest
let products = {};

xhr.onreadystatechange = function () {
    if ((xhr.readyState == 4) && (xhr.status == 200)) {
        products = xhr.response
        console.log(products)
    }
}

xhr.open('GET', 'https://www.hulabeck.se/html/temp/products.json')

xhr.send()