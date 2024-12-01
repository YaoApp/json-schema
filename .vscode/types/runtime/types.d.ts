export type QueryParam = {
  wheres?: Where[];
  orders?: Order[];
  withs?: Record<string, With>;
} & Record<string, any>;

export type Where = {
  method?: "where" | "orwhere";
  column?: string;
  value?: any;
  wheres?: Where[];
  op?:
    | "eq"
    | "in"
    | "like"
    | "gt"
    | "lt"
    | "gte"
    | "lte"
    | "notnull"
    | "null"
    | "match"
    | "notmatch";
};

export type Order = { column: string; option?: "asc" | "desc" } | string;

export type With = { query?: QueryParam };
