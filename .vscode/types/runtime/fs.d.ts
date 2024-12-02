

/**
 * Represents a filesystem for operations.
 */
export type FileSystemName = "system" | string;

/**
 * FileSystem interface to define file operations.
 * This is based on the functions available in the Golang `FileSystem` interface.
 */
export interface FileSystem {
  ReadFile(file: string): [string, Error];
  WriteFile(file: string, data: string, perm?: number): [number, Error];
  AppendFile(file: string, data: string, perm?: number): [number, Error];
  InsertFile(file: string, offset: number, data: string, perm?: number): [number, Error];
  ReadDir(dir: string, recursive?: boolean): [string[], Error];
  Mkdir(dir: string, perm?: number): Error | undefined;
  MkdirAll(dir: string, perm?: number): Error | undefined;
  MkdirTemp(dir?: string, pattern?: string): [string, Error];
  Remove(name: string): Error | undefined;
  RemoveAll(name: string): Error | undefined;
  Exists(name: string): [boolean, Error];
  Size(name: string): [number, Error];
  Mode(name: string): [number, Error];
  ModTime(name: string): [number, Error];
  Chmod(name: string, mode: number): Error | undefined;
  IsDir(name: string): boolean;
  IsFile(name: string): boolean;
  IsLink(name: string): boolean;
  Move(oldpath: string, newpath: string): Error | undefined;
  Copy(src: string, dest: string): Error | undefined;
  MimeType(name: string): [string, Error];
  Zip(name: string, target: string): Error | undefined;
  Unzip(name: string, target: string): [string[], Error];
  BaseName(name: string): string;
  DirName(name: string): string;
  ExtName(name: string): string;
}

/**
 * File operation error.
 */
export type Error = string;

/**
 * FS class providing file system operations.
 */
export declare class FS {
  /**
   * Create a new instance of FS
   * @param name Name of the filesystem, e.g., 'system'.
   */
  constructor(name?: FileSystemName);

  /**
   * Check if the path exists.
   * @param path The path to check.
   * @returns true if exists; false otherwise.
   */
  Exists(path: string): boolean;

  /**
   * Check if the path is a directory.
   * @param path The path to check.
   * @returns true if it's a directory; false otherwise.
   */
  IsDir(path: string): boolean;

  /**
   * Check if the path is a file.
   * @param path The path to check.
   * @returns true if it's a file; false otherwise.
   */
  IsFile(path: string): boolean;

  /**
   * Check if the path is a symbolic link.
   * @param path The path to check.
   * @returns true if it's a link; false otherwise.
   */
  IsLink(path: string): boolean;

  /**
   * Read a file and return its content as a string.
   * @param file Path of the file to read.
   * @returns Content of the file.
   */
  ReadFile(file: string): string;

  /**
   * Write content to a file.
   * @param file Path of the file to write.
   * @param data Content to write.
   * @param perm (Optional) File permission.
   * @returns Number of bytes written.
   */
  WriteFile(file: string, data: string, perm?: number): number;

  /**
   * Append content to a file.
   * @param file Path of the file to append.
   * @param data Content to append.
   * @param perm (Optional) File permission.
   * @returns Number of bytes appended.
   */
  AppendFile(file: string, data: string, perm?: number): number;

  /**
   * Insert content into a file at a specified offset.
   * @param file Path of the file to insert.
   * @param offset Position to insert the data.
   * @param data Content to insert.
   * @param perm (Optional) File permission.
   * @returns Number of bytes inserted.
   */
  InsertFile(file: string, offset: number, data: string, perm?: number): number;

  /**
   * Read a directory and return its contents.
   * @param dir Directory path to read.
   * @param recursive (Optional) If true, read directories recursively.
   * @returns List of directory entries.
   */
  ReadDir(dir: string, recursive?: boolean): string[];

  /**
   * Create a directory.
   * @param dir Path of the directory to create.
   * @param perm (Optional) Directory permission.
   */
  Mkdir(dir: string, perm?: number): void;

  /**
   * Create a directory with all necessary parent directories.
   * @param dir Path of the directory to create.
   * @param perm (Optional) Directory permission.
   */
  MkdirAll(dir: string, perm?: number): void;

  /**
   * Create a temporary directory.
   * @param dir (Optional) Path where to create the directory.
   * @param pattern (Optional) Pattern for temporary directory name.
   * @returns Path of the created temporary directory.
   */
  MkdirTemp(dir?: string, pattern?: string): string;

  /**
   * Remove a file or directory.
   * @param name Path of the file/directory to remove.
   */
  Remove(name: string): void;

  /**
   * Remove a file/directory and all its children.
   * @param name Path of the file/directory to remove.
   */
  RemoveAll(name: string): void;

  /**
   * Get the MIME type of a file.
   * @param name Path of the file.
   * @returns MIME type of the file.
   */
  MimeType(name: string): string;

  /**
   * Change the permissions of a file/directory.
   * @param name Path of the file/directory.
   * @param mode The mode to set.
   */
  Chmod(name: string, mode: number): void;

  /**
   * Move a file or directory.
   * @param src Source path of the file/directory.
   * @param dst Destination path of the file/directory.
   */
  Move(src: string, dst: string): void;

  /**
   * Copy a file or directory.
   * @param src Source path of the file/directory.
   * @param dst Destination path of the file/directory.
   */
  Copy(src: string, dst: string): void;

  /**
   * Create a ZIP archive of a directory.
   * @param name Path of the directory to ZIP.
   * @param target Path of the ZIP archive to create.
   */
  Zip(name: string, target: string): void;

  /**
   * Extract a ZIP archive into a specified directory.
   * @param name Path of the ZIP archive to extract.
   * @param target Directory where to extract the files.
   * @returns List of extracted files.
   */
  Unzip(name: string, target: string): string[];

  /**
   * Get the size of a file.
   * @param name Path of the file.
   * @returns Size of the file in bytes.
   */
  Size(name: string): number;

  /**
   * Get the mode (permissions) of a file.
   * @param name Path of the file.
   * @returns Mode of the file.
   */
  Mode(name: string): number;

  /**
   * Get the modification time of a file.
   * @param name Path of the file.
   * @returns Modification time of the file as a UNIX timestamp.
   */
  ModTime(name: string): number;

  /**
   * Convert a path into an absolute path.
   * @param path The path to convert.
   * @returns Absolute path.
   */
  Abs(path: string): string;

  /**
   * Perform a glob match.
   * @param pattern The pattern to match.
   * @returns List of matching file paths.
   */
  Glob(pattern: string): string[];

  /**
   * Get the base name of a path.
   * @param name The path.
   * @returns Base name.
   */
  BaseName(name: string): string;

  /**
   * Get the directory name of a path.
   * @param name The path.
   * @returns Directory name.
   */
  DirName(name: string): string;

  /**
   * Get the extension of a file name.
   * @param name The file name.
   * @returns Extension name.
   */
  ExtName(name: string): string;
}

