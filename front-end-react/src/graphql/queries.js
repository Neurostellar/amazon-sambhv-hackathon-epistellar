/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOcrResultValidationData = /* GraphQL */ `
  query GetOcrResultValidationData($UserId: String!, $ImageURL: String!) {
    getOCRResultValidationData(UserId: $UserId, ImageURL: $ImageURL) {
      ImageURL
      UserId
      OCRText
      ValidationEndIndex
      Correct
    }
  }
`;
export const listOcrResultValidationData = /* GraphQL */ `
  query ListOcrResultValidationData(
    # $filter: TableOCRResultValidationDataFilterInput
    $UserId: String
    $limit: Int
    $nextToken: String
  ) {
    listOCRResultValidationData(
      # filter: $filter
      filter: {
        UserId: {eq: $UserId}
      }
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        ImageURL
        UserId
        OCRText
        ValidationEndIndex
        Correct
      }
      nextToken
    }
  }
`;

export const listOcrResultValidationDataForPrevious = /* GraphQL */ `
query getOCRResultValidationData($UserId: String!, $ImageURL: String!) {
  getOCRResultValidationData(UserId: $UserId, ImageURL: $ImageURL) {
      ImageURL
      UserId
      OCRText
      ValidationEndIndex
      Correct
  }
}
`;

// export const listOcrResultValidationDataForPrevious = /* GraphQL */ `
//   query ListOcrResultValidationData($UserId: String, $ImageURL: String) {
//     listOCRResultValidationData(
//       filter: {
//         UserId: {eq: $UserId}
//         ImageURL: {eq: $ImageURL}
//       }
//     ) {
//       items {
//         ImageURL
//         UserId
//         OCRText
//         ValidationEndIndex
//         Correct
//       }
//       nextToken
//     }
//   }
// `;
