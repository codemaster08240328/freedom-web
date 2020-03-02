export const idNumberRegex = /((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229)(([ \-])(\d{4})([ \-])(\d{3})|(\d{7}))/;
export const mobileNumberRegex = /^((?:\+27|27)|0)(=71|72|82|73|83|74|84|76|78|79|63|65|66|67|68)(\d{7})$/;
export const cardNumberRegex = /^(\d{4}[- ]){3}\d{4}|\d{16}$/;
export const bankAccountNumberRegex = /^\d{6,14}$/
export const branchCodeRegex = /\d{4}\s\d{3}/;