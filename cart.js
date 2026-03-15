let cart = JSON.parse(localStorage.getItem("cart")) || []

function addToCart(name,price){

cart.push({name,price})

saveCart()

renderCart()

}

function removeFromCart(index){

cart.splice(index,1)

saveCart()

renderCart()

}

function saveCart(){

localStorage.setItem("cart",JSON.stringify(cart))

}

function renderCart(){

let cartList = document.getElementById("cart-list")

let total = 0

cartList.innerHTML=""

cart.forEach((item,index)=>{

total += item.price

cartList.innerHTML +=
`
<li>
${item.name} - $${item.price}
<button onclick="removeFromCart(${index})">X</button>
</li>
`

})

document.getElementById("total").innerText = total

}

renderCart()
function checkout(){

if(cart.length === 0){
alert("Cart is empty")
return
}

alert("Order completed successfully!")

cart = []

localStorage.removeItem("cart")   // يمسح الكارت من المتصفح

renderCart()

}
function toggleCart(){

let cartBox = document.getElementById("cart")

cartBox.classList.toggle("active")

}


