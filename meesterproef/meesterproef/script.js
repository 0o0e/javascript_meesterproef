// var buttonscontainer = document.getElementById("container");
// var buttonnamess = ["cda","vvd","pvda","d66"]


// // var buttonnames = [{"cda": 0}, {"vvd" : 0}, {"pvda" :0}, {"d66": 0}]
// var buttonnames = {"cda": 0, "vvd" : 0, "pvda" :0, "d66": 0}
// var nameslength = Object.keys(buttonnames).length
// console.log(Object.keys(buttonnames).length)
// console.log(Object.keys(buttonnames)[1]) //dit werkt

// for(var i = 0;i < nameslength; i++){
//     var button = document.createElement("button");
//     // button.className  = buttonnames[i]
//     button.className ="button"
//     button.textContent = Object.keys(buttonnames)[i];
//     // buttonnames(key) = 0

//     key = Object.keys(buttonnames)[1]
    
//     var key = 0

//     console.log(key)


//     console.log(button)
    
//     buttonscontainer.appendChild(button);
      

//     button.addEventListener("click", function() {
//         this.clickcount ++;
//         console.log(this.clickcount)
//         textContent = this.textContent
//         // buttonclicked == this.clickcount
//         Object.values(buttonnames)[1] += this.clickcount
//         buttonnames[Object.keys(buttonnames)[i]] = this.textContent;
//         console.log(this.textContent)
//         console.log(Object.values(buttonnames)[i])

//         console.log(buttonnames)
        
        
        
//         // button_amount.push({
//         //     textContent : buttonclicked
//         // });   

//     });
// }

var buttonscontainer = document.getElementById("container");
var buttonnames = {"cda": 0, "vvd" : 0, "pvda" : 0, "d66": 0};

for (var key in buttonnames) {
    var button = document.createElement("button");
    button.className = "button";
    button.textContent = key;
    button.clickcount = 0;

    button.addEventListener("click", function() {
        this.clickcount++;
        buttonnames[this.textContent] = this.clickcount;
        console.log(buttonnames);
    });

    buttonscontainer.appendChild(button);
    console.log(buttonnames)
}



var button_tellen = document.createElement("button")
button_tellen.className = "button_tellen"
button_tellen.textContent = "stemmen tellen"
buttonscontainer.appendChild(button_tellen)

lijst = []
nummer = 0
console.log(lijst[0])
button_tellen.addEventListener("click",function(){
    while(buttonscontainer.firstChild){
        buttonscontainer.removeChild(buttonscontainer.firstChild)
    }

    for(var key in buttonnames){
        var result = document.createElement("p");
        result.textContent =buttonnames[key]  + " stemmen voor " +  key;
        buttonscontainer.appendChild(result);
        

        if(buttonnames[key] > nummer){
            lijst = []
            lijst.push(key)
            console.log(lijst)
            nummer = buttonnames[key]
        }
        else if(buttonnames[key] == nummer){
            lijst.push(key)
        }
        


    }
    var meestestemmen = document.createElement("h3")
    meestestemmen.textContent = "partij met meeste stemmen: " + lijst
    buttonscontainer.appendChild(meestestemmen)
    console.log(lijst)


    
})