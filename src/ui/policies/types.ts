export interface IPolicy {
  productId: string;
  id: string;
  policyHolderId?: string;
  beneficiaryId?: string;

  situation: string;
  status: string;
  balance: string;
  amountDue: string;
  dialedCount: number;
  source: string;
  lastCallTime: string;
  situationDate: string;
  nationalIdNumber: string;
  firstName: string;
  lastName: string;
  age: number;
  mobileNumber: string;
  openedAt: string;
  instalmentAmount: number;
  paymentMethod: string;
  bankName: string;
  accountNumber: string;
  debitDay: number;
  debitAuthority: boolean;
  arrears: string;
  easyPayNumber: string;
  whatsappMsg: number;
}

export type PolicyList = IPolicy[];

export interface IField {
  format?: (value: any) => any;
  key: string;
  text: string;
  active?: boolean;
}

export interface IPolicyField {
  [key: string]: IField
}

export interface IEvent {
  id: number;
  Date: string;
  action: string;
  Summary: string;
}

export type ITimelineData = IEvent[];
export interface IPropertyPolicyField {
  [key: string]: any;
}

export interface IUpdatePolicyParam {
  [key: string]: string;
}

export interface INote {
  id: number;
  timestamp: string;
  agent: string,
  option: string,
  content: string,
}

export type INoteData = INote [];
