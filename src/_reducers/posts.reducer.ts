import { Post } from "../Posts/Post";

interface PostsState {
    message: string,
    post: Post
}

interface PostsAction {
    post: Post;
    type: string;
}

export function posts(state: PostsState, action: PostsAction): PostsState {
    switch (action.type) {
        case "create":
            return {
                message: "post created",
                post: action.post
            }
        case "delete":
            return {
                message: "post deleted",
                post: action.post
            }
        default:
            return state;
    }
}