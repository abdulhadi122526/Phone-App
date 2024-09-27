



const cartItem = localStorage.getItem('cartitems');

let div = document.querySelector('.row')
let total = document.querySelector('#total')

let phones = JSON.parse(cartItem)

console.log(phones);

function render(){

    let totalAmount = 0;
    if(phones != null && phones.length > 0){

    
      for (let i = 0 ; i < phones.length; i++){
    
            totalAmount += phones[i].price * phones[i].quantity;
            div.innerHTML +=`
            <div class="mb-3 border border-light rounded-2 p-2 w-50" id="itemcard" >
            <h1>${phones[i].brand + " " + phones[i].model}</h1>
            <h3>Quantity: <button class="btn btn-primary" onclick="add(${i})" >+</button> ${phones[i].quantity} <button class="btn btn-danger" onclick="less(${i})">-</button> </h3>
            <h3> Price: ${phones[i].price * phones[i].quantity}</h3>
            <button class="btn btn-danger" onclick="deleteItem(${i})">Delete</button>
            </div>
            
            `
        }
        total.innerHTML = `Total Amount: ${totalAmount}`

    } else{
        console.log('cart item empty ha maalik')
        div.innerHTML = `
        <h3 class="text-center">No Item Found...</h3>
        `
    }
}

render()
function add(i){
    div.innerHTML = '';
    phones[i].quantity += 1
    render()
    console.log(phones);
}
    
function less(i){
    div.innerHTML = ''
    if(phones[i].quantity <= 1){
        phones.splice(i , 1);

    }else{
        phones[i].quantity -= 1
    }
    render()

}

function deleteItem(i){
    div.innerHTML = ''
    phones.splice(i , 1);
    total.innerHTML = ''
    render()
}