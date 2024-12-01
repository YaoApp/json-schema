// This file automatically generated, do not edit it manually.
import { QueryParam } from "../types";

/**
 * Find a record by id
 * @param type models.**WidgetID**.Find
 * @param id string | number  record id
 * @param query query parameters
 */
export declare function Process(
  type: `models.${string}.Find`,
  id: string | number,
  query: QueryParam
): any;

/**
 * Create a record with data
 * @param type models.<Widget_ID>.Create
 * @param data record data
 */
export declare function Process(
  type: `models.${string}.Create`,
  data: Record<string, any>
): any;

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
