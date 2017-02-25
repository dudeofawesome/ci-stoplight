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

  it(`should actuate`, (done) => {
    done();
  });

  it(`should return 'all' when getting entity IDs`, (done) => {
    controller = new LifxController(lifxClient);
    expect(controller.getEntityIds()).to.equal('all');
    return done();
  });

  it(`should throw and error when getting invalid entity IDs`, (done) => {
    process.env.LIFX_ENTITY_IDS = `not an id`;
    controller = new LifxController(lifxClient);
    let result;
    try {
      result = controller.getEntityIds();
    } catch (err) {
      expect(result).to.not.equal('all');
      done();
    }
    expect(result).to.equal('all');
    return done();
  });

  it(`should return entity IDs when getting entity IDs`, (done) => {
    process.env.LIFX_ENTITY_IDS = `["id1","id2"]`;
    controller = new LifxController(lifxClient);
    expect(controller.getEntityIds()).to.equal(`id1,id2`);
    return done();
  });
});
