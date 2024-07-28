cy.get('.items').then($items => {
  const initialScrollLeft = $items[0].scrollLeft;
  console.log('Initial scrollLeft:', initialScrollLeft);

  cy.get('.items')
    .trigger('mousedown', { which: 1, pageX: 493, pageY: 391 })
    .trigger('mousemove', { pageX: 271, pageY: 391 })
    .wait(100) // Increase wait time before mouseup
    .trigger('mouseup', { force: true });

  cy.get('.items').should($items => {
    const finalScrollLeft = $items[0].scrollLeft;
    console.log('Final scrollLeft:', finalScrollLeft);
    expect(finalScrollLeft).to.be.greaterThan(initialScrollLeft);
  });
});
