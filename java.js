// function validateForm(e) {
//     e.preventDefault()
//     var name = document.loginForm.name.value
//     var password = document.loginForm.password.value
//    if (name.length < 3){
//     var newh1 = document.createElement('h1')
//     newh1.style.color = 'red';
//     newh1.innerHTML = 'short name'
//     document.body.appendChild(newh1)

//    }
//    if (password.length < 4){
//     var newh2 = document.createElement('h2')
//     newh2.innerHTML = 'short password'
//     document.body.appendChild(newh2)
//    }
//    }

//    document.getElementById("form").addEventListener('submit',validateForm)

//    test 2

// function totalpricee(a, b, c) {
//   return a + b + c;
// }



// var totalprice = document.getElementById("itemtotal");
// totalprice.innerHTML = totalpricee(
//   items.item1price,
//   items.item2price,
//   items.item3price
// );

// checkpoint dom
const items = {
    item1price: 10,
    item2price: 10,
    item3price: 10,
  };

const state = {
    quantity:{
        item1: 1,
        item2: 1,
        item3: 1,
    },
    totalprice : 30,


}
// item increase!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const increasebut1 = document.getElementById("increase-item1");

increasebut1.addEventListener('click',function(e){
    const quantity = document.getElementById('item1Q');
    state.quantity.item1++
    state.totalprice += items.item1price 
    quantity.innerHTML = state.quantity.item1
    const total = document.getElementById('itemtotal')
    total.innerHTML = state.totalprice

})

const increasebut2 = document.getElementById("increase-item2");

increasebut2.addEventListener('click',function(e){
    const quantity = document.getElementById('item2Q');
    state.quantity.item2++
    state.totalprice += items.item2price
    quantity.innerHTML = state.quantity.item2
    const total = document.getElementById('itemtotal')
    total.innerHTML = state.totalprice

})

const increasebut3 = document.getElementById("increase-item3");

increasebut3.addEventListener('click',function(e){
    const quantity = document.getElementById('item3Q');
    state.quantity.item3++
    state.totalprice += items.item3price 
    quantity.innerHTML = state.quantity.item3
    const total = document.getElementById('itemtotal')
    total.innerHTML = state.totalprice

})
// item decrease!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const decreasebut1 = document.getElementById("decrease-item1");

decreasebut1.addEventListener('click',function(e){
    const quantity = document.getElementById('item1Q');
    if (state.quantity.item1 > 1){
    state.quantity.item1--
    state.totalprice -= items.item1price 
    quantity.innerHTML = state.quantity.item1
    const total = document.getElementById('itemtotal')
    total.innerHTML = state.totalprice
    }
})

const decreasebut2 = document.getElementById("decrease-item2");

decreasebut2.addEventListener('click',function(e){
    const quantity = document.getElementById('item2Q');
    if (state.quantity.item2 > 1){
    state.quantity.item2--
    state.totalprice -= items.item2price
    quantity.innerHTML = state.quantity.item2
    const total = document.getElementById('itemtotal')
    total.innerHTML = state.totalprice
    }
})

const decreasebut3 = document.getElementById("decrease-item3");

decreasebut3.addEventListener('click',function(e){
    const quantity = document.getElementById('item3Q');
    if (state.quantity.item3 > 1){
    state.quantity.item3--
    state.totalprice -= items.item3price
    quantity.innerHTML = state.quantity.item3
    const total = document.getElementById('itemtotal')
    total.innerHTML = state.totalprice
    }

})
// delete !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const deletebut1 = document.getElementById("deletebtn1");

deletebut1.addEventListener('click', function(e){
   let divToDelete = document.getElementById('it1');
   divToDelete.remove();
   state.totalprice -= items.item1price 
   const total = document.getElementById('itemtotal')
    total.innerHTML = state.totalprice
   
})

const deletebut2 = document.getElementById("deletebtn2");

deletebut2.addEventListener('click', function(e){
   let divToDelete = document.getElementById('it2');
   divToDelete.remove();
   state.totalprice -= items.item2price 
   const total = document.getElementById('itemtotal')
    total.innerHTML = state.totalprice
})

const deletebut3 = document.getElementById("deletebtn3");

deletebut3.addEventListener('click', function(e){
   let divToDelete = document.getElementById('it3');
   divToDelete.remove();
   state.totalprice -= items.item3price 
   const total = document.getElementById('itemtotal')
    total.innerHTML = state.totalprice
})