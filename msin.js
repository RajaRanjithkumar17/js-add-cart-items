var product = [
  {
    id: 1,
    brand: "redmi",
    model: "note 5",
    price: 9999,
    qty: 1,
  },
  {
    id: 2,
    brand: "realme",
    model: "c2",
    price: 6999,
    qty: 1,
  },
  {
    id: 3,
    brand: "oppo",
    model: "az",
    price: 9999,
    qty: 1,
  },
];

var cartItms = document.getElementById("cartItms");
var added = document.getElementById("added");
var delItm = document.getElementById("delItm");

var addCart = [];


var addcartItms = document.getElementById("addcart");

addcartItms.addEventListener("click", function () {
  var crtid = parseInt(prompt("enter id num"));
  add(crtid);

  //console.log(crtid);

});

function add(id) {
  var res = addCart.find(function (items) {
    return items.id == id;
  });
  if (res) {
    var temp = addCart.map(function (items) {
      if (items.id == id) {
        items.qty++;
        return items;
      } else {
        return items;
      }
    });
    addCart = temp;
  } else {
    var temp = product.find(function (items) {
      if (items.id == id) {
        return items;
      }
    });
    addCart.push(temp);
  }
  console.log(addCart);
}


//imct
added.addEventListener("click", function () {
  var num = parseInt(prompt("enter id num"));
  cart_add(num);

  //console.log(num);

});


function cart_add(id) {   //if match id qty 'll be incmt 
  console.log(id);
  var temp = addCart.map(function (item) {
    if (item.id == id) {
      return {
        ...item,
        qty: item.qty + 1,
      };
    } else return item;
  });
  addCart = temp;

  console.log("rrr", temp);
}




//dcmt
delItm.addEventListener("click", function () {
  var num = parseInt(prompt("enter id num"));
  cart_min(num);
  //console.log(num);
});

function cart_min(id) {
  var cartMIn = addCart.find(function (item) {
    return item.id == id;
  });
  
  if (cartMIn) {
    if (cartMIn.qty == 1) {
      var temp = addCart.filter((item) => item.id !== id);//if not match 
      console.log(temp);
      addCart = temp;
    } else {
      var temp = addCart.map((item) => { //if match cart item
        if (item.id == id) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        } else return item;
      });
      addCart = temp;

      console.log("red", temp);
    }
  }
}




//    for (let index = 0; index <= addCart.length; index++) {
//  console.log(index);

//      console.log(addCart);
//      //console.log(addCart[0].price);

// ///



//     var container = document.getElementsByClassName("container")[0];
//     var row = document.getElementsByClassName("row")[0];

//     var card = document.createElement("div");
//     card.setAttribute("class", "card col-4");

//     var cardBody = document.createElement("div");
//     cardBody.setAttribute("class", "card-body ");

//     var cardTitle = document.createElement("h5");
//     cardTitle.setAttribute("class", "card-title");
//     cardTitle.innerText = addCart[0];

//     console.log(cardTitle);

//     var cardsub = document.createElement("h6");
//     cardsub.setAttribute("class", "card-subtitle");
//     cardsub.innerText = addCart[0];

//     var cardText = document.createElement("p");
//     cardText.setAttribute("class", "card-text");
//     cardText.innerText = addCart[0];

  
//     //var bn = document.getElementsByClassName("cartBttn")[0];
//   //  bn.setAttribute("class", "cartBttn");
  

//   var bn = document.createElement("button");
//   bn.setAttribute("id", "cartBttn");
//   bn.innerText = "+"

//   var btn = document.createElement("button");
//   bn.setAttribute("id", "cartBtn");
//   btn.innerText = "-"


//     var cardQtyinput = document.createElement("input");
//     cardQtyinput.setAttribute("type", "number");
//     cardQtyinput.setAttribute("class", "cartVal");
//     cardQtyinput.setAttribute("value", 0 );
   

//     //cardQtyinput.innerText = addCart[0].qty;

//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(cardsub);
//     cardBody.appendChild(cardText);
//     // cardBody.appendChild(cardQty);

//     cardBody.appendChild(cardQtyinput);
//     cardBody.appendChild(bn);
//     cardBody.appendChild(btn);
//     card.appendChild(cardBody);
//     //row.appendChild(card);
//     //container.appendChild(row);


// var bn= document.getElementById("cartBttn");
// bn.addEventListener("click",()=>{
//     //var addid = prompt("enter num")

//     var cartQty_ = document.getElementsByClassName("cartVal")[0];
   

//     cartQty_.value++;
//     //return cartQty_;
    
    
//     //console.log(cartQty_);
// }); //fun1

// }

// ;



// bn.addEventListener("click",()=>{
//     //var addid = prompt("enter num")

//     var cartQty_ = document.getElementsByClassName("cartVal")[0];
   

//     cartQty_.value++;
//     //return cartQty_;
    
    
//     //console.log(cartQty_);
// }); //fun1
// var row = document.getElementsByClassName("row")[0]
// btn.addEventListener("click",()=>{
//     //var addid = prompt("enter num")

//     var cartQty_ = document.getElementsByClassName("cartVal")[0];
   

//     cartQty_.value--;
//     if(cartQty_.value==0){

//         console.log("red");
//         row.remove();
//     }
//     //return cartQty_;
    
    
//     console.log(cartQty_);
//  });


