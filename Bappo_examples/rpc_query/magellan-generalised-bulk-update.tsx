console.clear();
import React, { useState, useEffect } from "react";
import { useModel } from "@bappo/sdk";
import { View, Text } from "bappo-components";

export default function DataUpdate() {
  let recordCount = 0;
  const modelName = "AirTerminalChargeItem"
  //first where clause to be added to $AND condition
  const where1 =  { validTo: { $gte: "2020-10-11" } };
  //second where clause to be added to $AND condition
  const where2 = {
    label: {
      $in: [
        "Document Fee",
        "Terminal Fee",
        "Break Buld",
        "ACA",
        "CMR"
      ]
    }
  };
  // object declaring the desired change
  const updateData = {validTo: "2020-10-15"};


  // Query Data
  {
    const [queriedDate, setQueriedDate] = useState([]);
    const queryModel = useModel(modelName);
    useEffect(() => {loadData()}, []);
    console.log("queriedDate:", queriedDate);
    const loadData = async () => {
      const data = await queryModel.findAll({
        where: {
          $and: [
            //{ validFrom: { $lte: "2019-10-02" } },
           where1,
            where2
          ]
        }
      });
      setQueriedDate(data);
    };
    const idList = [];
    queriedDate.map(chargeItem => {
      const listItem = {
        id: chargeItem.id,
        ...updateData
      };
      idList.push(listItem);
    });
    recordCount = idList.length;
    console.log("idList", idList);
    //queryModel.bulkUpdate(idList);
  }

  return (
    <View>
      <Text>Proposing Update of {recordCount} records.</Text>
      <Text>  </Text>
      <Text>
        Uncomment bulkUpdate( ) line and run again to complete update.
      </Text>
    </View>
  );
}
