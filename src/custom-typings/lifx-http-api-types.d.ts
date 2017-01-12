export type LifxSelector = 'all' | string;
export interface ILifxState {
  power?: 'on' | 'off';
  color?: string;
  brightness?: number;
  duration?: number;
  infrared?: number;
}

export interface ILifxClient {
  // constructor (options: ILifxOptions);

  listLights (selector: LifxSelector, callback?: (err: Error, data: any) => void): Promise<any>;
  setState (selector: LifxSelector, settings: ILifxState, callback?: (err: Error, data: any) => void): Promise<any>;
}

export interface ILifxOptions {
  bearerToken: string;
}
