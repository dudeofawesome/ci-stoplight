import * as LifxAPI from 'lifx-http-api';

import { BuildStatus } from '../models';

export class LifxController {
  client;

  public init () {
    this.client = new LifxAPI({
      bearerToken: process.env.LIFX_BEARER_TOKEN
    });
  }

  public start () {
    return;
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
      this.client.setState('all', {
        power: 'on',
        color: '#00FF00',
        brightness: 1,
        duration: 0.5
      }, (err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        }

        resolve(data);
      });
    });
  }

  private actuateStarted (): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.client.setState('all', {
        power: 'on',
        color: 'hue:30 saturation:1.0 brightness:1.0',
        brightness: 1,
        duration: 0.5
      }, (err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        }

        resolve(data);
      });
    });
  }

  private actuateFailed (): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.client.setState('all', {
        power: 'on',
        color: '#FF0000',
        brightness: 1,
        duration: 0.5
      }, (err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        }

        resolve(data);
      });
    });
  }
}
