function saveCart(cart){
localStorage.setItem("cart", JSON.stringify(cart));
}

function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart == null)
    {
        return {
            artists : {
                "foresti" : {
                    "quantity" : 0,
                    "price" : 30,
                    "tempQuantity" : 1,
                    "tempTotalPrice" : 30,
                    "totalPrice" : 0
            },
            "polnareff" : {
                "quantity" : 0,
                "price" : 30,
                "tempQuantity" : 1,
                "tempTotalPrice" : 30,
                "totalPrice" : 0
            },
            "chris" : {
                "quantity" : 0,
                "price" : 30,
                "tempQuantity" : 1,
                "tempTotalPrice" : 30,
                "totalPrice" : 0
            },
            "zazie" : {
                "quantity" : 0,
                "price" : 30,
                "tempQuantity" : 1,
                "tempTotalPrice" : 30,
                "totalPrice" : 0
            },
            "blaze" : {
                "quantity" : 0,
                "price" : 30,
                "tempQuantity" : 1,
                "tempTotalPrice" : 30,
                "totalPrice" : 0
            },
            "adjani" : {
                "quantity" : 0,
                "price" : 30,
                "tempQuantity" : 1,
                "tempTotalPrice" : 30,
                "totalPrice" : 0
            },
            "pomme" : {
                "quantity" : 0,
                "price" : 30,
                "tempQuantity" : 1,
                "tempTotalPrice" : 30,
                "totalPrice" : 0
            },
            "biolay" : {
                "quantity" : 0,
                "price" : 30,
                "tempQuantity" : 1,
                "tempTotalPrice" : 30,
                "totalPrice" : 0
            },
            "tamino" : {
                "quantity" : 0,
                "price" : 30,
                "tempQuantity" : 1,
                "tempTotalPrice" : 30,
                "totalPrice" : 0
            },
        },
        "total" : {
            "quantity" : 0,
            "price" : 0,
            "status" : 0
        }
        }
    }
    else {
        return cart;
    }
}

let addToCartBtns = document.getElementsByName("addToCart");
let plusCartBtns = document.getElementsByName("plusCart");
let minusCartBtns = document.getElementsByName("minusCart");
let plusTotalCartBtns = document.getElementsByName("plusTotalCart");
let minusTotalCartBtns = document.getElementsByName("minusTotalCart");
let quantityIndicator = document.getElementsByName("quantity");
let quantityTotalIndicator = document.getElementsByName("totalQuantity");
let priceIndicator = document.getElementsByName("price");
let cartQuantityIndicator = document.getElementsByName("cartQuantity");
let totalPriceIndicator = document.getElementsByName("totalPrice");
var newsletter = document.getElementsByName("newsletter")[0];
let cart = getCart();

window.onload = function() {
    updateCartTotal();
    updateQuantity();
    updateTempQuantity();
    plusBtnEvent();
    minusBtnEvent();
    AddToCartBtnEvent ();
    plusTotalBtnEvent ();
    minusTotalBtnEvent ();
    if (newsletter)
        okNewsletter();
};



function AddToCartBtnEvent () {
    for (var i = 0; i < addToCartBtns.length; i++) {
        var button = addToCartBtns[i];
        button.addEventListener('click', function(event) {
            var buttonClicked = event.target;
            var artistToCart = buttonClicked.parentNode.parentNode.getAttribute("name");
            cart.total.quantity += cart.artists[artistToCart].tempQuantity;
            cart.total.price += cart.artists[artistToCart].tempTotalPrice;
            cart.artists[artistToCart].quantity += cart.artists[artistToCart].tempQuantity;
            cart.artists[artistToCart].totalPrice += cart.artists[artistToCart].tempTotalPrice;
            cart.artists[artistToCart].tempTotalPrice = cart.artists[artistToCart].price;
            cart.artists[artistToCart].tempQuantity = 1;
            updateCartTotal(artistToCart);
            updateTempQuantity(artistToCart);
            okOnClick(buttonClicked);
    })
}
}

function okOnClick(buttonClicked) {
    var ogContent = "<p>" + buttonClicked.innerHTML + "<p>";
    buttonClicked.innerHTML = "<p>OK !<p>";
    setTimeout(function() {
        buttonClicked.parentNode.innerHTML = ogContent;
    }, 1500); 
}

