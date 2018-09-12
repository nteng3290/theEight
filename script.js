// const styleSheet = document.querySelector("style")
const form = document.querySelector("#question");
const container = document.querySelector("#response");
const askScreen = document.querySelector("#ask-screen");
const askBox = document.querySelector("#ask-box");
const refreshBtn = document.querySelector('.btn-refresh');

const replies = [
    "Do what your heart desires",
    "Your luck is terrible right now. I sense that things will turn around Christmas.",
    "What are you doing with your life? That's a terrible decision",
    "Try it, doesn't hurt.",
    "Y.O.L.O"
]

//Handle Form Submit
function handleSubmit(){
    form.addEventListener("submit", function (e) {
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
    const response = document.createElement("p");
    container.scrollIntoView(true);
    response.appendChild(randoReply);
    container.appendChild(response);
}

//Display refresh button after replies append to page
function displayButton(){
    refreshBtn.classList.add("visible");
    handleRefresh();
}

//Handle Refresh of answers 
function handleRefresh(){
    refreshBtn.addEventListener("click", function (e) {
        e.preventDefault();
        container.innerHTML= "";
        refreshBtn.classList.remove("visible");
        askScreen.scrollIntoView({behavior: "smooth"});
        askBox.value = "";
    });
}

handleSubmit();