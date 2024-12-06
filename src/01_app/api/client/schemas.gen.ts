// This file is auto-generated by @hey-api/openapi-ts

export const Body_add_file_s3_file_postSchema = {
  properties: {
    file: {
      type: "string",
      format: "binary",
      title: "File",
    },
  },
  type: "object",
  required: ["file"],
  title: "Body_add_file_s3_file_post",
} as const;

export const DocumentOutDTOSchema = {
  properties: {
    document_id: {
      type: "integer",
      title: "Document Id",
    },
    name: {
      type: "string",
      title: "Name",
    },
    year: {
      anyOf: [
        {
          type: "integer",
        },
        {
          type: "null",
        },
      ],
      title: "Year",
    },
    link: {
      type: "string",
      title: "Link",
    },
    is_file: {
      type: "boolean",
      title: "Is File",
    },
    subject_name: {
      type: "string",
      title: "Subject Name",
    },
    teacher_name: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Teacher Name",
    },
    category_name: {
      type: "string",
      title: "Category Name",
    },
    semester_num: {
      type: "integer",
      title: "Semester Num",
    },
  },
  type: "object",
  required: [
    "document_id",
    "name",
    "link",
    "is_file",
    "subject_name",
    "category_name",
    "semester_num",
  ],
  title: "DocumentOutDTO",
} as const;

export const HTTPValidationErrorSchema = {
  properties: {
    detail: {
      items: {
        $ref: "#/components/schemas/ValidationError",
      },
      type: "array",
      title: "Detail",
    },
  },
  type: "object",
  title: "HTTPValidationError",
} as const;

export const MaterialAddDTOSchema = {
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    year: {
      anyOf: [
        {
          type: "integer",
        },
        {
          type: "null",
        },
      ],
      title: "Year",
    },
    link: {
      type: "string",
      title: "Link",
    },
    is_file: {
      type: "boolean",
      title: "Is File",
      default: false,
    },
    teacher: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Teacher",
    },
    subject: {
      type: "string",
      title: "Subject",
    },
    category: {
      type: "string",
      title: "Category",
    },
    semester_num: {
      type: "integer",
      title: "Semester Num",
    },
  },
  type: "object",
  required: ["name", "link", "subject", "category", "semester_num"],
  title: "MaterialAddDTO",
} as const;

export const ValidationErrorSchema = {
  properties: {
    loc: {
      items: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "integer",
          },
        ],
      },
      type: "array",
      title: "Location",
    },
    msg: {
      type: "string",
      title: "Message",
    },
    type: {
      type: "string",
      title: "Error Type",
    },
  },
  type: "object",
  required: ["loc", "msg", "type"],
  title: "ValidationError",
} as const;
