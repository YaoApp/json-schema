// libsui for frontend development

// Declare the `__m` function for message localization
export declare const __m: (message: string) => string;

// Declare a global data object for SUI
export declare const __sui_data: Record<string, any>;

/**
 * Locale is the struct for localization settings
 */
export declare interface Locale {
  /** Locale name (e.g., "en-US") */
  name?: string;
  /** Key-value pairs for localization strings */
  keys?: { [key: string]: string };
  /** Message dictionary for localization */
  messages?: { [key: string]: string };
  /** Text direction ("ltr" for left-to-right or "rtl" for right-to-left) */
  direction?: "ltr" | "rtl";
  /** Timezone offset (e.g., "+08:00") */
  timezone?:
    | "-12:00"
    | "-11:00"
    | "-10:00"
    | "-09:30"
    | "-09:00"
    | "-08:00"
    | "-07:00"
    | "-06:00"
    | "-05:00"
    | "-04:30"
    | "-04:00"
    | "-03:30"
    | "-03:00"
    | "-02:00"
    | "-01:00"
    | "+00:00"
    | "+01:00"
    | "+02:00"
    | "+03:00"
    | "+03:30"
    | "+04:00"
    | "+04:30"
    | "+05:00"
    | "+05:30"
    | "+05:45"
    | "+06:00"
    | "+06:30"
    | "+07:00"
    | "+08:00"
    | "+08:45"
    | "+09:00"
    | "+09:30"
    | "+10:00"
    | "+10:30"
    | "+11:00"
    | "+12:00"
    | "+12:45"
    | "+13:00"
    | "+14:00"; // Timezone
}

/**
 * Represents a UI Component
 */
export declare type Component = {
  root: HTMLElement;
  state: ComponentState;
  store: ComponentStore;
  $root: SUIQuery;
  find: (selector: string | HTMLElement) => SUIQuery | null;
  query: (selector: string) => HTMLElement | null;
  queryAll: (selector: string) => NodeListOf<Element> | null;
  emit: (name: string, detail?: EventData) => void;
  render: (
    name: string,
    data: Record<string, any>,
    option?: RenderOption
  ) => Promise<string>;
  once?: () => void;
  watch?: Record<string, (value?: any) => void>;
  Constants?: Record<string, any>;
  [key: string]: any;
};

/**
 * Options for rendering a component
 */
export declare type RenderOption = {
  /** Target HTML element for rendering */
  target?: HTMLElement;
  /** Loader display during rendering (default: false) */
  showLoader?: HTMLElement | string | boolean;
  /** Replace content during rendering (default: true) */
  replace?: boolean;
  /** Use page-level data during rendering (default: false) */
  withPageData?: boolean;
};

/**
 * Component state management
 */
export declare type ComponentState = {
  Set: (key: string, value?: any) => void;
};

/**
 * Component store for managing key-value pairs
 */
export declare type ComponentStore = {
  Get: (key: string) => string;
  Set: (key: string, value: string) => void;
  GetJSON: (key: string) => any;
  SetJSON: (key: string, value: any) => void;
  GetData: () => Record<string, any>;
};

/**
 * Helper function to retrieve a component by root element or selector
 * @param selector - Root element or selector
 * @returns Component instance
 */
export declare const $$: (selector: HTMLElement | string) => Component;

/**
 * Event detail struct
 * @template T Element type
 */
export declare type EventDetail<T = HTMLElement> = {
  rootElement: HTMLElement;
  targetElement: T;
};

/**
 * Event data structure
 */
export declare type EventData = Record<string, any>;

/**
 * State object passed during certain events
 */
export declare type State = {
  target: HTMLElement;
  stopPropagation(): void;
};

/**
 * Creates a new render instance for a component
 * @param component - Component or selector
 * @param option - Render options
 * @returns Render instance
 */
export declare function $Render(
  component: Component | string,
  option?: RenderOption
): SUIRender;

/**
 * Render class for partial view execution
 */
export declare class SUIRender {
  constructor(comp: Component | string, option?: RenderOption);

  /**
   * Execute a partial view render
   * @param name - Name of the partial view
   * @param data - Data for rendering
   * @returns Rendered HTML string or error message
   */
  Exec(name: string, data: Record<string, any>): Promise<string>;
}

/**
 * Retrieves the store for a specified element
 * @param selector - Element or selector
 * @returns Store instance
 */
export declare function $Store(
  selector: HTMLElement | string
): ComponentStore | null;

/**
 * Query DOM elements and return a SUIQuery instance
 * @param selector - DOM selector or element
 * @returns SUIQuery instance
 */
export declare function $Query(selector: string | HTMLElement): SUIQuery;

/**
 * Helper class for querying and manipulating DOM elements
 */
export declare class SUIQuery {
  constructor(selector: string | Element);

  /** Iterates over the selected elements */
  each(callback: (element: SUIQuery, index: number) => void): void;

  /** Get the first matched element */
  elm(): Element | null;

  /** Get all matched elements */
  elms(): NodeListOf<Element> | null;

  /** Find a descendant element */
  find(selector: string): SUIQuery | null;

  /** Find the closest ancestor matching the selector */
  closest(selector: string): SUIQuery | null;

  /** Add event listeners */
  on(event: string, callback: (event: Event) => void): SUIQuery;

  /** Get the associated component of the element */
  $$(): Component;

  /** Get the data store for the element */
  store(): ComponentStore | null;

  /** Get attribute value */
  attr(name: string): string | null;

  /** Get data attribute value */
  data(name: string): string | null;

  /** Get JSON attribute value */
  json(name: string): any | null;

  /** Check if the element has a specific class */
  hasClass(className: string): boolean;

  /** Get or set inner HTML */
  html(html?: string): SUIQuery | string;
}

/**
 * Backend API interface
 * @template T Response type
 */
export declare class SUIBackend<T = any> {
  constructor(
    route: string,
    headers?: [string, string][] | Record<string, string> | Headers
  );

  /** Call a backend method with arguments */
  Call(method: string, ...args: any[]): Promise<T>;
}

/**
 * Main Yao SDK for API interaction
 */
export declare class Yao {
  constructor(host?: string);

  /** Perform a GET request */
  Get(path: string, params?: object, headers?: Headers): Promise<any>;

  /** Perform a POST request */
  Post(
    path: string,
    data?: object,
    params?: object,
    headers?: Headers
  ): Promise<any>;

  /** Download a file */
  Download(
    path: string,
    params: object,
    savefile: string,
    headers?: Headers
  ): Promise<void>;

  /** Fetch API for generic requests */
  Fetch(
    method: string,
    path: string,
    params?: object,
    data?: object,
    headers?: Headers,
    isblob?: boolean
  ): Promise<any>;

  /** Get or set cookies */
  Cookie(name: string): string | null;
  SetCookie(name: string, value: string, expireDays?: number): void;
  DeleteCookie(name: string): void;

  /** Serialize an object to a query string */
  Serialize(obj: { [key: string]: any }): string;

  /** Retrieve an authentication token */
  Token(): string;
}
