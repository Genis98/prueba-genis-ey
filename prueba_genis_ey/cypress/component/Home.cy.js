import Home from '../../src/components/Home.vue'

describe('<Home>', () => {
  it('mounts', () => {
    cy.mount(Home)
    cy.get('div')
  })
})