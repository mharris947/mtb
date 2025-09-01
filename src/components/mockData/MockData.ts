import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      fullName: 'Smith morris',
      email: 's*@gmail.com',
      dateCreated: '8/29/2025', // m/d/y
      username: 'sample1',
      password: 'sample1'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 650000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 5, 2019',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 230000.0
      },
      {
        dateTime: 'October 20, 2019',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 176000.0
      },
      {
        dateTime: 'July 11, 2019',
        description: 'Transfer fee - XXXXXX5612',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 11, 2019',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },

      {
        dateTime: 'December 2, 2018',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'September 15, 2018',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'July 18, 2018',
        description: 'Transfer fee - XXXXXX2120',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 18, 2018',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },

      {
        dateTime: 'November 30, 2017',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'September 12, 2017',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'July 4, 2017',
        description: 'Transfer fee - XXXXXX1080',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 4, 2017',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -39000.0
      },

      {
        dateTime: 'December 7, 2016',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 21800.0
      },
      {
        dateTime: 'September 20, 2016',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 24800.0
      },
      {
        dateTime: 'June 22, 2016',
        description: 'Transfer fee - XXXXXX8647',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 22, 2016',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3200.0
      },

      {
        dateTime: 'December 18, 2015',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 31900.0
      },
      {
        dateTime: 'September 9, 2015',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 11600.0
      },
      {
        dateTime: 'July 1, 2015',
        description: 'Transfer fee - XXXXXX9072',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 1, 2015',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },

      {
        dateTime: 'November 23, 2014',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 34000.0
      },
      {
        dateTime: 'September 4, 2014',
        description: 'Transfer from Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: 42100.0
      },
      {
        dateTime: 'June 6, 2014',
        description: 'Transfer fee - XXXXXX2019',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 6, 2014',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      },

      {
        dateTime: 'December 8, 2013',
        description: 'Transfer from Olivia Park - XXXXXX4301',
        status: 'Success',
        amount_usd: 58000.0
      },
      {
        dateTime: 'September 18, 2013',
        description: 'Transfer from Chloe Davis - XXXXXX2004',
        status: 'Success',
        amount_usd: 39000.0
      },
      {
        dateTime: 'July 12, 2013',
        description: 'Transfer fee - XXXXXX9435',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 12, 2013',
        description: 'Transfer to Ethan Wilson - XXXXXX9435',
        status: 'Success',
        amount_usd: -46000.0
      },

      {
        dateTime: 'November 13, 2012',
        description: 'Transfer from Lucas Brown - XXXXXX3321',
        status: 'Success',
        amount_usd: 78000.0
      },
      {
        dateTime: 'September 25, 2012',
        description: 'Transfer from Emily Wagner - XXXXXX9812',
        status: 'Success',
        amount_usd: 59000.0
      },
      {
        dateTime: 'June 11, 2012',
        description: 'Transfer fee - XXXXXX6720',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 11, 2012',
        description: 'Transfer to Daniel Lee - XXXXXX6720',
        status: 'Success',
        amount_usd: -23500.0
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      fullName: 'Hazel Randy Boyle',
      email: 'h*@gmail.com',
      dateCreated: '8/31/2025', // m/d/y
      username: "KijanKeitaCoryaba",
      password: "Hazel1234@",
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 42360000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 30, 2025',
        description: 'Wire Transfer from Military Headquarters Washington DC - XXXXXX3832',
        status: 'Success',
        amount_usd: 6000000.0
      },
      {
        dateTime: 'August 29, 2025',
        description: 'Wire Transfer from Military Headquarters Washington DC - XXXXXX9471',
        status: 'Success',
        amount_usd: 2500000.0
      },
      {
        dateTime: 'August 28, 2025',
        description: 'Wire Transfer from Military Headquarters Washington DC - XXXXXX1208',
        status: 'Success',
        amount_usd: 4000000.0
      },
      {
        dateTime: 'August 27, 2025',
        description: 'Wire Transfer from Military Headquarters Washington DC - XXXXXX5097',
        status: 'Success',
        amount_usd: 3000000.0
      },
      {
        dateTime: 'August 26, 2025',
        description: 'Wire Transfer from Military Headquarters Washington DC - XXXXXX6743',
        status: 'Success',
        amount_usd: 7000000.0
      },
      {
        dateTime: 'August 25, 2025',
        description: 'Wire Transfer from Military Headquarters Washington DC - XXXXXX8384',
        status: 'Success',
        amount_usd: 5000000.0
      },
      {
        dateTime: 'August 24, 2025',
        description: 'Wire Transfer from Military Headquarters Washington DC - XXXXXX4729',
        status: 'Success',
        amount_usd: 3000000.0
      },
      {
        dateTime: 'August 23, 2025',
        description: 'Wire Transfer from Military Headquarters Washington DC - XXXXXX2956',
        status: 'Success',
        amount_usd: 2360000.0
      },
      {
        dateTime: 'August 22, 2025',
        description: 'Wire Transfer from Military Headquarters Washington DC - XXXXXX6670',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'August 21, 2025',
        description: 'Wire Transfer from Military Headquarters Washington DC - XXXXXX7415',
        status: 'Success',
        amount_usd: 3000000.0
      },
      {
        dateTime: 'August 20, 2025',
        description: 'Wire Transfer from Military Headquarters Washington DC - XXXXXX9130',
        status: 'Success',
        amount_usd: 3000000.0
      },
      {
        dateTime: 'August 19, 2025',
        description: 'Wire Transfer from Military Headquarters Washington DC - XXXXXX2046',
        status: 'Success',
        amount_usd: 2500000.0
      }
    ]
  }
];
