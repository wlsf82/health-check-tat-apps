describe('Health check tests TAT Apps', () => {
  it('Hackerstories JS', () => {
    cy.intercept(
      'GET',
      'https://hn.algolia.com/api/v1/search?query=redux&page=0&hitsPerPage=100'
    ).as('getStoriesTSApp')
    cy.visit('https://hackernews-seven.vercel.app/')
    cy.wait('@getStoriesTSApp')
      .its('response.statusCode')
      .should('be.equal', 200)
    cy.get('.table-row')
      .should('have.length', 100)
  })

  it('Hackerstories TS', () => {
    cy.intercept(
      'GET',
      'https://hn.algolia.com/api/v1/search?query=React&page=0'
    ).as('getStoriesJSApp')
    cy.visit('https://wlsf82-hacker-stories.web.app/')
    cy.wait('@getStoriesJSApp')
      .its('response.statusCode')
      .should('be.equal', 200)
    cy.get('.item')
      .should('have.length', 20)
  })
})
