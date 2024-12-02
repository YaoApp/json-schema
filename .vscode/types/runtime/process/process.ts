// This file is generated by AI
// Do not modify this file manually


//============ model.d.ts ============

// TypeScript type definitions for the Golang code

export type QueryParam = {
  model?: string; // optional, the model to query
  table?: string; // optional, the table to query
  alias?: string; // optional, table alias
  export?: string; // optional, export prefix
  select?: (string | Raw)[]; // optional, select columns, can be strings or Raw
  wheres?: QueryWhere[]; // optional, array of where conditions
  orders?: QueryOrder[]; // optional, array of ordering conditions
  limit?: number; // optional, limit records
  page?: number; // optional, pagination page number
  pageSize?: number; // optional, number of records per page
  withs?: Record<string, With>; // optional, mapping of relations
}

export type Raw = any; // Placeholder for actually defining Raw type

export type QueryWhere = {
  rel?: string; // optional, relation name
  column?: string | Raw; // column to apply where on
  value?: any; // the value to compare with
  method?: string; // method for where clause such as 'where', 'orwhere'
  op?: string; // operator such as 'eq', 'gt'
  wheres?: QueryWhere[]; // nested wheres for grouped conditions
}

export type QueryOrder = {
  rel?: string; // optional, relation name
  column: string; // column to order by
  option?: string; // ordering option 'asc', 'desc'
}

export type With = {
  name: string; // the relation name
  query?: QueryParam; // query parameters for the relation
}

/**
 * Find a record by id
 * @param process models.**WidgetID**.Find
 * @param id string | number record id
 * @param query query parameters
 */
export declare function Process(
  process: `models.${string}.Find`,
  id: string | number,
  query: QueryParam
): Record<string, any>;

/**
 * Get records based on query parameters
 * @param process models.**WidgetID**.Get
 * @param query query parameters
 */
export declare function Process(
  process: `models.${string}.Get`,
  query: QueryParam
): Record<string, any>[];

/**
 * Paginate records based on query parameters
 * @param process models.**WidgetID**.Paginate
 * @param query query parameters
 * @param page number page number
 * @param pageSize number size of page
 */
export declare function Process(
  process: `models.${string}.Paginate`,
  query: QueryParam,
  page: number,
  pageSize: number
): Record<string, any>;

/**
 * Create a new record
 * @param process models.**WidgetID**.Create
 * @param row new record data
 */
export declare function Process(
  process: `models.${string}.Create`,
  row: Record<string, any>
): number;

/**
 * Update a record by id
 * @param process models.**WidgetID**.Update
 * @param id string | number record id
 * @param row data to update
 */
export declare function Process(
  process: `models.${string}.Update`,
  id: string | number,
  row: Record<string, any>
): void;

/**
 * Save a record (create or update)
 * @param process models.**WidgetID**.Save
 * @param row record data
 */
export declare function Process(
  process: `models.${string}.Save`,
  row: Record<string, any>
): number;

/**
 * Delete a record by id
 * @param process models.**WidgetID**.Delete
 * @param id string | number record id
 */
export declare function Process(
  process: `models.${string}.Delete`,
  id: string | number
): void;

/**
 * Destroy a record by id
 * @param process models.**WidgetID**.Destroy
 * @param id string | number record id
 */
export declare function Process(
  process: `models.${string}.Destroy`,
  id: string | number
): void;

/**
 * Insert multiple records
 * @param process models.**WidgetID**.Insert
 * @param columns column names
 * @param rows data rows to insert
 */
export declare function Process(
  process: `models.${string}.Insert`,
  columns: string[],
  rows: Array<Array<any>>
): void;

/**
 * Update records based on conditions
 * @param process models.**WidgetID**.UpdateWhere
 * @param query query parameters
 * @param row data to update
 */
export declare function Process(
  process: `models.${string}.UpdateWhere`,
  query: QueryParam,
  row: Record<string, any>
): number;

/**
 * Delete records based on conditions
 * @param process models.**WidgetID**.DeleteWhere
 * @param query query parameters
 */
export declare function Process(
  process: `models.${string}.DeleteWhere`,
  query: QueryParam
): number;

