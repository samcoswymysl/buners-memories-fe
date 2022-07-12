import React, { useEffect, useState } from "react"
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import { useDispatch } from "react-redux"

import { getPosts } from "./actions/posts"
import memories from "./images/memories.png"
import { Posts } from "./components/Posts/Posts"
import { Form } from "./components/Form/Form"

import useStyles from "./styles"

export const App = () => {
  const classes = useStyles()

  const [currId, setCurrId] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60px"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            space-between={"true"}
            alignItems="stretch"
            spacing={3}
            className={classes.mainContainer}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrId={setCurrId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currId={currId} setCurrId={setCurrId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}
