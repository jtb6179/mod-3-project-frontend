class Like {

    static all = [];

    constructor(like, post_id) {
        this.like = like
        this.post_id = post_id

        Like.all.push(this)
    }

    

}