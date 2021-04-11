/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOcrResultValidationData = /* GraphQL */ `
  subscription OnCreateOcrResultValidationData(
    $ImageURL: String
    $UserId: String
    $OCRText: String
    $ValidationEndIndex: Int
    $Correct: String
  ) {
    onCreateOCRResultValidationData(
      ImageURL: $ImageURL
      UserId: $UserId
      OCRText: $OCRText
      ValidationEndIndex: $ValidationEndIndex
      Correct: $Correct
    ) {
      ImageURL
      UserId
      OCRText
      ValidationEndIndex
      Correct
    }
  }
`;
export const onUpdateOcrResultValidationData = /* GraphQL */ `
  subscription OnUpdateOcrResultValidationData(
    $ImageURL: String
    $UserId: String
    $OCRText: String
    $ValidationEndIndex: Int
    $Correct: String
  ) {
    onUpdateOCRResultValidationData(
      ImageURL: $ImageURL
      UserId: $UserId
      OCRText: $OCRText
      ValidationEndIndex: $ValidationEndIndex
      Correct: $Correct
    ) {
      ImageURL
      UserId
      OCRText
      ValidationEndIndex
      Correct
    }
  }
`;
export const onDeleteOcrResultValidationData = /* GraphQL */ `
  subscription OnDeleteOcrResultValidationData(
    $ImageURL: String
    $UserId: String
    $OCRText: String
    $ValidationEndIndex: Int
    $Correct: String
  ) {
    onDeleteOCRResultValidationData(
      ImageURL: $ImageURL
      UserId: $UserId
      OCRText: $OCRText
      ValidationEndIndex: $ValidationEndIndex
      Correct: $Correct
    ) {
      ImageURL
      UserId
      OCRText
      ValidationEndIndex
      Correct
    }
  }
`;
