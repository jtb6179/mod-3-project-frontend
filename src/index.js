console.log("Hello World")
document.addEventListener("DOMContentLoaded", () => {
    let url = `http://localhost:3000/posts`;

    
    let allDumpDrops;
    let newPostBtn = document.querySelector('#new-post-btn');
    let newPostForm = document.querySelector('#New-Post-Form');

            

    fetch(url).then(res => res.json())
    .then(posts => {
        // console.log(posts);
        
        posts.forEach(onePost => {
            renderPost(onePost) 
            });
            allDumpDrops = posts
            // console.log(allDumpDrops);
        })

        newPostForm.addEventListener('submit', (event) => {
                console.log(event);
                event.preventDefault()

                

                const newPost = {
                    title: event.target.name.value,
                    post_text: event.target.post_text.value,
                }

                fetch(url, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(newPost)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        allDumpDrops.push(data)
                        renderPost(data)
                    })
                    

                    if (typeof newPost !== "undefined") {
                        newPostForm.style.display = "none"
                    } else {
                        alert("Make Sure all the fields are field")
                    }
                    // debugger
                })
       
        let colDiv = document.createElement('div')
        colDiv.classList.add('col-md-6', 'divToTop')

        function renderPost(postObj) {
            // debugger
            let fillInBody = document.querySelector('body')
            let theNavBar = document.querySelector('#the-nav')
            let specificSpan = document.querySelector('.specific-post')
            let btnDiv = document.createElement('div')
            let theBreak = document.createElement('hr')
            let loginUser = document.createElement('form')
            let h1Above = document.createElement('h1')
            let anotherBreak = document.createElement('hr')
            let likeBtn = document.createElement('button')
            let likeSum = document.createElement('div')
            let allPostDiv = document.createElement('div')
            let postsSpan = document.createElement('span')
            let deleteBtn = document.createElement('button')
            let editPostForm = document.createElement('form')
            let editPost = document.createElement('input')
            let editPostBtn = document.createElement('button')
            let editBreak = document.createElement('hr')

            deleteBtn.setAttribute('class', `btn`)
            
           
            likeBtn.setAttribute('class', `btn`)
            
            // dislikeBtn.setAttribute('class', `btn`)
            allPostDiv.classList.add('all-the-dump-drops')
            allPostDiv.setAttribute('data-id', `${postObj.id}`)
            postsSpan.setAttribute('class', 'child-Span-list')
            
            likeSum.setAttribute('style', `font-family: "Times New Roman", Times, serif`)
            likeSum.setAttribute('style', `font-style: italic`)
            likeSum.setAttribute('id', `number-of-likes`)
            editPost.setAttribute('class', 'edit-post')
            editPost.setAttribute('placeholder', 'edit post...')
            editPost.innerText = "Edit post"

            editPostForm.setAttribute('id', 'edit-post-form')


            editPostBtn.setAttribute('class', 'btn')
            editPostBtn.innerText = "Submit Edit"
            
            
            h1Above.innerText = `Headline: ${postObj.title}`
            deleteBtn.innerText = "Delete this post"
            likeBtn.innerText = `Like! 👍`
            // theNavBar.
            // dislikeBtn.innerText = `Dislike! 👎`
            postsSpan.innerText = postObj.post_text
            function likeNumber() {
                return postObj.num_of_likes.length 
            }

            likeSum.innerText = `likes: ${likeNumber()}`
           
            // dislikeSum.innerText = `dislikes: 0`
            
            
            // specificSpan.append( )
            // sideBar.append( )
            btnDiv.append(likeBtn, deleteBtn)
            theNavBar.appendChild(loginUser)
            allPostDiv.append(postsSpan, btnDiv, anotherBreak, likeSum, theBreak)
            colDiv.append(allPostDiv)
            fillInBody.append(colDiv)
            btnDiv.append(editBreak ,editPostForm)
            editPostForm.append(editPost)
            editPostForm.append(editPostBtn)

            deleteBtn.addEventListener('click', (event) => deletePost(postObj, event))

            editPostForm.addEventListener('submit', () => {
                // debugger
                editPostFnc(postObj)
            })

            postsSpan.addEventListener('click', () =>{
                console.log("hover working");
                
                // let foundDumpdrop = allDumpDrops.find(post => post.id == event.target.dataset.id)
                let onePostDiv = document.createElement('div')
                let oneMoreSpan = document.createElement('div')
                let likeDiv = document.createElement('div')
                let specificSpanLikebtn = document.createElement('button')
                let commentSpan = document.createElement('span')
                let commentForm = document.createElement('form')
                let comBut = document.createElement("input"); //input element, text
                // let s = document.createElement("input"); //input element, Submit button
                let aBr = document.createElement('hr')
                let comButBr = document.createElement('hr')
                let theTextSpot = document.createElement('textarea')
                let commentSpots = document.createElement('span')
                let comBreak = document.createElement('hr')
                

                theTextSpot.setAttribute('rows', '3')
                theTextSpot.setAttribute('col', '80')
                theTextSpot.setAttribute('name', 'text')

                // // i.setAttribute('type', "text");
                // // theTextSpot.setAttribute('name', "user");
                comBut.setAttribute('class','btn')
                comBut.setAttribute('type','submit')
                comBut.setAttribute('value','Create Comment')

                // theTextSpot.setAttribute('type', "submit");
                // i.setAttribute('type', "Submit");
                // i.setAttribute('value', "Create Comment");
                
                specificSpan.innerHTML = ""
                
                onePostDiv.setAttribute('id', 'specific-dump')
                onePostDiv.setAttribute('style', 'color: black')
                onePostDiv.setAttribute('style', 'font-weight: bold')
                oneMoreSpan.setAttribute('style', 'font-weight: normal')
                specificSpanLikebtn.setAttribute('class', `btn`)
                // commentForm.classList.add("form-control-static")
                commentForm.setAttribute('id', "commentform")

                onePostDiv.innerText = `${postObj.title}:`
                oneMoreSpan.innerText = postObj.post_text
                specificSpanLikebtn.innerText = `Like! 👍`
                comBut.innerText = 'Drop Com'

                postObj.comments.forEach(acom => {
                    let comLi = document.createElement('li')
                    comLi.append(acom.text)
                    commentSpots.append(comLi)
                })
                
                
                
                // commentForm.appendChild(s);
                commentForm.append(theTextSpot, comButBr,comBut);
                commentSpan.append(commentForm)

                likeDiv.append(specificSpanLikebtn)
                oneMoreSpan.append(likeDiv)
                onePostDiv.append(oneMoreSpan)
                specificSpan.append(onePostDiv, aBr, commentSpan, comBreak,commentSpots)

                commentForm.addEventListener('submit', (event) =>{
                    event.preventDefault()
                    
                    const theCommentCreated = {
                        text: event.target.text.value,
                        post_id: postObj.id   
                    }

                    fetch(`http://localhost:3000/comments`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(theCommentCreated)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data); 
                        commentSpots.innerText = data.text
                        commentSpan.append(commentSpots)
                        
                    })

                    // debugger
                })

      
                // < div class="specific-post col-md-6" >
                // <form id="commentform">
                // Name: <input type="text" name="usrname">

                // </form>
                // <textarea name="comment" form="usrform">Enter text here...</textarea>
                // <input class="btn" type="submit" value="Create Comment">
                // </div>


                // function likeMe(event, postObj) {
                //     // 1. console.log quoteObj, event
                //     // console.log(event, quoteObj);
                //     // 2. fetch POST request to `http://localhost:3000/likes`
                //     // 3. update the likes button's span 

                //     const newlike = {
                //         like: likeSum.innerText,
                //         post_id: postObj.id
                //     }
                //     let likenum = event.path[2].querySelector('#number-of-likes')
                //     let increasedLikes = (parseInt(likenum.innerText.match(/\d+/)[0])) + 1
                //     // debugger
                //     return fetch(`http://localhost:3000/posts/${postObj.id}`, {
                //         method: "PATCH",
                //         headers: {
                //             'Content-Type': 'application/json',
                //             'Accept': 'application/json'
                //         },
                //         body: JSON.stringify({ like: newlike })
                //     })

                //         .then(res => res.json())
                //         .then(data => {
                //             console.log(data)
                //             event.path[2].querySelector('#number-of-likes').innerText = `likes: ${increasedLikes}`
                //         })


                
                

                // specificSpanLikebtn.addEventListener('click', event => {
                //     console.log('like');
                //     debugger
                //     likeMe(event, postObj)
                // })
                })

            function editPostFnc(postObj) {
                event.preventDefault()
                const changedPost = {
                    title: postObj.title,
                    post_text: editPost.value
                }
                console.log(changedPost);
                
                
                debugger
                fetch(`http://localhost:3000/posts/${postObj.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(
                        changedPost
                    ),
                })
                    .then(res => res.json())
                    .then(data => {
                        renderPost(data)
                    })

                              
            }


            function deletePost(postObj, event) {
                event.preventDefault()
                // debugger
                const getRid = event.target.parentElement.parentElement
                fetch(`http://localhost:3000/posts/${postObj.id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    getRid.remove()
                })

                
            }

            

            function likeMe(event, postObj) {
                const newlike = {
                    like: likeSum.innerText,
                    post_id: postObj.id
                }
                // debugger
                let likenum = event.path[2].querySelector('#number-of-likes')
                let increasedLikes = (parseInt(likenum.innerText.match(/\d+/)[0])) + 1
                // debugger
                return fetch(`http://localhost:3000/num_of_likes`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(newlike)
                })
                
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        event.path[2].querySelector('#number-of-likes').innerText = `likes: ${increasedLikes}`
                    })
                    

            }
            likeBtn.addEventListener('click', event => {
                console.log('like');
                likeMe(event, postObj)
            })
            
           
        
            }


})