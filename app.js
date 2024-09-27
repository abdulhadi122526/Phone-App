const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000,
        id:1
        
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000,
        id:2 
        
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000,
        id:3
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000,
        id:4
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000,
        id:5
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000,
        id:5
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000,
        id:6
    },
    {
        brand: 'Samsung',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000,
        id:7
    },
    {
        brand: "Samsung",
        model: "Galaxy S21",
        ram: 8,
        rom: 128,
        camera: "108MP",
        price: 199999,
        id:8
    },
    {
        brand: "Apple",
        model: "iPhone 12",
        ram: 6,
        rom: 256,
        camera: "12MP",
        price: 239999,
        id:9
    },
    {
        brand: "Samsung",
        model: "Galaxy A52",
        ram: 6,
        rom: 128,
        camera: "64MP",
        price: 59999,
        id:10
    },
    {
        brand: "Apple",
        model: "iPhone 13",
        ram: 4,
        rom: 512,
        camera: "12MP",
        price: 279999,
        id:11
    },
    {
        brand: "Xiaomi",
        model: "Redmi Note 10",
        ram: 6,
        rom: 128,
        camera: "48MP",
        price: 39999,
        id:12
    },
    {
        brand: "OnePlus",
        model: "9 Pro",
        ram: 12,
        rom: 256,
        camera: "48MP",
        price: 149999,
        id:13
    },
    {
        brand: "Oppo",
        model: "Reno 6",
        ram: 8,
        rom: 128,
        camera: "64MP",
        price: 69999,
        id:14
    },
    {
        brand: "Vivo",
        model: "Y51",
        ram: 6,
        rom: 128,
        camera: "48MP",
        price: 33999,
        id:15
    },
    {
        brand: "Huawei",
        model: "Mate 40",
        ram: 8,
        rom: 256,
        camera: "50MP",
        price: 249999,
        id:16
    },
    {
        brand: "Realme",
        model: "C25",
        ram: 4,
        rom: 64,
        camera: "48MP",
        price: 26999,
        id:17
    },
    {
        brand: "Google",
        model: "Pixel 4a",
        ram: 6,
        rom: 128,
        camera: "12MP",
        price: 49999,
        id:18
    },
    {
        brand: "Sony",
        model: "Xperia 10 III",
        ram: 6,
        rom: 128,
        camera: "12MP",
        price: 99999,
        id:19
    },
    {
        brand: "Samsung",
        model: "Galaxy Z Fold 3",
        ram: 12,
        rom: 512,
        camera: "12MP",
        price: 349999,
        id:20
    },
    {
        brand: "Apple",
        model: "iPhone SE",
        ram: 3,
        rom: 64,
        camera: "12MP",
        price: 69999,
        id:21
    },
    {
        brand: "Xiaomi",
        model: "Mi Mix 4",
        ram: 12,
        rom: 256,
        camera: "108MP",
        price: 149999,
        id:22
    },
    {
        brand: "OnePlus",
        model: "8T",
        ram: 8,
        rom: 128,
        camera: "48MP",
        price: 89999,
        id:23
    },
    {
        brand: "Oppo",
        model: "A74",
        ram: 6,
        rom: 128,
        camera: "48MP",
        price: 36999,
        id:24
    },
    {
        brand: "Vivo",
        model: "V21",
        ram: 8,
        rom: 128,
        camera: "64MP",
        price: 54999,
        id:25
    },
    {
        brand: "Huawei",
        model: "Nova 9",
        ram: 8,
        rom: 128,
        camera: "50MP",
        price: 94999,
        id:26
    },
    {
        brand: "Realme",
        model: "8 Pro",
        ram: 8,
        rom: 128,
        camera: "108MP",
        price: 42999,
        id:27
    },
    {
        brand: "Google",
        model: "Pixel 6",
        ram: 8,
        rom: 256,
        camera: "50MP",
        price: 119999,
        id:28
    },
    {
        brand: "Sony",
        model: "Xperia 1 II",
        ram: 8,
        rom: 256,
        camera: "12MP",
        price: 199999,
        id:29
    },
    {
        brand: "Samsung",
        model: "Galaxy Note 20",
        ram: 8,
        rom: 256,
        camera: "64MP",
        price: 199999,
        id:30
    },
    {
        brand: "Apple",
        model: "iPhone 12 Mini",
        ram: 4,
        rom: 128,
        camera: "12MP",
        price: 134999,
        id:31
    },
    {
        brand: "Xiaomi",
        model: "Poco X3",
        ram: 6,
        rom: 128,
        camera: "64MP",
        price: 49999,
        id:32
    },
    {
        brand: "OnePlus",
        model: "Nord 2",
        ram: 8,
        rom: 128,
        camera: "50MP",
        price: 79999,
        id:33
    },
    {
        brand: "Oppo",
        model: "A54",
        ram: 4,
        rom: 128,
        camera: "13MP",
        price: 27999,
        id:34
    },
    {
        brand: "Redmi",
        model: "K30 Pro",
        ram: 6,
        rom: 128,
        camera: "64MP",
        price: 64999,
        id:35
    },
    {
        brand: "Infinix",
        model: "Note 11 Pro",
        ram: 8,
        rom: 128,
        camera: "64MP",
        price: 39999,
        id:36
    },
    {
        id: 37,
        brand: 'Apple',
        model: 'iPhone 14 Pro',
        ram: 6,
        rom: 256,
        camera: '48MP',
        price: 299999
    },
    {
        id: 38,
        brand: 'OnePlus',
        model: 'OnePlus 10 Pro',
        ram: 12,
        rom: 256,
        camera: '50MP',
        price: 149999
    },
    {
        id: 39,
        brand: 'Google',
        model: 'Pixel 6 Pro',
        ram: 12,
        rom: 128,
        camera: '50MP',
        price: 119999
    },
    {
        id: 40,
        brand: 'Xiaomi',
        model: 'Mi 11 Ultra',
        ram: 8,
        rom: 256,
        camera: '108MP',
        price: 89999
    },
    {
        id: 41,
        brand: 'Vivo',
        model: 'X70 Pro',
        ram: 8,
        rom: 128,
        camera: '50MP',
        price: 79999
    },
    {
        id: 42,
        brand: 'Oppo',
        model: 'Reno 7',
        ram: 8,
        rom: 256,
        camera: '64MP',
        price: 74999
    },
    {
        id: 43,
        brand: 'Realme',
        model: 'GT 2 Pro',
        ram: 12,
        rom: 512,
        camera: '50MP',
        price: 99999
    },
    {
        id: 44,
        brand: 'Huawei',
        model: 'P50 Pro',
        ram: 8,
        rom: 256,
        camera: '64MP',
        price: 124999
    },
    {
        id: 45,
        brand: 'Sony',
        model: 'Xperia 5 III',
        ram: 8,
        rom: 128,
        camera: '12MP',
        price: 94999
    },
    {
        id: 46,
        brand: 'Sony',
        model: 'Xperia 5 III',
        ram: 8,
        rom: 128,
        camera: '12MP',
        price: 94999
    }

    
    
    
    

]

