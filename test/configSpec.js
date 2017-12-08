import { expect } from 'chai';

import { the, should } from './utils';
import config from './../';

const disabledResult = [0];
const enabledResult = [2];

the('config', () => {
    
  should('extend AirBnB config', () => {

    expect(config.extends).to.equal('airbnb');
  });
  
  should('specify the babel-eslint parser', () => {

    expect(config.parser).to.equal('babel-eslint');
  });
  
  should('set node environment', () => {

    expect(config.env.node).to.equal(true);
  });
  
  should('set mocha environment', () => {

    expect(config.env.mocha).to.equal(true);
  });
  
  should('set browser environment', () => {

    expect(config.env.browser).to.equal(true);
  });
  
  should('include the chai-friendly plugin', () => {

    expect(config.plugins.includes('chai-friendly')).to.equal(true);
  });
  
  should('allow unused / terminating expressions (for chai assertions, etc)', () => {

    expect(config.rules['no-unused-expressions']).to.deep.equal(disabledResult);
    expect(config.rules['chai-friendly/no-unused-expressions']).to.deep.equal(enabledResult);
  });
  
  should('allow invalid anchor tags (no href)', () => {

    expect(config.rules['jsx-a11y/anchor-is-valid']).to.deep.equal(disabledResult);
  });
  
  should('allow JSX in both jsx & js file extensions', () => {

    expect(config.rules['react/jsx-filename-extension']).to.deep.equal([1, { 'extensions': ['.js', '.jsx'] }]);
  });
  
  should('allow React components without propTypes', () => {

    expect(config.rules['react/prop-types']).to.deep.equal(disabledResult);
  });  
});