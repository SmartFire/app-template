import angular from 'angular';
import 'angular-mocks';

import { expect } from 'chai';

import appModule from './';

describe('app', function() {
  beforeEach(angular.mock.module(appModule.module));

  it('should work', function() {
    expect(true).to.be.true;
  });
});
