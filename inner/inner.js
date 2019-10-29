jb.ns('inner')

jb.component('inner.main', { /* inner.main */
  type: 'control',
  impl: group({
    controls: [
      button('inner')
    ]
  })
})
