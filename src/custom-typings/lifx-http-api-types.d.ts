export type LifxSelector = 'all' | string;
export interface ILifxState {
  power?: 'on' | 'off';
  color?: string;
  brightness?: number;
  duration?: number;
  infrared?: number;
}
export interface ILifxBreatheState {
  /** The color to use for the breathe effect. */
  color?: string;
  /** The color to start the effect from. If this parameter is omitted then the color the bulb is currently set to is used instead. */
  from_color?: string;
  /** The time in seconds for one cyles of the effect. */
  period?: number;
  /** The number of times to repeat the effect. */
  cycles?: number;
  /** If false set the light back to its previous value when effect ends, if true leave the last effect color. */
  persist?: boolean;
  /** If true, turn the bulb on if it is not already on. */
  power_on?: boolean;
  /** Defines where in a period the target color is at its maximum. Minimum `0.0`, maximum `1.0`. */
  peak?: number;
}

export interface ILifxClient {
  // constructor (options: ILifxOptions);

  listLights (selector: LifxSelector, callback?: (err: Error, data: any) => void): Promise<any>;
  setState (selector: LifxSelector, settings: ILifxState, callback?: (err: Error, data: any) => void): Promise<any>;
  breathe (selector: LifxSelector, settings?: ILifxBreatheState, callback?: (err: Error, data: any) => void): Promise<any>;
}

export interface ILifxOptions {
  bearerToken: string;
}
