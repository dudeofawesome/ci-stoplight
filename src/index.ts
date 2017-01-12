import { TravisHookReceiver } from './hook-receivers';
import { LifxController } from './controllers';

import { BuildStatus } from './models';

export class Main {
  hookReceivers: TravisHookReceiver[] = [];
  controllers: LifxController[] = [];

  constructor () {
    this.hookReceivers.push(new TravisHookReceiver());
    this.controllers.push(new LifxController());
  }

  init () {
    this.hookReceivers.forEach((hookReceiver) => {
      hookReceiver.init();
    });
    this.controllers.forEach((controller) => {
      controller.init();
    });
  }

  start () {
    this.hookReceivers.forEach(async (hookReceiver) => {
      await hookReceiver.start();
      hookReceiver.onStatusChange().subscribe((status) => {
        console.log(BuildStatus[status]);
        this.controllers.forEach((controller) => {
          controller.actuate(status);
        });
      });
    });
    this.controllers.forEach((controller) => {
      controller.start();
    });
  }
}

const main = new Main();
main.init();
main.start();
