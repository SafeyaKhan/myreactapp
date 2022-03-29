import React from 'react'
import PostItem from './PostItem'

const PostList = () => {
    // const posts = ['JSX', 'React', 'React Native'];
    // return posts.map(post => <h1 key={post}>{post}</h1>)
    const posts = [
        {
            "id": 1,
            "title": "sunt aut facere repellat",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit "
        },
        {
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat "
        },
        {
            "id": 3,
            "title": "ea molestias quasi exercitationem ",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis"
        },
        {
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi "
        }
    ]

    return posts.map(item => <PostItem key={item.id} post={item} />)
}

export default PostList