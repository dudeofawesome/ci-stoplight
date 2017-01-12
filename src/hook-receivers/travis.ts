import * as Express from 'express';
import { Application } from 'express';
import * as BodyParser from 'body-parser';
import { Observable, Subscriber } from 'rxjs';
import { ITravisWebHook, StatusMessage } from '../custom-typings';

import { BuildStatus } from '../models';

export class TravisHookReceiver {
  private app: Application;
  private statusChange: Observable<BuildStatus>;
  private subscribers: Subscriber<BuildStatus>[] = [];

  public init (): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.app = Express();

      this.app.use(BodyParser.urlencoded({ extended: false }));
      this.app.use(BodyParser.json());

      this.app.get(`/`, (req, res) => {
        res.json({uptime: process.uptime()});
      });

      this.app.post(`/travis-ci`, (req, res) => {
        const payload: ITravisWebHook = JSON.parse(req.body.payload);
        console.log(payload);
        console.log(StatusMessage.BROKEN);
        switch (payload.status_message) {
          case StatusMessage.BROKEN: case StatusMessage.FAILED: case StatusMessage.STILL_FAILING:
            this.emit(BuildStatus.FAILED);
            break;
          case StatusMessage.PENDING:
            this.emit(BuildStatus.STARTED);
            break;
          case StatusMessage.PASSED:
            this.emit(BuildStatus.PASSED);
            break;
        }
        res.json(payload);
      });

      this.statusChange = new Observable<BuildStatus>((subscriber: Subscriber<BuildStatus>) => {
        this.subscribers.push(subscriber);
        subscriber.add(() => {
          this.subscribers.splice(this.subscribers.indexOf(subscriber), 1);
        });
      });

      resolve();
    });
  }

  public start (): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.app.listen(process.env.PORT, () => {

        setTimeout(() => {
          this.emit(BuildStatus.FAILED);
        }, 1000);

        resolve();
      });
    });
  }

  private emit (status: BuildStatus) {
    this.subscribers.forEach((subscriber) => {
      subscriber.next(status);
    });
  }

  public onStatusChange (): Observable<BuildStatus> {
    return this.statusChange;
  }
}
