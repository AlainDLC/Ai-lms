export interface fieldData {
  fieldValue: string;
  fieldName: string;
}

export interface OptionField {
  label: string;
  ImageUrl: string;
  isFree: boolean;
}

export interface formDataType {
  storySubject: string;
  storyType: string;
  imageStyle: string;
  ageGroup: string;
}

export interface StoryTypeProps {
  userSelection: (selection: { fieldValue: string; fieldName: string }) => void;
}
