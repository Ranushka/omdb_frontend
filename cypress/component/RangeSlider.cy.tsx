/// <reference types="cypress" />
import React from 'react';
import { mount } from 'cypress/react18';

import RangeSlider from '@/components/Filters/RangeSlider';
import '@/app/globals.css';

const setNativeInputValue = (selector: string, value: number): void => {
  cy.get(selector).then(($input) => {
    const input = $input[0] as HTMLInputElement;
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value'
    )?.set;

    if (nativeInputValueSetter) {
      nativeInputValueSetter.call(input, value);
      const event = new Event('input', { bubbles: true });
      input.dispatchEvent(event);
    }
  });
};

describe('RangeSlider Component', () => {
  const min = 0;
  const max = 100;
  const step = 1;

  beforeEach(() => {
    mount(<RangeSlider min={min} max={max} step={step} />);
  });

  it('rage slider init with the correct values', () => {
    cy.get('.min_value').should('contain', min.toString());
    cy.get('.max_value').should('contain', max.toString());
  });

  it('rage slider move left side', () => {
    const newMinValue = 30;

    setNativeInputValue('.range_left', newMinValue);
    cy.get('.min_value').should('contain', newMinValue);
  });

  it('rage slider move right side', () => {
    const newMaxValue = 80;

    setNativeInputValue('.range_right', newMaxValue);
    cy.get('.max_value').should('contain', newMaxValue);
  });

  it('rage slider min value not have more than max', () => {
    setNativeInputValue('.range_left', max);
    cy.get('.min_value').should('not.contain', max.toString());
  });

  it('rage slider max value not go than min', () => {
    setNativeInputValue('.range_right', min);
    cy.get('.max_value').should('not.contain', min.toString());
  });
});
