

type QueryParam = {
  model?: string; // optional model name
  table?: string; // optional table name
  alias?: string; // optional alias
  export?: string; // optional, export prefix
  select?: (string | Raw)[]; // array of strings or Raw type
  wheres?: QueryWhere[]; // array of QueryWhere objects
  orders?: QueryOrder[]; // array of QueryOrder objects
  limit?: number; // optional limit for the query
  page?: number; // optional page number for pagination
  pageSize?: number; // optional page size for pagination
  withs?: Record<string, With>; // optional, key-value pairs of With
}

type QueryWhere = {
  rel?: string; // optional relation name
  column?: string | number; // column name or index
  value?: any; // value to compare against
  method?: string; // query method like where, orwhere, etc.
  op?: string; // operation like eq, gt, lt, etc.
  wheres?: QueryWhere[]; // nested where conditions
}

type QueryOrder = {
  rel?: string; // optional relation name
  column: string; // column to order by
  option?: string; // ordering option like asc or desc
}

type With = {
  name: string; // name of the relation
  query?: QueryParam; // query parameters for the relation
}

type Raw = any; // Placeholder for the Raw type

type ValidateResponse = {
  line?: number; // line number of the error
  column?: string; // column name with error
  messages?: string[]; // array of error messages
}

type MetaData = {
  name?: string; // metadata name
  connector?: string; // database connector type
  table?: Table; // table options
  columns?: Column[]; // array of column definitions
  indexes?: Index[]; // array of index definitions
  relations?: Record<string, Relation>; // map of relations
  values?: Map<string, any>[]; // array of initial values
  option?: Option; // model options
}

type Column = {
  label?: string; // optional label for the column
  name: string; // column name
  type?: string; // column data type
  title?: string; // column title
  description?: string; // column description
  comment?: string; // column comment
  length?: number; // column length
  precision?: number; // column precision
  scale?: number; // column scale
  nullable?: boolean; // whether the column is nullable
  option?: string[]; // additional options for the column
  default?: any; // default value for the column
  defaultRaw?: string; // raw default value expression
  example?: any; // example value for the column
  generate?: string; // generation strategy like UUID, Increment
  crypt?: string; // encryption method, if any
  validations?: Validation[]; // validation rules for the column
  index?: boolean; // whether the column is indexed
  unique?: boolean; // whether the column value must be unique
  primary?: boolean; // whether the column is a primary key
}

type Validation = {
  method: string; // validation method name
  args?: any[]; // arguments for the validation method
  message?: string; // error message for validation failure
}

type Index = {
  comment?: string; // optional comment for the index
  name?: string; // index name
  columns?: string[]; // columns included in the index
  type?: string; // index type such as primary, unique, etc.
}

type Table = {
  name?: string; // optional table name, defaults to model name
  prefix?: string; // optional table prefix
  comment?: string; // optional table comment
  engine?: string; // optional storage engine (MySQL only)
  collation?: string; // optional collation
  charset?: string; // optional character set
  primaryKeys?: string[]; // primary keys of the table
}

type Relation = {
  name: string; // relation name
  type: string; // type of the relation
  key?: string; // local key
  model?: string; // related model
  foreign?: string; // foreign key
  links?: Relation[]; // linking relations
  query?: QueryParam; // query parameters for the relation
}

type Option = {
  timestamps?: boolean; // whether to use created_at and updated_at fields
  softDeletes?: boolean; // whether to use a deleted_at field
  trackings?: boolean; // whether to track created_by, updated_by, deleted_by
  constraints?: boolean; // whether constraints are defined
  permission?: boolean; // whether to use a __permission field
  logging?: boolean; // whether to use a __logging_id field
  readonly?: boolean; // whether the model is read-only
}

/**
 * Find a record by id
 * @param type models.**WidgetID**.Find
 * @param id string | number record id
 * @param query query parameters
 */
export declare function Process(
  type: `models.${string}.Find`,
  id: string | number,
  query: QueryParam
): Record<string, any>;

