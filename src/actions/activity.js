export function getActivities() {
  return async dispatch => {
    dispatch({
      type: "GET_ACTIVITIES_START"
    });

    try {
      //raw data
      //const {data:studentsFromServer} = await axios.get('');

      //fake data
      const fakeActivitiesData = [
        {
          id: 1,
          date: "2019-02-02",
          type: "Stock Trade Commision",
          action: "Commision 1",
          amountaud: "-12.91",
          endingcashaud: "667,789.18"
        },
        {
          id: 2,
          date: "2019-02-19",
          type: "Deposit",
          action: "Commision 8",
          amountaud: "-12.91",
          endingcashaud: "647,789.18"
        },
        {
          id: 3,
          date: "2019-01-02",
          type: "Stock Trade Commision",
          action: "Commision 3",
          amountaud: "12.91",
          endingcashaud: "21234,789.18"
        },
        {
          id: 4,
          date: "2019-02-02",
          type: "Stock Trade Commision",
          action: "Commision 1",
          amountaud: "-12.91",
          endingcashaud: "667,789.18"
        },
        {
          id: 5,
          date: "2019-02-19",
          type: "Stock Trade Commision",
          action: "Commision 8",
          amountaud: "-12.91",
          endingcashaud: "647,789.18"
        },
        {
          id: 6,
          date: "2019-01-02",
          type: "Deposit",
          action: "Commision 3",
          amountaud: "12.91",
          endingcashaud: "21234,789.18"
        },
        {
          id: 7,
          date: "2019-02-02",
          type: "Stock Trade Commision",
          action: "Commision 1",
          amountaud: "-12.91",
          endingcashaud: "667,789.18"
        },
        {
          id: 8,
          date: "2019-02-19",
          type: "Stock Trade Commision",
          action: "Commision 8",
          amountaud: "-12.91",
          endingcashaud: "647,789.18"
        },
        {
          id: 9,
          date: "2019-01-02",
          type: "Stock Trade Commision",
          action: "Commision 3",
          amountaud: "12.91",
          endingcashaud: "21234,789.18"
        },
        {
          id: 10,
          date: "2019-02-02",
          type: "Stock Trade Commision",
          action: "Commision 1",
          amountaud: "-12.91",
          endingcashaud: "667,789.18"
        },
        {
          id: 11,
          date: "2019-02-19",
          type: "Stock Trade Commision",
          action: "Commision 8",
          amountaud: "-12.91",
          endingcashaud: "647,789.18"
        },
        {
          id: 12,
          date: "2019-01-02",
          type: "Stock Trade Commision",
          action: "Commision 3",
          amountaud: "12.91",
          endingcashaud: "21234,789.18"
        },
        {
          id: 13,
          date: "2019-02-19",
          type: "Stock Trade Commision",
          action: "Commision 8",
          amountaud: "-12.91",
          endingcashaud: "647,789.18"
        },
        {
          id: 14,
          date: "2019-01-02",
          type: "Stock Trade Commision",
          action: "Commision 3",
          amountaud: "12.91",
          endingcashaud: "21234,789.18"
        },
        {
          id: 15,
          date: "2019-02-02",
          type: "Deposit",
          action: "Commision 1",
          amountaud: "-12.91",
          endingcashaud: "667,789.18"
        },
        {
          id: 16,
          date: "2019-02-19",
          type: "Stock Trade Commision",
          action: "Commision 8",
          amountaud: "-12.91",
          endingcashaud: "647,789.18"
        },
        {
          id: 17,
          date: "2019-01-02",
          type: "Stock Trade Commision",
          action: "Commision 3",
          amountaud: "12.91",
          endingcashaud: "21234,789.18"
        },
        {
          id: 18,
          date: "2019-02-02",
          type: "Stock Trade Commision",
          action: "Commision 1",
          amountaud: "-12.91",
          endingcashaud: "667,789.18"
        },
        {
          id: 19,
          date: "2019-02-19",
          type: "Stock Trade Commision",
          action: "Commision 8",
          amountaud: "-12.91",
          endingcashaud: "647,789.18"
        },
        {
          id: 20,
          date: "2019-01-02",
          type: "Stock Trade Commision",
          action: "Commision 3",
          amountaud: "12.91",
          endingcashaud: "21234,789.18"
        },
        {
          id: 21,
          date: "2019-02-02",
          type: "Stock Trade Commision",
          action: "Commision 1",
          amountaud: "-12.91",
          endingcashaud: "667,789.18"
        },
        {
          id: 22,
          date: "2019-02-19",
          type: "Stock Trade Commision",
          action: "Commision 8",
          amountaud: "-12.91",
          endingcashaud: "647,789.18"
        },
        {
          id: 23,
          date: "2019-01-02",
          type: "Stock Trade Commision",
          action: "Commision 3",
          amountaud: "12.91",
          endingcashaud: "21234,789.18"
        },

        {
          id: 24,
          date: "2019-02-19",
          type: "Stock Trade Commision",
          action: "Commision 8",
          amountaud: "-12.91",
          endingcashaud: "647,789.18"
        },
        {
          id: 25,
          date: "2019-01-02",
          type: "Stock Trade Commision",
          action: "Commision 3",
          amountaud: "12.91",
          endingcashaud: "21234,789.18"
        },
        {
          id: 26,
          date: "2019-02-02",
          type: "Deposit",
          action: "Commision 1",
          amountaud: "-12.91",
          endingcashaud: "667,789.18"
        },
        {
          id: 27,
          date: "2019-02-19",
          type: "Stock Trade Commision",
          action: "Commision 8",
          amountaud: "-12.91",
          endingcashaud: "647,789.18"
        },
        {
          id: 28,
          date: "2019-01-02",
          type: "Stock Trade Commision",
          action: "Commision 3",
          amountaud: "12.91",
          endingcashaud: "21234,789.18"
        },
        {
          id: 29,
          date: "2019-02-02",
          type: "Stock Trade Commision",
          action: "Commision 1",
          amountaud: "-12.91",
          endingcashaud: "667,789.18"
        },
        {
          id: 30,
          date: "2019-02-19",
          type: "Stock Trade Commision",
          action: "Commision 8",
          amountaud: "-12.91",
          endingcashaud: "647,789.18"
        }
      ];

      dispatch({
        type: "GET_ACTIVITIES_SUCCEEDED",
        data: fakeActivitiesData
      });
    } catch (err) {
      dispatch({
        type: "GET_ACTIVITIES_FAILURE"
      });
    }
  };
}
