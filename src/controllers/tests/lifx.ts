import { expect } from 'chai';

import { LifxController } from '../';

describe('LifX Controller', () => {
  it('should initialize', async (done) => {
    const controller = new LifxController();
    await controller.init();
    return done();
  });
});
