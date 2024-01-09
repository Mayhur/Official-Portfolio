let Text_Area = document.querySelector('.Area')
Text_Area.addEventListener('click', function(){
    Text_Area.classList.add('Are')
})
let FullName = document.querySelector('.FullName')
FullName.addEventListener('click', function(){
    FullName.classList.add('Full')
})
FullName.addEventListener('blur', function(){
    FullName.classList.remove('Full')
})
 
let Facebook= document.querySelector('.Facebook')
let Timeout1 =setTimeout(function(){
Facebook.classList.add('Hover')
},2000)

let Insta= document.querySelector('.Insta')
setTimeout(function(){
    Insta.classList.add('Hover')
},7000)
setTimeout(function(){
    if(Facebook.classList.contains('Hover')){
        Facebook.classList.remove('Hover')
    }
},5000)



let Link = document.querySelector('.Link')
setTimeout(function(){
    Link.classList.add('Hover')
},12000)

setTimeout(function(){
    if(Insta.classList.contains('Hover')){
        Insta.classList.remove('Hover')
    }
},10000)
// function SendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com.com",
//         Username : "mayhermswurld@gmail.com",
//         Password : "password",
//         To : 'mayhermswurld@gmail.com',
//         From : Text_Area.value,
//         Subject : "New Contact Form Enquiry",
//         Body : "Contact"
//     }).then(
//       message => alert(message)
//     );
    
// }
let Submit = document.querySelector('.Submit')
Submit.addEventListener('click', function(){
     
        Email.send({
            // Host : "smtp.elasticemail.com",
            // Username : "mayhermswurld@gmail.com",
            // Password : "0DCDA0011FC7441922ED171A47A9A2E57B4D",
            SecureToken :"562d31d8-463d-4f3f-94db-87e20374e092",
            To : 'mayhermswurld@gmail.com',
            From :'mayhermswurld@gmail.com',
            Subject : "New Contact Form Enquiry",
            Body : "Message : "+Text_Area.value +
            "<br/> Name :" +FullName.value
        }).then(
          message => alert(message)
        );
})
