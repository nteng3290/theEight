const container = document.querySelector("#reply");
const refresh = document.querySelector('#btn-refresh');

const replies = [
    "Do what your heart desires",
    "What are you doing with your life? That's a terrible decision",
    "Try it, doesn't hurt.",
    "Y.O.L.O"
]

//Handle Form Submit
function handleSubmit(){
    document.querySelector("#question").addEventListener("submit", function (e) {
        e.preventDefault();    //stop form from submitting
        clearReplies();
        getRandomReply();
        displayButton();
    });
}

//Clear Replies on document 
function clearReplies(){
    if (container.innerHTML.length >= 1){
        container.innerHTML = "";
    }
    
}

//Get Random Reply from replies array 
function getRandomReply(){
    const randoInt = Math.floor(Math.random() * 4); 
    const randoReply = document.createTextNode(replies[randoInt]);
    const reply = document.createElement("p");
    reply.appendChild(randoReply);
    container.appendChild(reply);
}

//Display refresh button after replies append to page
function displayButton(){
   refresh.classList.add("visible");
   refreshAns();
}

//Handle Refresh of answers 
function refreshAns(){
    refresh.addEventListener("click", function (e) {
        e.preventDefault();
        container.innerHTML= "";
        refresh.classList.remove("visible");
    });
}

handleSubmit();