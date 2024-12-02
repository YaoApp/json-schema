

/**
 * Type definition for the time management options in the Go code.
 * This class represents the time object with methods to replicate Golang functionality.
 */
export declare class time {
  
  /**
   * Sleeps for the specified amount of milliseconds.
   * 
   * @param milliseconds The duration in milliseconds for which execution is paused.
   */
  public static Sleep(milliseconds: number): void;
  
  /**
   * After waiting for the specified amount of milliseconds, invokes a named process.
   * 
   * @param milliseconds The amount of time to wait, in milliseconds.
   * @param processName The name of the process to execute after the delay.
   * @param args Optional arguments to pass to the process.
   */
  public static After(milliseconds: number, processName: string, ...args: any[]): void;
}

