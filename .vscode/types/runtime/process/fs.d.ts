/**
 * WriteFile writes data to a file named by filename.
 * @param type fs.**{RootPath}**.WriteFile
 * @param filename the destination file
 * @param content the content to write
 */
export declare function Process(
  type: `fs.${string}.WriteFile`,
  filename: string,
  content: string
): any;