/**
 * Destroy records based on conditions
 * @param process models.**WidgetID**.DestroyWhere
 * @param query query parameters
 */
export declare function Process(
  process: `models.${string}.DestroyWhere`,
  query: QueryParam
): number;

/**
 * Save multiple records
 * @param process models.**WidgetID**.EachSave
 * @param records records data
 * @param eachRow additional data applied to each row
 */
export declare function Process(
  process: `models.${string}.EachSave`,
  records: Array<Record<string, any>>,
  eachRow?: Record<string, any>
): number[];

/**
 * Delete specified records and save new records
 * @param process models.**WidgetID**.EachSaveAfterDelete
 * @param ids record ids to delete
 * @param records new records data
 * @param eachRow additional data applied to each new row
 */
export declare function Process(
  process: `models.${string}.EachSaveAfterDelete`,
  ids: number[],
  records: Array<Record<string, any>>,
  eachRow?: Record<string, any>
): number[];

/**
 * Get select options
 * @param process models.**WidgetID**.SelectOption
 * @param keyword search keyword
 * @param name property to use as name, default 'name'
 * @param value property to use as value, default 'id'
 * @param limit max number of results, default 20
 */
export declare function Process(
  process: `models.${string}.SelectOption`,
  keyword?: string,
  name?: string,
  value?: string,
  limit?: number,
): Record<'name' | 'id', any>[];

/**
 * Migrate the model
 * @param process models.**WidgetID**.Migrate
 * @param force whether to force the migration
 */
export declare function Process(
  process: `models.${string}.Migrate`,
  force?: boolean,
): void;

/**
 * Load the model
 * @param process models.**WidgetID**.Load
 * @param file the file path
 * @param source optional source data
 */
export declare function Process(
  process: `models.${string}.Load`,
  file: string,
  source?: string
): void;

/**
 * Reload the model
 * @param process models.**WidgetID**.Reload
 */
export declare function Process(
  process: `models.${string}.Reload`,
): void;

/**
 * Read the model DSL
 * @param process models.**WidgetID**.Read
 */
export declare function Process(
  process: `models.${string}.Read`
): any;

/**
 * Check if the model is loaded
 * @param process models.**WidgetID**.Exists
 */
export declare function Process(
  process: `models.${string}.Exists`
): boolean;


//============ fs.d.ts ============

export type FileSystemName = "app" | "data" | string;

export interface UploadFile {
  Hash(): string;                 // Returns a unique identifier based on the file hash
  IsChunk(): boolean;             // Determines if the file is part of a larger chunked upload
  Name: string;                   // Original file name
  ChunkFileName(): string;        // Name of the chunk file
  TempFile: string;               // Temporary file path
  UID: string;                    // Unique Identifier for the file
  TotalSize(): number;            // Total size of the file for chunked uploads
  Sync: boolean;                  // Flag to determine if the upload is synchronous
}

export interface UploadProgress {
  Total: number;                  // Total size of the upload
  Uploaded: number;               // Amount uploaded so far
  Completed: boolean;             // Upload completion status
}

/**
 * Read file content
 * @param process fs.${FileSystemName}.ReadFile
 * @param filename string file name relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.ReadFile`,
  filename: string
): string;

/**
 * Read file content as buffer
 * @param process fs.${FileSystemName}.ReadFileBuffer
 * @param filename string file name relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.ReadFileBuffer`,
  filename: string
): Uint8Array;

/**
 * Write file content
 * @param process fs.${FileSystemName}.WriteFile
 * @param filename string file name relative to the root
 * @param content string content to write
 * @param perm number file permissions
 */
export declare function Process(
  process: `fs.${FileSystemName}.WriteFile`,
  filename: string,
  content: string,
  perm?: number
): number;

/**
 * Write file content from buffer
 * @param process fs.${FileSystemName}.WriteFileBuffer
 * @param filename string file name relative to the root
 * @param content Uint8Array content to write
 * @param perm number file permissions
 */
export declare function Process(
  process: `fs.${FileSystemName}.WriteFileBuffer`,
  filename: string,
  content: Uint8Array,
  perm?: number
): number;

/**
 * Append content to file
 * @param process fs.${FileSystemName}.AppendFile
 * @param filename string file name relative to the root
 * @param content string content to append
 * @param perm number file permissions
 */
