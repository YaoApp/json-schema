export type LogLevel =
  | "Trace"
  | "Debug"
  | "Info"
  | "Warn"
  | "Error"
  | "Fatal"
  | "Panic";

export declare class log {
  /**
   * Logs a trace message
   * @param message The message format
   * @param args Optional values to format the message
   */
  public static Trace(message: string, ...args: any[]): void;

  /**
   * Logs a debug message
   * @param message The message format
   * @param args Optional values to format the message
   */
  public static Debug(message: string, ...args: any[]): void;

  /**
   * Logs an informational message
   * @param message The message format
   * @param args Optional values to format the message
   */
  public static Info(message: string, ...args: any[]): void;

  /**
   * Logs a warning message
   * @param message The message format
   * @param args Optional values to format the message
   */
  public static Warn(message: string, ...args: any[]): void;

  /**
   * Logs an error message
   * @param message The message format
   * @param args Optional values to format the message
   */
  public static Error(message: string, ...args: any[]): void;

  /**
   * Logs a fatal error message
   * @param message The message format
   * @param args Optional values to format the message
   */
  public static Fatal(message: string, ...args: any[]): void;

  /**
   * Logs a panic message
   * @param message The message format
   * @param args Optional values to format the message
   */
  public static Panic(message: string, ...args: any[]): void;
}
