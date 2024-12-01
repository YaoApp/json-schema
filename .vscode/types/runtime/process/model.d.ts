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
