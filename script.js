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
   

   

