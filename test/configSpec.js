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

  should('allow class methods without \'this\' reference', () => {

    expect(config.rules['class-methods-use-this']).to.deep.equal(disabledResult);
  });

  should('allow objects without trailing comma (on last property)', () => {
    
    expect(config.rules['comma-dangle']).to.deep.equal([2, 'never']);
  });

  should('allow files without newline (EOL) as last line', () => {
    
    expect(config.rules['eol-last']).to.deep.equal(disabledResult);
  });

  should('allow dev-only dependencies for specs, gulpfile and build config', () => {
    
    const expectedResult = [2, {
      'devDependencies': ['**/*Spec.js', 'gulpfile.babel.js', 'config/build.config.js']
    }];
    
    expect(config.rules['import/no-extraneous-dependencies']).to.deep.equal(expectedResult);
  });

  should('allow members in import statements to be aligned (with first item)', () => {
    
    expect(config.rules['indent'][2].ImportDeclaration).to.deep.equal('first');
  });

  should('allow arguments in call expressions to be aligned (with first item)', () => {
    
    expect(config.rules['indent'][2].CallExpression).to.deep.equal({ 'arguments': 'first' });
  });

  should('allow parameters in function declarations to be aligned (with first item)', () => {
    
    expect(config.rules['indent'][2].FunctionDeclaration).to.deep.equal({ 'parameters': 'first' });
  });

  should('allow multi-line chain calls to be aligned (with first dot)', () => {
    
    expect(config.rules['indent'][2].MemberExpression).to.deep.equal('off');
  });

  should('allow case clauses in switch statements to be indented', () => {
    
    expect(config.rules['indent'][2].SwitchCase).to.deep.equal(1);
  });

  should('allow longer code lines (disable max length)', () => {
    
    expect(config.rules['max-len']).to.deep.equal(disabledResult);
  });

  should('allow new construction of special (lowercase) \'target\' object', () => {
    
    expect(config.rules['new-cap'][1].newIsCapExceptions).to.deep.equal(['target']);
  });

  should('allow caps case names for decorators', () => {
    
    expect(config.rules['new-cap'][1].capIsNewExceptions).to.deep.equal(['Authenticate', 'Controller', 'Router', 'Route', 'Get', 'Head', 'Post', 'Put', 'Delete', 'Options']);
  });

  should('allow console logging', () => {
    
    expect(config.rules['no-console']).to.deep.equal(disabledResult);
  });

  should('allow reassigning of parameter object\'s properties', () => {
    
    expect(config.rules['no-param-reassign']).to.deep.equal([2, { 'props': false }]);
  });

  should('allow trailing underscores (for __rewire__ and friends)', () => {
    
    expect(config.rules['no-underscore-dangle']).to.deep.equal(disabledResult);
  });

  should('allow unused variables', () => {
    
    expect(config.rules['no-unused-vars']).to.deep.equal(disabledResult);
  });

  should('allow (inconsistent) padded blocks', () => {
    
    expect(config.rules['padded-blocks']).to.deep.equal(disabledResult);
  });

  should('allow array accessors', () => {
    
    expect(config.rules['prefer-destructuring']).to.deep.equal(disabledResult);
  });

  should('only allow single quotes', () => {
    
    expect(config.rules['quotes']).to.deep.equal([2, 'single']);
  });
});