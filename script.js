const replies = [
    "Do what your hear desires",
    "What are you doing with your life? That's a terrible decision",
    "Try it, doesn't hurt.",
    "Y.O.L.O"
]

const container = document.querySelector("#reply");

function handleSubmit(){
    document.querySelector("#question").addEventListener("submit", function (e) {
        e.preventDefault();    //stop form from submitting
        console.log("submitted");
        clearReplies();
        getRandomReply();
    });
}

function clearReplies(){
    if (container.innerHTML.length >= 1){
        console.log("There is a reply");
        container.innerHTML = "";
    }
    
}

function getRandomReply(){
    const randoInt = Math.floor(Math.random() * 4); 
    const randoReply = replies[randoInt];
    // const reply = container.createElement("p");
    // console.log(reply);
    container.appendChild(document.createTextNode(randoReply));
}

handleSubmit();