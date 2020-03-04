const modal = document.querySelector("#modal")
document.querySelector("#new-post-btn").addEventListener("click", () => {
    modal.style.display = "block"
    
})
// Hide the form
modal.addEventListener("click", e => {
    if (e.target.dataset.action === "close") {
        modal.style.display = "none"
    }
    // debugger
})