export declare function Process(
  process: `fs.${FileSystemName}.AppendFile`,
  filename: string,
  content: string,
  perm?: number
): number;

/**
 * Append content to file from buffer
 * @param process fs.${FileSystemName}.AppendFileBuffer
 * @param filename string file name relative to the root
 * @param content Uint8Array content to append
 * @param perm number file permissions
 */
export declare function Process(
  process: `fs.${FileSystemName}.AppendFileBuffer`,
  filename: string,
  content: Uint8Array,
  perm?: number
): number;

/**
 * Insert content into file
 * @param process fs.${FileSystemName}.InsertFile
 * @param filename string file name relative to the root
 * @param offset number position to start the insert
 * @param content string content to insert
 * @param perm number file permissions
 */
export declare function Process(
  process: `fs.${FileSystemName}.InsertFile`,
  filename: string,
  offset: number,
  content: string,
  perm?: number
): number;

/**
 * Insert content into file from buffer
 * @param process fs.${FileSystemName}.InsertFileBuffer
 * @param filename string file name relative to the root
 * @param offset number position to start the insert
 * @param content Uint8Array content to insert
 * @param perm number file permissions
 */
export declare function Process(
  process: `fs.${FileSystemName}.InsertFileBuffer`,
  filename: string,
  offset: number,
  content: Uint8Array,
  perm?: number
): number;

/**
 * Read directory contents
 * @param process fs.${FileSystemName}.ReadDir
 * @param dir string directory path relative to the root
 * @param recursive boolean list directories recursively
 */
export declare function Process(
  process: `fs.${FileSystemName}.ReadDir`,
  dir: string,
  recursive?: boolean
): string[];

/**
 * Perform a glob search
 * @param process fs.${FileSystemName}.Glob
 * @param pattern string glob pattern
 */
export declare function Process(
  process: `fs.${FileSystemName}.Glob`,
  pattern: string
): string[];

/**
 * Create a directory
 * @param process fs.${FileSystemName}.Mkdir
 * @param dir string directory path relative to the root
 * @param perm number directory permissions
 */
export declare function Process(
  process: `fs.${FileSystemName}.Mkdir`,
  dir: string,
  perm?: number
): void;

/**
 * Create a directory and all necessary parents
 * @param process fs.${FileSystemName}.MkdirAll
 * @param dir string directory path relative to the root
 * @param perm number directory permissions
 */
export declare function Process(
  process: `fs.${FileSystemName}.MkdirAll`,
  dir: string,
  perm?: number
): void;

/**
 * Create a temporary directory
 * @param process fs.${FileSystemName}.MkdirTemp
 * @param dir string base directory
 * @param pattern string pattern for the directory name
 */
export declare function Process(
  process: `fs.${FileSystemName}.MkdirTemp`,
  dir?: string,
  pattern?: string
): string;

/**
 * Remove a file or directory
 * @param process fs.${FileSystemName}.Remove
 * @param name string path relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.Remove`,
  name: string
): void;

/**
 * Remove a directory and its contents
 * @param process fs.${FileSystemName}.RemoveAll
 * @param name string path relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.RemoveAll`,
  name: string
): void;

/**
 * Check existence of a file or directory
 * @param process fs.${FileSystemName}.Exists
 * @param name string path relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.Exists`,
  name: string
): boolean;

/**
 * Check if path is a directory
 * @param process fs.${FileSystemName}.IsDir
 * @param name string path relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.IsDir`,
  name: string
): boolean;

/**
 * Check if path is a file
 * @param process fs.${FileSystemName}.IsFile
 * @param name string path relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.IsFile`,
  name: string
): boolean;

/**
 * Check if path is a symbolic link
 * @param process fs.${FileSystemName}.IsLink
 * @param name string path relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.IsLink`,
  name: string
): boolean;

/**
 * Change file mode
 * @param process fs.${FileSystemName}.Chmod
 * @param name string path relative to the root
 * @param perm number file mode
 */
export declare function Process(
  process: `fs.${FileSystemName}.Chmod`,
  name: string,
  perm: number
): void;

