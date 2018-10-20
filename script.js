/* JavaScript code here */
console.log("External JS");
function sumArray(arr)

{

    var sum = 0;

    arr.forEach(function(value,index){

        sum = sum + value;

    });

    return sum;

}

console.log(sumArray([2,4,5,6,7]));

function checkEmail(emailString){
    var emailFormat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    var match=emailFormat.test(emailString);
    return match;
}
console.log(checkEmail("john@Smith.com"));
console.log(checkEmail("johnsmith.com"));
//Task 4

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
   
   function getReadingStatus(index){
       var book=library[index];
       return book.readingStatus;
   }
   console.log(getReadingStatus(1));
   console.log(getReadingStatus(0));
   console.log(getReadingStatus(2));
   
//Task-5a
 
 var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];
   
   function addItem(newItem){
       cart.push(newItem);
       console.log(cart);
   }
   var newItem={name:'Watch',price:64,quantity:1};
   addItem(newItem);
   
   //task 5b Sorting
    
 function sortCart(a,b) {
  if (a.quantity < b.quantity)
    return -1;
  if (a.quantity > b.quantity)
    return 1;
  return 0;
}
cart.sort(sortCart);

console.log(cart);

//Task-5c FIND NAME
function findByName(name)
{
    var matrix=[];
    var found=false;
    for (var i =0;i<cart.length;i++) {
        if(cart[i].name===name)
        {
            matrix.push(cart[i]);
            found=true;
        }
        
    }
    if(found==true){return matrix;}
    else{console.log("NOT FOUND");}
}
console.log(findByName('Socks'));
console.log(findByName('rice'));

//Task-5d RETURN TOTAL COST
function totalPrice()
{
    var tp=0;
    for(var i=0;i<cart.length;i++)
    {
        tp=tp+ cart[i].price;
    }
    return tp;
}
console.log("Total cost: "+ sum());
   