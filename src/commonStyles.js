// One way of returning a JSS map block
const italicStuffStyle = theme => ({
  italicStuff: {
    margin: theme.spacing(1),
    color: 'green',
    fontStyle: 'italic',
  },
})

// Same as above, but slightly different syntax
const purpleStuffStyle = theme => {
  return {
    purpleStuff: {
      margin: theme.spacing(1),
      color: 'purple',
    },
  }
}

export { italicStuffStyle, purpleStuffStyle }
