import { App } from '../../src/app/App';
import { fireEvent, screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

function renderApplication () {
  document.body.innerHTML = `<template id="swquiz-app"></template>`;
  App({ renderOn: '#swquiz-app' });
  return { container: document.body };
}


describe('Main Menu Screen', () => {

  beforeEach(() => {
    renderApplication();
  });

  it('should display "Play The Game" button', () => {
    expect(screen.getByTestId('play-the-game-button')).toBeInTheDocument();
  });

  it('should display "Hall of fame" button', () => {
    expect(screen.getByTestId('hall-of-fame-button')).toBeInTheDocument();
  });

  describe('when click on settings button', () => {

    beforeEach(() => {
      fireEvent.click(screen.getByTestId('swquiz-settings-button'))
    })

    it('then Google Vision API Key input should be shown', () => {
      expect(screen.getByTestId('google-api-key-save')).toBeInTheDocument()
    })

  });

});
