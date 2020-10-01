console.clear();
import React, { useState, useEffect } from "react";
import { useModel } from "@bappo/sdk";
import { Text } from "bappo-components";

export default function QueryChargeItems() {
  const [airChargeItem, setAirChargeItem] = useState([]);
  const AirItems = useModel("AirFreightChargeItem");

  useEffect(() => loadData(), []);
  //console.log("airChargeItem:", airChargeItem);

  const loadData = async () => {
    const data = await AirItems.findAll({
      where: {
        $and: [
          {
            _createdAt: {
              $gt: "2020-09-22"
            }
          }
        ]
      }
    });
    setAirChargeItem(data);
  };

  const [seaChargeItem, setSeaChargeItem] = useState([]);
  const SeaItems = useModel("SeaFreightChargeItem");

  useEffect(() => loadData2(), []);

  //console.log("seaChargeItem:", seaChargeItem);

  const loadData2 = async () => {
    const data2 = await SeaItems.findAll({
      where: {
        $and: [
          {
            _createdAt: {
              $gt: "2020-09-23"
            }
          }
        ]
      }
    });
    setSeaChargeItem(data2);
  };

  // Query Wholesalers
  const [wholesalers, setWholesalers] = useState([]);
  const Wholesalers = useModel("Wholesaler");
  useEffect(() => loadData3(), []);

  //console.log("wholesalers:", wholesalers);

  const loadData3 = async () => {
    const data = await Wholesalers.findAll({});
    setWholesalers(data);
  };

  // Query CarrierRoutes with Relationships
  const [carrierRoutes, setCarrierRoutes] = useState([]);
  const CarrierRoutes = useModel("CarrierRoute");
  useEffect(() => loadData4(), []);

  //console.log("carrierRoutes:", carrierRoutes);

  const loadData4 = async () => {
    const data4 = await CarrierRoutes.findAll({
      include: [
        { as: "freightChargeItems" },
        { as: "wholesaler" },
        { as: "carrier" }
      ],
      limit: 100
    });
    setCarrierRoutes(data4);
  };

  // Query PortChargeItems
  const [portChargeItems, setportChargeItems] = useState([]);
  const PortChargeItems = useModel("PortChargeItem");
  useEffect(() => loadData5(), []);

  console.log("portChargeItems:", portChargeItems);

  const loadData5 = async () => {
    const data5 = await PortChargeItems.findAll({
      where: {
        $and: [{ lclType: { $ne: null } }, { carrier_id: { $ne: null } }]
      },
      limit: 100
    });
    setportChargeItems(data5);
  };

  return <Text>"Query Started"</Text>;
}

{
  /*
     { destinationPort_id: "31348" },
          { validFrom: { $lte: "2020-09-01" } },
          { validTo: { $gte: "2020-10-01" } }
          */
}
