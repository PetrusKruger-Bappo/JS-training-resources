console.clear();
import React, { useState, useEffect } from "react";
import { useModel } from "@bappo/sdk";
import { View, Text } from "bappo-components";

export default function DataUpdate() {
  let recordCount = 0;
  // Query AirTerminalCharges
  if (true) {
    const [airTerminalCharges, setairTerminalCharges] = useState([]);
    const airTerminalChargesModel = useModel("AirTerminalChargeItem");
    useEffect(() => loadData(), []);
    console.log("airTerminalCharges:", airTerminalCharges);
    const loadData = async () => {
      const data = await airTerminalChargesModel.findAll({
        where: {
          $and: [
            //{ validFrom: { $lte: "2019-10-02" } },
            { validTo: { $gte: "2020-10-11" } },
            {
              label: {
                $in: [
                  "Document Fee",
                  "Terminal Fee",
                  "Break Buld",
                  "ACA",
                  "CMR"
                ]
              }
            }
          ]
        }
      });
      setairTerminalCharges(data);
    };
    const idList = [];
    airTerminalCharges.map(chargeItem => {
      const listItem = {
        id: chargeItem.id,
        validTo: "2020-10-15"
      };
      idList.push(listItem);
    });
    recordCount = idList.length;
    console.log("idList", idList);
    //airTerminalChargesModel.bulkUpdate(idList);
  }

  return (
    <View>
      <Text>Proposing Update of {recordCount} records.</Text>
      <Text>Expecting 47 records.</Text>
      <Text>
        Uncomment bulkUpdate( ) line and run again to complete update.
      </Text>
    </View>
  );
}
