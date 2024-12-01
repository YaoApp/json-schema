export declare class FS {
  /**
   * Create a new instance of FS
   * @param root Root path for the application.
   */
  constructor(root: RootPath);

  WriteFile(...args: any[]): void;
  ReadFile(...args: any[]): any;
  ReadDir(path: string, recursive?: boolean): string[];
  Download(path: string): { content: ReadCloser; type: MimeType };
  Zip(source: string, destination: string): void;
  MkdirAll(path: string): void;
  DirName(path: string): string;
  Exists(...args: any[]): boolean;
  IsDir(...args: any[]): boolean;
  ReadFileBuffer(...args: any[]): any;
  ReadFileBase64(...args: any[]): string;
  WriteFileBase64(...args: any[]): void;
  ExtName(name: string): string;
  BaseName(name: string): string;
  Copy(source: string, destination: string): void;
  Move(source: string, destination: string): void;
  Size(path: string): number;
  MoveAppend(source: string, destination: string): void;
  Remove(path: string): void;
  RemoveAll(path: string): void;
  MimeType(name: string): string;
}

export type ReadCloser = number;

/**
 * Root path for the application.
 * "app" the root path for the application;
 * "data" the root path for the data;
 */
export type RootPath = "app" | "data";
