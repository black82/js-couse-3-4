// function f(email) {
//
//     if (email.empty()) {
//         alert("Submit your email")
//     }
//     }
//     var check;
// check=document.getElementById("exampleCheck1");
// if (check.checked) {
//     alert("ok");
// } else {
//     alert("Check me out Unselect")
// }
var sd=document.getElementsByClassName("btn");
forEach=Array.prototype.forEach;
forEach.call(sd,function (b) {
    b.addEventListener('click',addElement);
       
});
function addElement() {
    var addElem=document.createElement('div');

    
}