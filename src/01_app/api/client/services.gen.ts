import {
  createClient,
  createConfig,
  type Options,
  formDataBodySerializer,
} from "@hey-api/client-fetch";
import type {
  HealthcheckHealthGetError,
  HealthcheckHealthGetResponse,
  AddMaterialPageResourcePostData,
  AddMaterialPageResourcePostError,
  AddMaterialPageResourcePostResponse,
  AddFileS3FilePostData,
  AddFileS3FilePostError,
  AddFileS3FilePostResponse,
  GetAllDocumentsResourcesGetData,
  GetAllDocumentsResourcesGetError,
  GetAllDocumentsResourcesGetResponse,
  SearchDocumentSearchGetData,
  SearchDocumentSearchGetError,
  SearchDocumentSearchGetResponse,
  GetDocumentByIdResourceIdGetData,
  GetDocumentByIdResourceIdGetError,
  GetDocumentByIdResourceIdGetResponse,
  DownloadFileFromS3GetFileLinkGetData,
  DownloadFileFromS3GetFileLinkGetError,
  DownloadFileFromS3GetFileLinkGetResponse,
} from "./types.gen";

export const client = createClient(createConfig());

/**
 * Healthcheck
 */
export const healthcheckHealthGet = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    HealthcheckHealthGetResponse,
    HealthcheckHealthGetError,
    ThrowOnError
  >({
    ...options,
    url: "/health",
  });
};

/**
 * Add Material Page
 * Adds an item to the system
 */
export const addMaterialPageResourcePost = <
  ThrowOnError extends boolean = false,
>(
  options: Options<AddMaterialPageResourcePostData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    AddMaterialPageResourcePostResponse,
    AddMaterialPageResourcePostError,
    ThrowOnError
  >({
    ...options,
    url: "/resource",
  });
};

/**
 * Add File S3
 */
export const addFileS3FilePost = <ThrowOnError extends boolean = false>(
  options: Options<AddFileS3FilePostData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    AddFileS3FilePostResponse,
    AddFileS3FilePostError,
    ThrowOnError
  >({
    ...options,
    ...formDataBodySerializer,
    headers: {
      "Content-Type": null,
      ...options?.headers,
    },
    url: "/file",
  });
};

/**
 * Get All Documents
 */
export const getAllDocumentsResourcesGet = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<GetAllDocumentsResourcesGetData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetAllDocumentsResourcesGetResponse,
    GetAllDocumentsResourcesGetError,
    ThrowOnError
  >({
    ...options,
    url: "/resources",
  });
};

/**
 * Search Document
 */
export const searchDocumentSearchGet = <ThrowOnError extends boolean = false>(
  options: Options<SearchDocumentSearchGetData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    SearchDocumentSearchGetResponse,
    SearchDocumentSearchGetError,
    ThrowOnError
  >({
    ...options,
    url: "/search",
  });
};

/**
 * Get Document By Id
 */
export const getDocumentByIdResourceIdGet = <
  ThrowOnError extends boolean = false,
>(
  options: Options<GetDocumentByIdResourceIdGetData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetDocumentByIdResourceIdGetResponse,
    GetDocumentByIdResourceIdGetError,
    ThrowOnError
  >({
    ...options,
    url: "/resource/{id}",
  });
};

/**
 * Download File From S3
 */
export const downloadFileFromS3GetFileLinkGet = <
  ThrowOnError extends boolean = false,
>(
  options: Options<DownloadFileFromS3GetFileLinkGetData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    DownloadFileFromS3GetFileLinkGetResponse,
    DownloadFileFromS3GetFileLinkGetError,
    ThrowOnError
  >({
    ...options,
    url: "/get-file/{link}",
  });
};
