import React from 'react'
import {useSelector} from 'react-redux'

import {Post} from "./Post/Post";



import useStyles from './styles'

export const Posts = ()=> {

    const posts = useSelector((state)=> state.posts)

    console.log(posts)

    const classes = useStyles()
    return(
        <>
            <h2>POSTS</h2>
            <Post/>
            <Post/>
            <Post/>
        </>
    )
}
