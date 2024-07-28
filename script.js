cy.get('.items').then($items => {
  // store initial scroll position
  const initialScrollLeft = $items[0].scrollLeft;

  // set new scroll position
  $items[0].scrollLeft = 100;

  // check if scroll position has been updated
  cy.get('.items').should($newItems => {
    const finalScrollLeft = $newItems[0].scrollLeft;
    expect(finalScrollLeft).to.be.greaterThan(initialScrollLeft);
  });
});