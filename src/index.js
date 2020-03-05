console.log("Hello World")
document.addEventListener("DOMContentLoaded", () => {
    let url = `http://localhost:3000/posts`;

    
    let allDumpDrops;
    let newPostBtn = document.querySelector('#new-post-btn');
    let newPostForm = document.querySelector('#New-Post-Form');


    fetch(url).then(res => res.json())
    .then(posts => {
        console.log(posts);
        
        posts.forEach(onePost => {
            renderPost(onePost) 
            });
            allDumpDrops = posts
        })
        // let lastBreak = document.createElement('hr')
        // let newPostBtn = document.createElement('button')
        // let formForPost = document.querySelector("#modal")
        // newPostBtn.setAttribute('id', `new-post-btn`)
        // newPostBtn.setAttribute('class', `btn`)
        // newPostBtn.innerText = `New Post`
        // thebody.append(newPostBtn, lastBreak)


       


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
           
            likeBtn.setAttribute('class', `btn`)
            
            deleteBtn.setAttribute('class', `btn`)
            deleteBtn.innerText = "Delete this post"


            // dislikeBtn.setAttribute('class', `btn`)
            allPostDiv.classList.add('all-the-dump-drops','divToTop', 'col-md-6')
       
            allPostDiv.setAttribute('data-id', `${postObj.id}`)
            postsSpan.setAttribute('class', 'child-Span-list')
            likeSum.setAttribute('style', `font-family: "Times New Roman", Times, serif`)
            likeSum.setAttribute('style', `font-style: italic`)
            likeSum.setAttribute('id', `number-of-likes`)
            
            
            h1Above.innerText = `Headline: ${postObj.title}`
            
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
            btnDiv.append(likeBtn)
            theNavBar.appendChild(loginUser)
            allPostDiv.append(postsSpan, btnDiv, anotherBreak, likeSum, theBreak)
            fillInBody.append(allPostDiv)
            btnDiv.append(deleteBtn)

            deleteBtn.addEventListener('click', deletePost)



            postsSpan.addEventListener('click', () =>{
                console.log("hover working");
                
                // let foundDumpdrop = allDumpDrops.find(post => post.id == event.target.dataset.id)
                let onePostDiv = document.createElement('div')
                let oneMoreSpan = document.createElement('div')
                let likeDiv = document.createElement('div')
                let specificSpanLikebtn = document.createElement('button')


                specificSpan.innerHTML = ""
                
                onePostDiv.setAttribute('id', 'specific-dump')
                onePostDiv.setAttribute('style', 'color: black')
                onePostDiv.setAttribute('style', 'font-weight: bold')
                oneMoreSpan.setAttribute('style', 'font-weight: normal')
                specificSpanLikebtn.setAttribute('class', `btn`)

                onePostDiv.innerText = `${postObj.title}:`
                oneMoreSpan.innerText = postObj.post_text
                specificSpanLikebtn.innerText = `Like! 👍`
                // debugger
                // 
                likeDiv.append(specificSpanLikebtn)
                oneMoreSpan.append(likeDiv)
                onePostDiv.append(oneMoreSpan)
                specificSpan.append(onePostDiv)






                // function likeMe(event, postObj) {
                //     // 1. console.log quoteObj, even t
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
                //     likeMe(event, postObj)
                // })
                })

           
             function deletePost(event){
                 event.preventDefault()
                 fetch(`http://localhost:3000/posts/${postObj.id}`, {
                     method: "DELETE"
                 }).then(res => res.json())
                    allPostDiv.remove()
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
                        postsSpan.append(data)
                    })
                    

                    if (typeof newPost !== "undefined") {
                        newPostForm.style.display = "none"
                    } else {
                        alert("Make Sure all the fields are field")
                    }

                    // debugger
                })
        
            }


})