export const PersonType = {
  POLICYHOLDER: "policyholder",
  BENEFICIARY: "beneficiary",
  DEPENDANT: "dependant",
  SPOUSE: "spouse",
};

export interface IPerson {
  id?: string,
  type: string,
  nationalIdNumber: string,
  fullName: string,
  mobileNumber: string,
  bankName: string,
  accountNumber: string,
  branchCode: string,
  age: number,
  date: string
}

export type IPeople = IPerson[];
