console.log("Hello World")
document.addEventListener("DOMContentLoaded", () => {
    let url = `http://localhost:3000/posts`
    
    fetch(url).then(res => res.json())
    .then(posts => {
        posts.forEach(onePost => {
            renderPost(onePost) 
            });
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
            postsSpan.setAttribute('class', 'child-Span-list')
            
            h1Above.innerText = `Headline: ${postObj.title}`
            
            likeBtn.innerText = `Like! 👍`
            // theNavBar.
            // dislikeBtn.innerText = `Dislike! 👎`
            likeSum.innerText = `likes: 0`
            // dislikeSum.innerText = `dislikes: 0`
            postsSpan.innerText = postObj.post_text

            
            // specificSpan.append( )
            // sideBar.append( )
            btnDiv.append(likeBtn)
            theNavBar.appendChild(loginUser)
            allPostDiv.append(postsSpan, btnDiv, anotherBreak, likeSum, theBreak)
            fillInBody.append(allPostDiv)



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