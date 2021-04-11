/* eslint-disable */
// this is an auto generated file. This will be overwritten

// export const createOcrResultValidationData = /* GraphQL */ `
//   mutation CreateOcrResultValidationData(
//     $input: CreateOCRResultValidationDataInput!
//   ) {
//     createOCRResultValidationData(input: $input) {
//       ImageURL
//       UserId
//       OCRText
//       ValidationEndIndex
//       Correct
//     }
//   }
// `;

export const createOcrResultValidationData = /* GraphQL */ `
  mutation CreateOcrResultValidationData(
    $UserId: String!,
    $ImageURL: String!,
    $OCRText: String,
    $ValidationEndIndex: Int,
    $Correct: String
) {
  createOCRResultValidationData(input: {
        UserId : $UserId,
        ImageURL : $ImageURL,
        OCRText : $OCRText,
        ValidationEndIndex: $ValidationEndIndex,
        Correct: $Correct
      }) {
        ImageURL
        UserId
        OCRText
        ValidationEndIndex
        Correct
    }
  }
`;

// export const updateOcrResultValidationData = /* GraphQL */ `
//   mutation UpdateOcrResultValidationData(
//     $input: UpdateOCRResultValidationDataInput!
//   ) {
//     updateOCRResultValidationData(input: $input) {
//       ImageURL
//       UserId
//       OCRText
//       ValidationEndIndex
//       Correct
//     }
//   }
// `;

export const updateOcrResultValidationData = /* GraphQL */ `
  mutation UpdateOcrResultValidationData(
    $UserId: String!,
    $ImageURL: String!,
    $OCRText: String,
    $ValidationEndIndex: Int,
    $Correct: String
) {
  updateOCRResultValidationData(input: {
        UserId : $UserId,
        ImageURL : $ImageURL,
        OCRText : $OCRText,
        ValidationEndIndex: $ValidationEndIndex,
        Correct: $Correct
      }) {
        ImageURL
        UserId
        OCRText
        ValidationEndIndex
        Correct
    }
  }
`;

export const deleteOcrResultValidationData = /* GraphQL */ `
  mutation DeleteOcrResultValidationData(
    $input: DeleteOCRResultValidationDataInput!
  ) {
    deleteOCRResultValidationData(input: $input) {
      ImageURL
      UserId
      OCRText
      ValidationEndIndex
      Correct
    }
  }
`;
