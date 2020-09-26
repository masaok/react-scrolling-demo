import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: 'DarkOliveGreen',
    overflow: 'hidden',
    position: 'fixed',
    width: '100vw', // width of screen including margin: https://stackoverflow.com/a/25225716
    bottom: 0,
  },
  footer: {},
}))

const Footer = props => {
  const classes = useStyles(props)

  // AppBar creates a "header" basic HTML tag, which doesn't make sense for the footer
  return <Toolbar className={classes.root}>THIS IS THE FOOTER</Toolbar>
}

export default Footer
