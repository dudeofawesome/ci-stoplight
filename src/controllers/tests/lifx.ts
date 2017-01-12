import { expect } from 'chai';

import { LifxController } from '../';

describe('LifX Controller', () => {
  it('should initialize', (done) => {
    new Promise(async () => {
      const controller = new LifxController();
      await controller.init();
      return done();
    });
  });
});
