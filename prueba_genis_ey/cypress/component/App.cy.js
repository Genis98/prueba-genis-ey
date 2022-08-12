import App from '../../src/App.vue'

describe('<App>', () => {
    beforeEach(() => {
        cy.request('https://jsonplaceholder.typicode.com/photos')
    })
    it('mounts', () => {
        cy.mount(App)
        cy.contains('Pictures')
    })
})