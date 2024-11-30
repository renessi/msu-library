// This file is auto-generated by @hey-api/openapi-ts

export type DocumentOutDTO = {
  document_id: number;
  name: string;
  year?: number | null;
  link: string;
  subject_name: string;
  teacher_name?: string | null;
  category_name: string;
  semester_num: number;
};

export type HTTPValidationError = {
  detail?: Array<ValidationError>;
};

export type MaterialAddDTO = {
  name: string;
  year?: number | null;
  link: string;
  is_file?: boolean;
  teacher?: string | null;
  subject: string;
  category: string;
  semester_num: number;
};

export type ValidationError = {
  loc: Array<string | number>;
  msg: string;
  type: string;
};

export type HealthcheckHealthGetResponse = unknown;

export type HealthcheckHealthGetError = unknown;

export type AddMaterialPageResourcePostData = {
  body: MaterialAddDTO;
};

export type AddMaterialPageResourcePostResponse = unknown;

export type AddMaterialPageResourcePostError = unknown | HTTPValidationError;

export type GetAllDocumentsResourcesGetData = {
  query?: {
    semesterArray?: string | null;
    subjectArray?: string | null;
    subjectTypeArray?: string | null;
    teacherArray?: string | null;
  };
};

export type GetAllDocumentsResourcesGetResponse = Array<DocumentOutDTO>;

export type GetAllDocumentsResourcesGetError = unknown | HTTPValidationError;

export type SearchDocumentSearchGetData = {
  query: {
    category?: string | null;
    limit?: number | null;
    /**
     * Строка для поиска документов по названию, предмету, преподавателю и другим атрибутам.
     */
    prompt: string;
    semester_num?: string | null;
    subject?: string | null;
    teacher?: string | null;
  };
};

export type SearchDocumentSearchGetResponse = Array<DocumentOutDTO>;

export type SearchDocumentSearchGetError = HTTPValidationError;

export type GetDocumentByIdResourceIdGetData = {
  path: {
    id: number;
  };
};

export type GetDocumentByIdResourceIdGetResponse = DocumentOutDTO;

export type GetDocumentByIdResourceIdGetError = unknown | HTTPValidationError;