function okNewsletter() {
    
    newsletter.addEventListener('click', function(event) {
        var buttonClicked = event.target;
        okOnClick(buttonClicked);
})
}

function updateCartTotal(){
    if (cartQuantityIndicator[0])
        cartQuantityIndicator[0].innerText = cart.total.quantity;
    if (totalPriceIndicator[0])
        totalPriceIndicator[0].innerText = cart.total.price + '€';
    saveCart(cart);
}

function plusBtnEvent () {
for (var i = 0; i < plusCartBtns.length; i++) {
    var button = plusCartBtns[i];
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target;
        var artistToCart = buttonClicked.parentNode.parentNode.getAttribute("name");
        if (cart.artists[artistToCart].tempQuantity < 20)
        {
            cart.artists[artistToCart].tempQuantity++;
            cart.artists[artistToCart].tempTotalPrice += cart.artists[artistToCart].price;

        }
        updateTempQuantity();
        
    })
}
}

function minusBtnEvent () {
for (var i = 0; i < minusCartBtns.length; i++) {
    var button = minusCartBtns[i];
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target;
        var artistToCart = buttonClicked.parentNode.parentNode.getAttribute("name");
        if (cart.artists[artistToCart].tempQuantity > 1)
        {
            cart.artists[artistToCart].tempQuantity--;
            cart.artists[artistToCart].tempTotalPrice -= cart.artists[artistToCart].price;
        }
        console.log(cart.artists[artistToCart]);
        updateTempQuantity();
    })
}
}

function updateTempQuantity () {
    for (var i = 0; i < quantityIndicator.length; i++) {
        var artistToUpdate = quantityIndicator[i].parentNode.parentNode.getAttribute("name");
        // console.log(cart.artists[artistToUpdate].tempQuantity);
        var artistQuantity = cart.artists[artistToUpdate].tempQuantity;
        var artistQuantityDiv = quantityIndicator[i];
        artistQuantityDiv.innerText = artistQuantity;
    }
    saveCart(cart);
    // for (var i = 0; i < priceIndicator.length; i++) {
    //     var artistToUpdate = priceIndicator[i].parentElement.parentElement.getAttribute("name");
    //     var artistQuantity = cart.artists[artistToUpdate].tempQuantity;
    //     var artistPriceDiv = priceIndicator[i];
    //     artistPriceDiv.innerText = cart.artists[artistToUpdate].price * artistQuantity + '€';
    //     saveCart(cart);
    // }
}





function updateQuantity() {
    for (var i = 0; i < quantityTotalIndicator.length; i++) {
        var artistToUpdate = quantityTotalIndicator[i].parentNode.parentNode.parentNode.getAttribute("name");
        
        var artistQuantity = cart.artists[artistToUpdate].quantity;
        if (artistQuantity == 0){
            quantityTotalIndicator[i].parentNode.parentNode.parentNode.style.display = "none";
        }
        else
        {
            quantityTotalIndicator[i].parentNode.parentNode.parentNode.style.display = "flex";
            quantityTotalIndicator[i].innerText = artistQuantity;
        }
    }
    saveCart(cart);
    updateCartTotal();

}

function plusTotalBtnEvent () {
    for (var i = 0; i < plusTotalCartBtns.length; i++) {
        var button = plusTotalCartBtns[i];
        button.addEventListener('click', function(event) {
            var buttonClicked = event.target;
            var artistToCart = buttonClicked.parentNode.parentNode.parentNode.getAttribute("name");
            if (cart.artists[artistToCart].quantity < 20)
            {
                cart.artists[artistToCart].quantity++;
                cart.total.quantity++;
                cart.artists[artistToCart].totalPrice += cart.artists[artistToCart].price;
                cart.total.price += cart.artists[artistToCart].price;
            }
            updateQuantity();
        })
    }
    }
    
function minusTotalBtnEvent () {
for (var i = 0; i < minusTotalCartBtns.length; i++) {
    var button = minusTotalCartBtns[i];
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target;
        var artistToCart = buttonClicked.parentNode.parentNode.parentNode.getAttribute("name");
        if (cart.artists[artistToCart].quantity > 0)
        {
            cart.artists[artistToCart].quantity--;
            cart.artists[artistToCart].totalPrice -= cart.artists[artistToCart].price;
            cart.total.quantity--;
            cart.total.price -= cart.artists[artistToCart].price;
        }
        updateQuantity();
    })
}
}