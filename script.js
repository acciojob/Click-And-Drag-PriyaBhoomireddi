cy.get('.items')
  .trigger('mousedown', { which: 1, pageX: 493, pageY: 391 })
  .trigger('mousemove', { pageX: 271, pageY: 391 })
  .wait(50) // Adding a delay before mouseup
  .trigger('mouseup', { force: true });

cy.get('.items').should($items => {
  expect($items[0].scrollLeft).to.be.greaterThan(0);
});
