import * as LifxAPI from 'lifx-http-api';
import { ILifxClient } from 'lifx-http-api/dist/lifx-types';

import { BuildStatus } from '../models';

export class LifxController {
  constructor (private LifxClient: ILifxClient) {}

  public init (): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      resolve();
    });
  }

  public start (): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      resolve();
    });
  }

  public actuate (state: BuildStatus): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      switch (state) {
        case BuildStatus.FAILED:
          this.actuateFailed();
          break;
        case BuildStatus.STARTED:
          this.actuateStarted();
          break;
        case BuildStatus.PASSED:
          this.actuatePassed();
          break;
      }
    });
  }

  private actuatePassed (): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.LifxClient.breathe('all', {
        color: '#00FF00',
        period: 2.5,
        cycles: 3
      }).then((data) => {
        resolve(data);
      });
    });
  }

  private actuateStarted (): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.LifxClient.breathe('all', {
        color: 'hue:30 saturation:1.0 brightness:1.0',
        period: 2.5,
        cycles: 3
      }).then((data) => {
        resolve(data);
      });
    });
  }

  private actuateFailed (): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.LifxClient.breathe('all', {
        color: '#FF0000',
        period: 2.5,
        cycles: 3
      }).then((data) => {
        resolve(data);
      });
    });
  }
}
