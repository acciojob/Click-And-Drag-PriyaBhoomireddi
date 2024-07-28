cy.get('.items').then($items => {
  const initialScrollLeft = $items[0].scrollLeft;
  console.log('Initial scrollLeft:', initialScrollLeft);

  // Verify the initial scrollLeft value is 0
  expect(initialScrollLeft).to.equal(0);

  // Perform the drag action
  cy.get('.items')
    .trigger('mousedown', { which: 1, pageX: 493, pageY: 391 })
    .trigger('mousemove', { pageX: 271, pageY: 391 })
    .wait(500) // Increase wait time to ensure the scroll action completes
    .trigger('mouseup', { force: true });

  // Check the scrollLeft value after the drag action
  cy.get('.items').should($items => {
    const finalScrollLeft = $items[0].scrollLeft;
    console.log('Final scrollLeft:', finalScrollLeft);

    // Assert the final scrollLeft is greater than the initial value
    expect(finalScrollLeft).to.be.greaterThan(initialScrollLeft);
  });
});
