import {CREATE_POST, DELETE, FETCH_ALL, LIKE, UPDATE} from '../constants/actionTypes'
import * as api from "../api"

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost()
    dispatch({ type: FETCH_ALL, payload: data })
  } catch (e) {
    console.log(e.message)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post)

    dispatch({ type: CREATE_POST, payload: data })
  } catch (e) {
    console.log(e)
  }
}

export const updatePost = (id, updatePost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatePost)

    dispatch({ type: UPDATE, payload: data })
  } catch (e) {
    console.log(e)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)
    dispatch({ type: DELETE, payload: id })
  } catch (e) {
    console.log(e.message)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)
    console.log(data)

    dispatch({ type: LIKE, payload: data })
  } catch (e) {
    console.log(e)
  }
}
