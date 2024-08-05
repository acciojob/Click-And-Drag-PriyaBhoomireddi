cy.get('.items').then($items => {
  const initialScrollLeft = $items[0].scrollLeft;
  console.log('Initial scrollLeft:', initialScrollLeft);

  
  expect(initialScrollLeft).to.equal(0);


  cy.get('.items').then($items => {
  const rect = $items[0].getBoundingClientRect();
  const startX = rect.left + 10; // start 10px from the left edge
  const endX = rect.right - 10; // end 10px from the right edge
  const y = rect.top + rect.height / 2; // middle height of the element

  cy.get('.items')
    .trigger('mousedown', { which: 1, pageX: startX, pageY: y })
    .trigger('mousemove', { pageX: endX, pageY: y })
    .wait(500) 
    .trigger('mouseup', { force: true });
    .wait(500) 
    .trigger('mouseup', { force: true });

  
  cy.get('.items').should($items => {
    const finalScrollLeft = $items[0].scrollLeft;
    console.log('Final scrollLeft:', finalScrollLeft);

    expect(finalScrollLeft).to.be.greaterThan(initialScrollLeft);
  });
});