/**
 * Get file size
 * @param process fs.${FileSystemName}.Size
 * @param name string path relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.Size`,
  name: string
): number;

/**
 * Get file mode
 * @param process fs.${FileSystemName}.Mode
 * @param name string path relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.Mode`,
  name: string
): number;

/**
 * Get file modification time
 * @param process fs.${FileSystemName}.ModTime
 * @param name string path relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.ModTime`,
  name: string
): number;

/**
 * Get base name of a file path
 * @param process fs.${FileSystemName}.BaseName
 * @param name string file path
 */
export declare function Process(
  process: `fs.${FileSystemName}.BaseName`,
  name: string
): string;

/**
 * Get directory name of a file path
 * @param process fs.${FileSystemName}.DirName
 * @param name string file path
 */
export declare function Process(
  process: `fs.${FileSystemName}.DirName`,
  name: string
): string;

/**
 * Get extension of a file
 * @param process fs.${FileSystemName}.ExtName
 * @param name string file path
 */
export declare function Process(
  process: `fs.${FileSystemName}.ExtName`,
  name: string
): string;

/**
 * Get the MIME type of a file
 * @param process fs.${FileSystemName}.MimeType
 * @param name string path relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.MimeType`,
  name: string
): string;

/**
 * Move a file
 * @param process fs.${FileSystemName}.Move
 * @param src string source path relative to the root
 * @param dst string destination path relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.Move`,
  src: string,
  dst: string
): void;

/**
 * Append and move a file
 * @param process fs.${FileSystemName}.MoveAppend
 * @param src string source path relative to the root
 * @param dst string destination path relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.MoveAppend`,
  src: string,
  dst: string
): void;

/**
 * Insert and move a file
 * @param process fs.${FileSystemName}.MoveInsert
 * @param src string source path relative to the root
 * @param dst string destination path relative to the root
 * @param offset number position to insert data
 */
export declare function Process(
  process: `fs.${FileSystemName}.MoveInsert`,
  src: string,
  dst: string,
  offset: number
): void;

/**
 * Zip directories
 * @param process fs.${FileSystemName}.Zip
 * @param src string source path relative to the root
 * @param dst string destination path relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.Zip`,
  src: string,
  dst: string
): void;

/**
 * Unzip a file
 * @param process fs.${FileSystemName}.Unzip
 * @param src string source path relative to the root
 * @param dst string destination path relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.Unzip`,
  src: string,
  dst: string
): string[];

/**
 * Copy a file
 * @param process fs.${FileSystemName}.Copy
 * @param src string source path relative to the root
 * @param dst string destination path relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.Copy`,
  src: string,
  dst: string
): void;

/**
 * Handle file uploads
 * @param process fs.${FileSystemName}.Upload
 * @param file UploadFile upload file information
 * @param props any properties for validation (e.g., maxFilesize, accept)
 */
export declare function Process(
  process: `fs.${FileSystemName}.Upload`,
  file: UploadFile,
  props?: { [key: string]: any }
): string | { path: string; uid: string; progress: UploadProgress };

/**
 * Handle file downloads
 * @param process fs.${FileSystemName}.Download
 * @param file string file to download relative to the root
 */
export declare function Process(
  process: `fs.${FileSystemName}.Download`,
  file: string
): { content: any; type: string };


//============ http.d.ts ============


/**
 * Represents an HTTP response.
 */
export interface HttpResponse {
  // The status code of the response.
  status: number;
  
  // The data returned by the response.
  data: any;

  // The headers returned by the response.
  headers: Record<string, string | string[]>;

  // The code of the response.
  code: number;

  // The message included in the response.
  message: string;
}

/**
 * Represents an HTTP file to be uploaded.
 */
export interface HttpFile {
  // The name of the file.
  name: string;

  // Optional path to the file.
  path?: string;

  // Optional base64 encoded data of the file.
  data?: string;
}

/**
 * Read file content
 * @param process http.Get
 * @param url string The URL to send the GET request to.
 * @param query Optional query parameters to include in the request.
 * @param headers Optional headers to include in the request.
 */
export declare function Process(
  process: `http.Get`,
  url: string,
  query?: Record<string, string> | [string, string][] | Array<Record<string, string>> | string,
  headers?: Record<string, string> | Record<string, string>[],
): HttpResponse;

