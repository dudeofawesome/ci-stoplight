import {
  ILifxClient, ILifxOptions, LifxSelector, ILifxState, ILifxBreatheState, ILifxPulseState, ILifxCycleState
} from 'lifx-http-api/dist/lifx-types';

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
  breathe (selector: LifxSelector, settings: ILifxBreatheState, callback?: (err: Error, data: any) => void): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve();
    });
  };

  setStates (settings: ILifxState, callback?: (err: Error, data: any) => void): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve();
    });
  }
  togglePower (selector: LifxSelector, duration: number, callback?: (err: Error, data: any) => void): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve();
    });
  }
  pulse (selector: LifxSelector, settings: ILifxPulseState, callback?: (err: Error, data: any) => void): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve();
    });
  }
  cycle (selector: LifxSelector, settings: ILifxCycleState, callback?: (err: Error, data: any) => void): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve();
    });
  }
  listScenes (callback?: (err: Error, data: any) => void): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve();
    });
  }
  activateScene (selector: LifxSelector, duration: number, callback?: (err: Error, data: any) => void): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve();
    });
  }
  validateColor (color: string, callback?: (err: Error, data: any) => void): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve();
    });
  }
  getVersion (): string {
    return '';
  }
  setVersion (version: string): boolean {
    return true;
  }
  getUrl (): string {
    return '';
  }
  setUrl (url: string): boolean {
    return true;
  }
  getApiUrl (): string {
    return '';
  }
  getBearerToken (): string {
    return '';
  }
  setBearerToken (token: string): boolean {
    return true;
  }
  send (settings: any, callback?: (err: Error, data: any) => void): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve();
    });
  }

}
