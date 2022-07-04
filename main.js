let shop = document.getElementById("shop");

let shopItemsData =[
        {
            id: "iwiwffg",
            name: "Casual Shirt",
            price: 45,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            img: "images/images-1.jpeg"
        },
        {
            id: "hsowhhfero",
            name: "Black Shirt",
            price: 500,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            img: "images/images-2.jpeg"
        },
        {
            id: "yrfhwofh",
            name: "White Shirt",
            price: 85,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            img: "images/images-3.jpeg"
        },
        {
            id: "akaokunbafh",
            name: "Yellow Shirt",
            price: 95,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            img: "images/images-4.jpeg"
        }
    ];

let basket = [{

}];

let generateShop = () =>{
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let {id, name, price, desc, img} = x;
            return `
                                                    <div id=product-id-${id} class="item">
                                                        <img src="${img}" alt="" width="219">
                                                            <div class="details">
                                                                    <h3>${name}</h3>
                                                                    <p>${desc}</p>
                                                                    <div class="price-quantity">
                                                                        <h2>$ ${price}</h2>
                                                                        <div class="buttons">
                                                                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                                                                            <div id=${id} class="quantity">0</div>
                                                                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                    </div>
                                                `;
        }).join(""));
    };


generateShop();

let increment = (id) => { };
let decrement = (id) => { };
let update = (id) => { };