/**
 * Send a POST request
 * @param process http.Post
 * @param url string The URL to send the POST request to.
 * @param payload Optional data to send in the body of the request.
 * @param files Optional files to upload with the request.
 * @param query Optional query parameters to include in the request.
 * @param headers Optional headers to include in the request.
 */
export declare function Process(
  process: `http.Post`,
  url: string,
  payload?: any,
  files?: Record<string, string>,
  query?: Record<string, string> | [string, string][] | Array<Record<string, string>> | string,
  headers?: Record<string, string> | Record<string, string>[],
): HttpResponse;

/**
 * Send a PUT request
 * @param process http.Put
 * @param url string The URL to send the PUT request to.
 * @param payload Optional data to send in the body of the request.
 * @param query Optional query parameters to include in the request.
 * @param headers Optional headers to include in the request.
 */
export declare function Process(
  process: `http.Put`,
  url: string,
  payload?: any,
  query?: Record<string, string> | [string, string][] | Array<Record<string, string>> | string,
  headers?: Record<string, string> | Record<string, string>[],
): HttpResponse;

/**
 * Send a PATCH request
 * @param process http.Patch
 * @param url string The URL to send the PATCH request to.
 * @param payload Optional data to send in the body of the request.
 * @param query Optional query parameters to include in the request.
 * @param headers Optional headers to include in the request.
 */
export declare function Process(
  process: `http.Patch`,
  url: string,
  payload?: any,
  query?: Record<string, string> | [string, string][] | Array<Record<string, string>> | string,
  headers?: Record<string, string> | Record<string, string>[],
): HttpResponse;

/**
 * Send a DELETE request
 * @param process http.Delete
 * @param url string The URL to send the DELETE request to.
 * @param payload Optional data to send in the body of the request.
 * @param query Optional query parameters to include in the request.
 * @param headers Optional headers to include in the request.
 */
export declare function Process(
  process: `http.Delete`,
  url: string,
  payload?: any,
  query?: Record<string, string> | [string, string][] | Array<Record<string, string>> | string,
  headers?: Record<string, string> | Record<string, string>[],
): HttpResponse;

/**
 * Send a HEAD request
 * @param process http.Head
 * @param url string The URL to send the HEAD request to.
 * @param payload Optional data to send in the request.
 * @param query Optional query parameters to include in the request.
 * @param headers Optional headers to include in the request.
 */
export declare function Process(
  process: `http.Head`,
  url: string,
  payload?: any,
  query?: Record<string, string> | [string, string][] | Array<Record<string, string>> | string,
  headers?: Record<string, string> | Record<string, string>[],
): HttpResponse;

/**
 * Send an HTTP request
 * @param process http.Send
 * @param method string The HTTP method to use for the request (e.g., GET, POST, etc.).
 * @param url string The URL to send the request to.
 * @param payload Optional data to send in the body of the request.
 * @param query Optional query parameters to include in the request.
 * @param headers Optional headers to include in the request.
 * @param files Optional files to upload with the request.
 */
export declare function Process(
  process: `http.Send`,
  method: string,
  url: string,
  payload?: any,
  query?: Record<string, string> | [string, string][] | Array<Record<string, string>> | string,
  headers?: Record<string, string> | Record<string, string>[],
  files?: HttpFile[],
): HttpResponse;

/**
 * Stream HTTP request
 * @param process http.Stream
 * @param method string The HTTP method to use for the request (e.g., GET, POST, etc.).
 * @param url string The URL to send the request to.
 * @param handler string The handler process name for streaming data.
 * @param payload Optional data to send in the body of the request.
 * @param query Optional query parameters to include in the request.
 * @param headers Optional headers to include in the request.
 */
export declare function Process(
  process: `http.Stream`,
  method: string,
  url: string,
  handler: string,
  payload?: any,
  query?: Record<string, string> | [string, string][] | Array<Record<string, string>> | string,
  headers?: Record<string, string> | Record<string, string>[],
): any;


/**
 * Execute a process
 * @param name the process name
 * @param args additional arguments for the process (variadic parameters)
 */
export declare function Process(name: `${string}`, ...args: any[]): any;
