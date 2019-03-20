function charCount() {
    let content = document.getElementById("comment").value;
    document.getElementById("textCount").innerText = content.length + 1;
}

function postComment() {

    let name = document.getElementById("nameID").value;
    let topic = document.getElementById("topicID").value;
    let rate = document.getElementById('rateID').value
    let content = document.getElementById("comment").value;

    document.getElementById("lstPosts").innerHTML = "Your name: "+name + "<hr/>";
    document.getElementById("2ndPosts").innerHTML = "Topic :"+topic + "<hr/>";
    document.getElementById("3rdPosts").innerHTML = "Rate:" +rate + "<hr/>";
    document.getElementById("4thPosts").innerHTML = content + "<hr/>";
}
