jb.component('tst2.main', { /* tst2.main */
  type: 'control',
  impl: group({
    controls: [
      button('%$bb/name%')
    ]
  })
})

jb.component('data-resource.person', { /* dataResource.person */
  watchableData: {
    name: 'aa'
  }
})

jb.component('data-resource.bb', { /* dataResource.bb */
  watchableData: {
    name: 'aa'
  }
})
