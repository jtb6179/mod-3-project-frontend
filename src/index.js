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
            let theNavBar = document.createElement('nav')
            let theBreak = document.createElement('hr')
            let sideBar = document.createElement('section')
            let h1Above = document.createElement('h1')
            let specificSpan = document.createElement('span')
            let anotherBreak = document.createElement('hr')
            let likeBtn = document.createElement('button')
            let dislikeBtn = document.createElement('button')
            let aMain = document.createElement('main')
            let likeSum = document.createElement('div')
            let dislikeSum = document.createElement('div')
            let lastBreak = document.createElement('hr')
            let allPostDiv = document.createElement('div')
            let postsSpan = document.createElement('span')

            theNavBar.setAttribute('class', 'fh5co-nav')
            theNavBar.setAttribute('id', 'trash-heap')
            sideBar.setAttribute('id', `trash-post-number-${postObj.id}`)
            sideBar.setAttribute('class', `offcanvas`)
            likeBtn.setAttribute('class', `nice-button`)
            dislikeBtn.setAttribute('class', `nice-button`)
            allPostDiv.setAttribute('class', 'all-the-dump-drops')
            postsSpan.setAttribute('class', 'child-Span-list')
            
            h1Above.innerText = `Headline: ${postObj.title}`
            // specificSpan.innerText = postObj.post_text
            likeBtn.innerText = `Like! 👍`
            dislikeBtn.innerText = `Dislike! 👎`
            // likeSum.innerText = `likes: ${postObj.likes.count}`
            // dislikeSum.innerText = `likes: ${postObj.likes.count}`
            postsSpan.innerText = postObj.post_text

            aMain.append(likeSum, dislikeSum)
            specificSpan.append(theBreak, likeBtn, dislikeBtn, aMain)
            sideBar.append(specificSpan, anotherBreak)
            allPostDiv.append(postsSpan)
            fillInBody.append(sideBar, allPostDiv)

     /* <nav>
            log in form goes here as well as logo
            <hr>
        </nav>
        <section>
            <span>
            The Specific Post
            <hr>
            <button type="button">like 👍!</button>
            <button type="button"> dislike 👎!</button>
             <div>like #</div> <div>dislike #</div>
            <hr>
            </span>
        </section>
        <div>
            <span>
                all the post
            </span>
        </div>*/
        }






})