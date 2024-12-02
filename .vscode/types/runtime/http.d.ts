import { HttpFile, HttpResponse } from "./process/process";

export declare class http {
  /**
   * Sends a GET request to the specified URL.
   * @param url - The target URL.
   * @param queryParams - (Optional) The query parameters.
   * @param headers - (Optional) The headers to include in the request.
   * @returns An HttpResponse object.
   */
  public static Get(
    url: string,
    queryParams?: Record<string, string>,
    headers?: Record<string, string>
  ): HttpResponse;

  /**
   * Sends a POST request to the specified URL.
   * @param url - The target URL.
   * @param payload - (Optional) The data to be sent in the body of the request.
   * @param files - (Optional) Files to be uploaded in the request.
   * @param queryParams - (Optional) The query parameters.
   * @param headers - (Optional) The headers to include in the request.
   * @returns An HttpResponse object.
   */
  public static Post(
    url: string,
    payload?: any,
    files?: Record<string, string>,
    queryParams?: Record<string, string>,
    headers?: Record<string, string>
  ): HttpResponse;

  /**
   * Sends a PUT request to the specified URL.
   * @param url - The target URL.
   * @param payload - (Optional) The data to be sent in the body of the request.
   * @param queryParams - (Optional) The query parameters.
   * @param headers - (Optional) The headers to include in the request.
   * @returns An HttpResponse object.
   */
  public static Put(
    url: string,
    payload?: any,
    queryParams?: Record<string, string>,
    headers?: Record<string, string>
  ): HttpResponse;

  /**
   * Sends a PATCH request to the specified URL.
   * @param url - The target URL.
   * @param payload - (Optional) The data to be sent in the body of the request.
   * @param queryParams - (Optional) The query parameters.
   * @param headers - (Optional) The headers to include in the request.
   * @returns An HttpResponse object.
   */
  public static Patch(
    url: string,
    payload?: any,
    queryParams?: Record<string, string>,
    headers?: Record<string, string>
  ): HttpResponse;

  /**
   * Sends a DELETE request to the specified URL.
   * @param url - The target URL.
   * @param payload - (Optional) The data to be sent in the body of the request.
   * @param queryParams - (Optional) The query parameters.
   * @param headers - (Optional) The headers to include in the request.
   * @returns An HttpResponse object.
   */
  public static Delete(
    url: string,
    payload?: any,
    queryParams?: Record<string, string>,
    headers?: Record<string, string>
  ): HttpResponse;

  /**
   * Sends a custom request to the specified URL.
   * @param method - The HTTP method to use (GET, POST, etc.).
   * @param url - The target URL.
   * @param payload - (Optional) The data to be sent in the body of the request.
   * @param queryParams - (Optional) The query parameters.
   * @param headers - (Optional) The headers to include in the request.
   * @param files - (Optional) Files to be uploaded in the request.
   * @returns An HttpResponse object.
   */
  public static Send(
    method: string,
    url: string,
    payload?: any,
    queryParams?: Record<string, string>,
    headers?: Record<string, string>,
    files?: HttpFile[]
  ): HttpResponse;

  /**
   * Streams data from the specified URL.
   * @param method - The HTTP method to use (GET, POST, etc.).
   * @param url - The target URL.
   * @param callback - Function to handle streaming data.
   * @param payload - (Optional) The data to be sent in the body of the request.
   * @param queryParams - (Optional) The query parameters.
   * @param headers - (Optional) The headers to include in the request.
   * @returns An error if the stream fails.
   */
  public static Stream(
    method: string,
    url: string,
    callback: (data: string) => number,
    payload?: any,
    queryParams?: Record<string, string>,
    headers?: Record<string, string>
  ): HttpResponse;
}
