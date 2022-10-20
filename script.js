function getEmail() {
    let user = document.getElementById("email").value;
    for (let i = 0; i < user.length; i++) {
        if (user[i] == "@") {
            let j = i;
        }
    }
    let userR = user.substring(0, j)
    console.log(userR)
}

function getEmaill() {
    let user = document.getElementById("emaill").value;
    
}
    
// function getEmail() {
//     let user = document.getElementById("email").value;
//     for (let i = 0; i < user.length; i++) {
//         if (user[i] === "@") {
//             let j = i;
//         }
//     }
//     let userR = user.substring(0, j)
//     console.log(userR)
//     let testing = document.getElementById("testing")
//     testing.append(userR)
// }

function searchAlert() {
    alert("sorry! i lied there is no search function")
}


function addPost() {
    console.log("hi")
    let textbox = $("#text-box-input")
    let titlebox = $("#title-box-input")
    let input1 = textbox.val()
    let input2 = titlebox.val()
    let div = document.createElement('p')
    div.innerText = input1
    console.log(div)

    document.getElementById('text-box-input').value = ''
    document.getElementById('title-box-input').value = ''
    let divdiv = $("#divdiv")
    console.log(input1)
    divdiv.prepend('<div class="post"> <h1 id="title" class="margin more">' + input2 + '</h1> <p id="some-text" class="margin">' + input1 + '</p></div> <div class = "aandd"><img src="delete.png" class="anddelete" onclick="deletePost()"></div><div class="comment"><div class="comment-line"> <input type="text" id="comment-box-input" placeholder="Add a comment..."><img src="add.png" class="anddelete" id="addComment" onclick="addComment()"></div></div>')
}

function newDiv1() {
    let button1 = document.querySelector('#add')
    button1.addEventListener("click", addPost())
}

function clear() {
    document.getElementById('text-box-input').value = ''
    document.getElementById('title-box-input').value = ''
}

function addComment() {
    let commentbox = $("#comment-box-input")
    let input = commentbox.val()
    let comment = document.createElement('p')
    comment.innerText = input

    document.getElementById('comment-box-input').value = ''
    let commentdiv = $(".comment")
    console.log(input)
    commentdiv.prepend('<p class="cocoa" onclick = "deleteComment()">' + input + '</p>')
}

function deletePost()  {
    let divdiv = $("#divdiv")
    divdiv.remove()
}

function deleteComment() {
    let delete1 = $(".cocoa")
    delete1.remove()
}