const rowDiv = document.querySelector('#items')
const cartItems = []


function renderItem(phones)
{
    console.log('phones', phones);
    
    for(let i=0; i<phones.length; i++){
        rowDiv.innerHTML +=`
        <div class="col-3 border border-white rounded-2 p-2" ">
        <h1>${phones[i].brand + " " + phones[i].model}</h1>
        <h2>${phones[i].price}</h2>
        <button  class="btn btn-primary fs-5" onclick="addtocart(${phones[i].id})">Add cart</button>
        </div>
        
        `
    }
}

renderItem(phones)


// function addtocart(model){
//     var item =  phones.find(phone => phone.model === model); 
//     if (!item) return;
    
//     if(cartItems.includes(item)){
//         let itemIndex = cartItems.indexOf(item)
//         console.log(itemIndex);
//         cartItems[itemIndex].quantity += 1;
        
//     }else{
//         cartItems.push(item)
//         item.quantity = 1 
//     }


// }
function addtocart(id) {
    const item = phones.find(phone => phone.id == id); // Find the phone by model
    if (!item) return;

    if (cartItems.includes(item)) {
        let itemIndex = cartItems.indexOf(item);
        cartItems[itemIndex].quantity += 1;
    } else {
        item.quantity = 1; // Initialize quantity if it's the first time adding it
        cartItems.push(item);
    }
    
    console.log(cartItems); // Check the cart contents
}


const checkOut = document.querySelector('#Checkout')

checkOut.addEventListener('click', ()=>{
    localStorage.setItem('cartitems', JSON.stringify(cartItems))
    window.location.href =' pages/index.html '



})


let searchBar = document.querySelector('input')
let searchBtn = document.querySelector('.searchbtn')


searchBtn.addEventListener('click', (e)=>{
    
    if(searchBar.value)
    {
        if(e.target.nodeName === "BUTTON"){
            
            item = phones.filter(function(abc){
                return (abc.brand).toLowerCase() == (searchBar.value).toLowerCase()
                
            })
            
            if(item.length)
            {
                rowDiv.innerHTML =" ";
                renderItem(item)
                
               
                
                
                
                
            }
            else
            alert('No record found');
            
        

            
        }    
    }
})
    




















































