var deferredPrompt;
if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('/sw.js')
    .then(function(){
        console.log('Service worker registered!');
    });
}

window.addEventListener('beforeinstallprompt',function(event){
    console.log("beforeinstallprompt fired");

    event.preventDefault();
    deferredPrompt=event;
    return false;
});

var promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        //resolve("This is executed once the timer is done!");
        reject({code:500,message:"An error occurred!"});
    }, 3000);
});
//fetch get
fetch('http://httpbin.org/ip')
.then(function(response){
    console.log(response);
    return response.json();
}).then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
});

//fetch post
fetch('http://httpbin.org/post',{
    method:"POST",
    headers:{
        'Content-Type':"application/json",
        'Accept':"application/json"
    },
    mode:"cors",
    body:JSON.stringify({
        message:"Does this work?"
    })
})
.then(function(response){
    console.log(response);
    return response.json();
}).then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
});

// promise.then(function(text){
//     return text;
// },function(error){
//     console.log(error.code,error.message);
// }).then(function(newText){
//     console.log(newText);
// });

promise.then(function(text){
    return text;
}).then(function(newText){
    console.log(newText);
}).catch(function(error){
    console.log(error.code,error.message);
});


console.log("this is executed right after setTimeout()");