/**
 * Get records by query
 * @param type models.**WidgetID**.Get
 * @param query query parameters
 */
export declare function Process(
  type: `models.${string}.Get`,
  query: QueryParam
): Record<string, any>[];

/**
 * Paginate records by query
 * @param type models.**WidgetID**.Paginate
 * @param query query parameters
 * @param page number page number
 * @param pageSize number page size
 */
export declare function Process(
  type: `models.${string}.Paginate`,
  query: QueryParam,
  page: number,
  pageSize: number
): Record<string, any>;

/**
 * Create a new record
 * @param type models.**WidgetID**.Create
 * @param row data to create
 */
export declare function Process(
  type: `models.${string}.Create`,
  row: Record<string, any>
): number;

/**
 * Update a record by id
 * @param type models.**WidgetID**.Update
 * @param id string | number record id
 * @param row data to update
 */
export declare function Process(
  type: `models.${string}.Update`,
  id: string | number,
  row: Record<string, any>
): void;

/**
 * Save a record (insert or update)
 * @param type models.**WidgetID**.Save
 * @param row data to save
 */
export declare function Process(
  type: `models.${string}.Save`,
  row: Record<string, any>
): number;

/**
 * Delete a record by id (soft delete)
 * @param type models.**WidgetID**.Delete
 * @param id string | number record id
 */
export declare function Process(
  type: `models.${string}.Delete`,
  id: string | number
): void;

/**
 * Destroy a record by id (permanent delete)
 * @param type models.**WidgetID**.Destroy
 * @param id string | number record id
 */
export declare function Process(
  type: `models.${string}.Destroy`,
  id: string | number
): void;

/**
 * Insert multiple records
 * @param type models.**WidgetID**.Insert
 * @param columns array of column names
 * @param rows array of row values
 */
export declare function Process(
  type: `models.${string}.Insert`,
  columns: string[],
  rows: any[][]
): void;

/**
 * Update records matching criteria
 * @param type models.**WidgetID**.UpdateWhere
 * @param query query parameters
 * @param row data to update
 */
export declare function Process(
  type: `models.${string}.UpdateWhere`,
  query: QueryParam,
  row: Record<string, any>
): number;

/**
 * Delete records matching criteria (soft delete)
 * @param type models.**WidgetID**.DeleteWhere
 * @param query query parameters
 */
export declare function Process(
  type: `models.${string}.DeleteWhere`,
  query: QueryParam
): number;

/**
 * Destroy records matching criteria (permanent delete)
 * @param type models.**WidgetID**.DestroyWhere
 * @param query query parameters
 */
export declare function Process(
  type: `models.${string}.DestroyWhere`,
  query: QueryParam
): number;

/**
 * Save each record from a list
 * @param type models.**WidgetID**.EachSave
 * @param rows list of rows to save
 * @param eachRow optional row values to apply to each save
 */
export declare function Process(
  type: `models.${string}.EachSave`,
  rows: Record<string, any>[],
  eachRow?: Record<string, any>
): number[];

/**
 * Migrate the model (create or update table structure)
 * @param type models.**WidgetID**.Migrate
 * @param force boolean whether to force the migration
 */
export declare function Process(
  type: `models.${string}.Migrate`,
  force?: boolean
): void;

/**
 * Load a model from file or source
 * @param type models.**WidgetID**.Load
 * @param file string model file path
 * @param source optional string, model source code
 */
export declare function Process(
  type: `models.${string}.Load`,
  file: string,
  source?: string
): void;

/**
 * Reload the model
 * @param type models.**WidgetID**.Reload
 */
export declare function Process(
  type: `models.${string}.Reload`
): void;

/**
 * Read the model's metadata
 * @param type models.**WidgetID**.Read
 */
export declare function Process(
  type: `models.${string}.Read`
): MetaData;

/**
 * Check if a model exists
 * @param type models.**WidgetID**.Exists
 */
export declare function Process(
  type: `models.${string}.Exists`
): boolean;

