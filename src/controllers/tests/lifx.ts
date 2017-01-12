import { expect } from 'chai';

import { LifxController } from '../';
import { LifxClientMock } from './mocks';

describe('LifX Controller', () => {
  let controller: LifxController;
  let lifxClient: LifxClientMock;

  it(`should initialize the mock client`, (done) => {
    lifxClient = new LifxClientMock({
      bearerToken: process.env.LIFX_BEARER_TOKEN
    });
    done();
  });

  it('should initialize', (done) => {
    new Promise(async () => {
      controller = new LifxController(lifxClient);
      await controller.init();
      return done();
    });
  });

  it(`should actuate`);
});
