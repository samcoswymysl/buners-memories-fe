import React, { useEffect, useState } from "react"
import { TextField, Button, Typography, Paper } from "@material-ui/core"
import FileBase from "react-file-base64"
import { useDispatch, useSelector } from "react-redux"

import useStyles from "./styles"
import { createPost, updatePost } from "../../actions/posts"

export const Form = ({ currId, setCurrId }) => {
  const classes = useStyles()

  const post = useSelector(  (state) => currId ? state.posts.find((post) => post._id === currId) : null
  )

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  })

  useEffect(() => {
    if (post) setPostData(post)
  }, [post])

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (currId) {
      dispatch(updatePost(currId, postData))
    } else {
      dispatch(createPost(postData))
    }

    clear()
  }

  const clear = () => {
    setCurrId(null)
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    })

  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form} `}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currId ? "Editing" : "Creating"} a Memory
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData((prev) => ({ ...prev, creator: e.target.value }))
          }
        />

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) =>
            setPostData((prev) => ({ ...prev, title: e.target.value }))
          }
        />

        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData((prev) => ({ ...prev, message: e.target.value }))
          }
        />

        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData((prev) => (
                { ...prev,
                  tags: e.target.value.split(',') }))
          }
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64) =>
              setPostData((prev) => {
                return {
                  ...prev,
                  selectedFile: base64,
                }
              })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  )
}
