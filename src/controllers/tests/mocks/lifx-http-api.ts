import { ILifxClient, ILifxOptions, LifxSelector, ILifxState } from '../../../custom-typings';

export class LifxClientMock implements ILifxClient {
  constructor (private options: ILifxOptions) {}

  listLights (selector: LifxSelector, callback?: (err: Error, data: any) => void): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve();
    });
  };
  setState (selector: LifxSelector, settings: ILifxState, callback?: (err: Error, data: any) => void): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve();
    });
  };
}
