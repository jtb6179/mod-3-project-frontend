console.log("Hello World")
document.addEventListener("DOMContentLoaded", () => {
    let url = `http://localhost:3000/posts`;

    // let allDumpDrops;
    const allnewLike = new Like;

    fetch(url).then(res => res.json())
    .then(posts => {
        posts.forEach(onePost => {
            renderPost(onePost) 
            });
            // allDumpDrops = posts
            // debugger
        })

        function renderPost(postObj) {
            let fillInBody = document.querySelector('body')
            let theNavBar = document.querySelector('#the-nav')
            let specificSpan = document.querySelector('.specific-post')
            let btnDiv = document.createElement('div')
            let theBreak = document.createElement('hr')
            let loginUser = document.createElement('form')
            let h1Above = document.createElement('h1')
            let anotherBreak = document.createElement('hr')
            let likeBtn = document.createElement('button')
            // let dislikeBtn = document.createElement('button')
            let likeSum = document.createElement('div')
            // let dislikeSum = document.createElement('div')
            let lastBreak = document.createElement('hr')
            let allPostDiv = document.createElement('div')
            let postsSpan = document.createElement('span')

            // theNavBar.setAttribute('class', 'nav')
            // theNavBar.setAttribute('id', 'trash-heap')
            loginUser.setAttribute('label', `Username`)
    //         <label for="uname"><b>Username</b></label>
    // <input type="text" placeholder="Enter Username" name="uname" required></input>
            // sideBar.setAttribute('class', `offcanvas`)
            likeBtn.setAttribute('class', `btn`)
            
            // dislikeBtn.setAttribute('class', `btn`)
            allPostDiv.setAttribute('class', 'all-the-dump-drops')
            allPostDiv.setAttribute('data-id', `${postObj.id}`)
            postsSpan.setAttribute('class', 'child-Span-list')
            likeSum.setAttribute('style', `font-family: "Times New Roman", Times, serif`)
            likeSum.setAttribute('style', `font-style: italic`)
            likeSum.setAttribute('id', `number-of-likes`)
            
            h1Above.innerText = `Headline: ${postObj.title}`
            
            likeBtn.innerText = `Like! 👍`
            // theNavBar.
            // dislikeBtn.innerText = `Dislike! 👎`
            function likeNumber() {
                return postObj.num_of_likes = 0
            }
            likeSum.innerText = `likes: ${likeNumber()}`
            // dislikeSum.innerText = `dislikes: 0`
            postsSpan.innerText = postObj.post_text
            
            
            // specificSpan.append( )
            // sideBar.append( )
            btnDiv.append(likeBtn)
            theNavBar.appendChild(loginUser)
            allPostDiv.append(postsSpan, btnDiv, anotherBreak, likeSum, theBreak)
            fillInBody.append(allPostDiv)

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

                function likeMe(event, postObj) {
                    // 1. console.log quoteObj, event
                    // console.log(event, quoteObj);
                    // 2. fetch POST request to `http://localhost:3000/likes`
                    // 3. update the likes button's span 

                    const newlike = {
                        like: likeSum.innerText,
                        post_id: postObj.id
                    }
                    let likenum = event.path[2].querySelector('#number-of-likes')
                    let increasedLikes = (parseInt(likenum.innerText.match(/\d+/)[0])) + 1
                    // debugger
                    return fetch(`http://localhost:3000/posts/${postObj.id}`, {
                        method: "PATCH",
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({ like: newlike })
                    })

                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            event.path[2].querySelector('#number-of-likes').innerText = `likes: ${increasedLikes}`
                        })


                }

                specificSpanLikebtn.addEventListener('click', event => {
                    console.log('like');
                    likeMe(event, postObj)
                })
                

            })

            function likeMe(event, postObj) {
                // 1. console.log quoteObj, event
                // console.log(event, quoteObj);
                // 2. fetch POST request to `http://localhost:3000/likes`
                // 3. update the likes button's span 
                
                const newlike = {
                    like: likeSum.innerText,
                    post_id: postObj.id
                }
                let likenum = event.path[2].querySelector('#number-of-likes')
                let increasedLikes = (parseInt(likenum.innerText.match(/\d+/)[0])) + 1
                // debugger
                return fetch(`http://localhost:3000/posts/${postObj.id}`, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ like: newlike })
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

     /* for event listener
     <span>
      The Specific Post
      <hr>
      <button type="button">like 👍!</button>
      <button type="button"> dislike 👎!</button>
      <div>like #</div>
      <div>dislike #</div>
    </span>*/
        }






})