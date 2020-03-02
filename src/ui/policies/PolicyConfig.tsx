import _, { keyBy, cloneDeep } from 'lodash';
import moment from 'moment';

const _fields = [
  {
    key: 'policyNo',
    text: "Policy Number"
  },
  {
    key: 'nationalIdNumber',
    text: "ID Number"
  },
  {
    key: 'status',
    text: "Status"
  },
  {
    format: v => moment(v).format('YYYY-MM-DD'),
    key: 'openedAt',
    text: "Date"
  },
  {
    key: 'mobileNumber',
    text: "Mobile Number"
  },
  {
    key: 'tags',
    text: "Tags"
  },
  {
    key: 'firstName',
    text: 'First Name'
  },
  {
    key: 'lastName',
    text: 'Last Name'
  },
];
const _showFields = [
  {
    key: 'checkbox',
    text: "Checkbox"
  },
  ...cloneDeep(_fields)
];

const _sortBy = [
  ...cloneDeep(_fields)
];

const _filterData = [
  {
    key: 'transaction',
    text: 'Transactions'
  },
  {
    key: 'situation',
    text: 'Situations'
  },
  {
    key: 'communication',
    text: 'Communication'
  },
  {
    key: 'agentaction',
    text: 'Agent Actions'
  },
  {
    key: 'call',
    text: 'Calls'
  },
  {
    key: 'refund',
    text: 'Refunds'
  },
  {
    key: 'debitOrder',
    text: 'Debit Orders'
  },
  {
    key: 'update',
    text: 'Updates'
  },
  {
    key: 'note',
    text: 'Notes'
  },
  {
    key: 'email',
    text: 'Emails'
  },
  {
    key: 'sms',
    text: 'SMS'
  }
];

const showFieldArray = _.each(_showFields, (val) => {
  _.extend(val, { active: true });
});

const sortFieldArray = _.each(_sortBy, (val) => {
  _.extend(val, { active: false });
});

const filterDataArray = _.each(_filterData, (val, ind) => {
  _.extend(val, { active: true });
});

export const showFieldData = keyBy(showFieldArray, 'key');
export const sortFieldData = keyBy(sortFieldArray, 'key');
export const filterData = keyBy(filterDataArray, 'key');