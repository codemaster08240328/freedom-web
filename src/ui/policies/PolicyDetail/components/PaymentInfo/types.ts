import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export type TDropDownOptions = string[];

export interface IPaymentInfoListItem {
  key: string;
  icon: IconDefinition;
  text: string;
}

export type TPaymentInfoList = IPaymentInfoListItem[];