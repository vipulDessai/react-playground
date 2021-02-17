import { Post } from "../Posts/Post";

interface PostsState {
    message?: string,
    posts?: Post[],
    post?: Post,
}

interface PostsAction {
    posts: Post[],
    post: Post,
    type: string,
}

export function posts(state: PostsState = {}, action: PostsAction): PostsState {
    switch (action.type) {
        case "fetched":
            return {
                message: "post fetched",
                posts: action.posts
            }
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