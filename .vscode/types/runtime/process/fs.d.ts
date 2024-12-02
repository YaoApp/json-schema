
export type FileSystemRoot = "app" | "data";

/**
 * Upload Progress Information
 */
export interface UploadProgress {
    // Total size of the upload
    Total: number;
    // Uploaded size so far
    Uploaded: number;
    // Whether the upload is completed
    Completed: boolean;
}

/**
 * Read file content
 * @param process the process name in the format of `fs.${FileSystemRoot}.ReadFile`
 * @param filename file name relative to the root
 * @returns file contents as a string
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.ReadFile`,
    filename: string
): string;

/**
 * Read file content as buffer
 * @param process the process name in the format of `fs.${FileSystemRoot}.ReadFileBuffer`
 * @param filename file name relative to the root
 * @returns file contents as a buffer
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.ReadFileBuffer`,
    filename: string
): Uint8Array;

/**
 * Write file content
 * @param process the process name in the format of `fs.${FileSystemRoot}.WriteFile`
 * @param filename file name relative to the root
 * @param content the content to write to the file
 * @param perm file permissions
 * @returns number of bytes written
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.WriteFile`,
    filename: string,
    content: string,
    perm?: number
): number;

/**
 * Write file content from buffer
 * @param process the process name in the format of `fs.${FileSystemRoot}.WriteFileBuffer`
 * @param filename file name relative to the root
 * @param content the content in buffer format
 * @param perm file permissions
 * @returns number of bytes written
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.WriteFileBuffer`,
    filename: string,
    content: Uint8Array,
    perm?: number
): number;

/**
 * Append file content
 * @param process the process name in the format of `fs.${FileSystemRoot}.AppendFile`
 * @param filename file name relative to the root
 * @param content the content to append to the file
 * @param perm file permissions
 * @returns number of bytes written
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.AppendFile`,
    filename: string,
    content: string,
    perm?: number
): number;

/**
 * Append file content from buffer
 * @param process the process name in the format of `fs.${FileSystemRoot}.AppendFileBuffer`
 * @param filename file name relative to the root
 * @param content the content in buffer format
 * @param perm file permissions
 * @returns number of bytes written
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.AppendFileBuffer`,
    filename: string,
    content: Uint8Array,
    perm?: number
): number;

/**
 * Insert file content
 * @param process the process name in the format of `fs.${FileSystemRoot}.InsertFile`
 * @param filename file name relative to the root
 * @param offset the offset at which to insert the content
 * @param content the content to insert into the file
 * @param perm file permissions
 * @returns number of bytes written
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.InsertFile`,
    filename: string,
    offset: number,
    content: string,
    perm?: number
): number;

/**
 * Insert file content from buffer
 * @param process the process name in the format of `fs.${FileSystemRoot}.InsertFileBuffer`
 * @param filename file name relative to the root
 * @param offset the offset at which to insert the content
 * @param content the content in buffer format
 * @param perm file permissions
 * @returns number of bytes written
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.InsertFileBuffer`,
    filename: string,
    offset: number,
    content: Uint8Array,
    perm?: number
): number;

/**
 * Read directory content
 * @param process the process name in the format of `fs.${FileSystemRoot}.ReadDir`
 * @param dir directory name relative to the root
 * @param recursive whether to read directories recursively
 * @returns list of directory entries
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.ReadDir`,
    dir: string,
    recursive?: boolean
): string[];

/**
 * Find all files matching the pattern
 * @param process the process name in the format of `fs.${FileSystemRoot}.Glob`
 * @param pattern glob pattern to match files
 * @returns list of matched files
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.Glob`,
    pattern: string
): string[];

/**
 * Create a new directory
 * @param process the process name in the format of `fs.${FileSystemRoot}.Mkdir`
 * @param dir directory name relative to the root
 * @param perm directory permissions
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.Mkdir`,
    dir: string,
    perm?: number
): void;

/**
 * Create a new directory with all necessary parents
 * @param process the process name in the format of `fs.${FileSystemRoot}.MkdirAll`
 * @param dir directory name relative to the root
 * @param perm directory permissions
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.MkdirAll`,
    dir: string,
    perm?: number
): void;

/**
 * Create a temporary directory
 * @param process the process name in the format of `fs.${FileSystemRoot}.MkdirTemp`
 * @param dir directory in which to create a temporary directory
 * @param pattern pattern to use for the temporary directory name
 * @returns path of the created temporary directory
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.MkdirTemp`,
    dir?: string,
    pattern?: string
): string;

/**
 * Remove a file or empty directory
 * @param process the process name in the format of `fs.${FileSystemRoot}.Remove`
 * @param name file or directory name relative to the root
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.Remove`,
    name: string
): void;

/**
 * Remove a file or directory and its contents
 * @param process the process name in the format of `fs.${FileSystemRoot}.RemoveAll`
 * @param name file or directory name relative to the root
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.RemoveAll`,
    name: string
): void;

/**
 * Check if a file or directory exists
 * @param process the process name in the format of `fs.${FileSystemRoot}.Exists`
 * @param name file or directory name relative to the root
 * @returns true if the file or directory exists, false otherwise
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.Exists`,
    name: string
): boolean;

/**
 * Check if a path is a directory
 * @param process the process name in the format of `fs.${FileSystemRoot}.IsDir`
 * @param name path name relative to the root
 * @returns true if the path is a directory, false otherwise
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.IsDir`,
    name: string
): boolean;

/**
 * Check if a path is a file
 * @param process the process name in the format of `fs.${FileSystemRoot}.IsFile`
 * @param name path name relative to the root
 * @returns true if the path is a file, false otherwise
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.IsFile`,
    name: string
): boolean;

/**
 * Check if a path is a symbolic link
 * @param process the process name in the format of `fs.${FileSystemRoot}.IsLink`
 * @param name path name relative to the root
 * @returns true if the path is a symbolic link, false otherwise
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.IsLink`,
    name: string
): boolean;

/**
 * Change the mode of a file
 * @param process the process name in the format of `fs.${FileSystemRoot}.Chmod`
 * @param name file name relative to the root
 * @param perm new file permissions
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.Chmod`,
    name: string,
    perm: number
): void;

/**
 * Get the size of a file
 * @param process the process name in the format of `fs.${FileSystemRoot}.Size`
 * @param name file name relative to the root
 * @returns size of the file in bytes
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.Size`,
    name: string
): number;

/**
 * Get the mode of a file
 * @param process the process name in the format of `fs.${FileSystemRoot}.Mode`
 * @param name file name relative to the root
 * @returns mode of the file
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.Mode`,
    name: string
): number;

/**
 * Get the modification time of a file
 * @param process the process name in the format of `fs.${FileSystemRoot}.ModTime`
 * @param name file name relative to the root
 * @returns modification time as Unix timestamp
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.ModTime`,
    name: string
): number;

/**
 * Get the base name of a path
 * @param process the process name in the format of `fs.${FileSystemRoot}.BaseName`
 * @param name path name
 * @returns base name of the path
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.BaseName`,
    name: string
): string;

/**
 * Get the directory name of a path
 * @param process the process name in the format of `fs.${FileSystemRoot}.DirName`
 * @param name path name
 * @returns directory name of the path
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.DirName`,
    name: string
): string;

/**
 * Get the extension name of a file
 * @param process the process name in the format of `fs.${FileSystemRoot}.ExtName`
 * @param name file name
 * @returns extension name of the file
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.ExtName`,
    name: string
): string;

/**
 * Get the MIME type of a file
 * @param process the process name in the format of `fs.${FileSystemRoot}.MimeType`
 * @param name file name relative to the root
 * @returns MIME type of the file
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.MimeType`,
    name: string
): string;

/**
 * Move a file
 * @param process the process name in the format of `fs.${FileSystemRoot}.Move`
 * @param src source file name relative to the root
 * @param dst destination file name relative to the root
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.Move`,
    src: string,
    dst: string
): void;

/**
 * Move a file and append the content
 * @param process the process name in the format of `fs.${FileSystemRoot}.MoveAppend`
 * @param src source file name relative to the root
 * @param dst destination file name relative to the root
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.MoveAppend`,
    src: string,
    dst: string
): void;

/**
 * Move a file and insert the content
 * @param process the process name in the format of `fs.${FileSystemRoot}.MoveInsert`
 * @param src source file name relative to the root
 * @param dst destination file name relative to the root
 * @param offset offset at which to insert the content
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.MoveInsert`,
    src: string,
    dst: string,
    offset: number
): void;

/**
 * Zip a directory
 * @param process the process name in the format of `fs.${FileSystemRoot}.Zip`
 * @param src source directory name relative to the root
 * @param dst destination zip file name relative to the root
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.Zip`,
    src: string,
    dst: string
): void;

/**
 * Unzip a file and return the file list
 * @param process the process name in the format of `fs.${FileSystemRoot}.Unzip`
 * @param src source zip file name relative to the root
 * @param dst destination directory name relative to the root
 * @returns list of extracted files
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.Unzip`,
    src: string,
    dst: string
): string[];

/**
 * Copy a file
 * @param process the process name in the format of `fs.${FileSystemRoot}.Copy`
 * @param src source file name relative to the root
 * @param dst destination file name relative to the root
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.Copy`,
    src: string,
    dst: string
): void;

/**
 * Upload a file
 * @param process the process name in the format of `fs.${FileSystemRoot}.Upload`
 * @param uploadFile the file to be uploaded
 * @param props optional properties for validation
 * @returns path to the uploaded file or upload progress information
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.Upload`,
    uploadFile: any, // Type for uploadFile and props need to be defined based on additional context
    props?: any // Placeholder for additional arguments
): string | { path: string; uid: string; progress: UploadProgress };

/**
 * Download a file
 * @param process the process name in the format of `fs.${FileSystemRoot}.Download`
 * @param filename file name relative to the root
 * @returns the file content and its type
 */
export declare function Process(
    process: `fs.${FileSystemRoot}.Download`,
    filename: string
): { content: any; type: string };
