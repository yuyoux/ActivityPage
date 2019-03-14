const necessaryKeys = {
  id: "id",
  date: "date",
  type: "type",
  action: "action",
  amountaud: "amountaud",
  endingcashaud: "endingcashaud"
};

const activity = (state = { activity: [] }, action) => {
  switch (action.type) {
    case "GET_ACTIVITIES_SUCCEEDED": {
      const { data } = action;
      const cleanData = data.map(record => {
        const processedRecord = {};

        Object.entries(record).forEach(([key, value]) => {
          if (necessaryKeys[key]) processedRecord[necessaryKeys[key]] = value;
        });

        return processedRecord;
      });

      return {
        ...state,
        activity: cleanData
      };
    }
    default:
      return state;
  }
};

export default activity;
