
  //get a set of unique key fields
  const uniqueItemKeys = new Set (items.map((item)=>`${item.label}|${item.calculationType}`));
  console.log('uniqueItemKeys:',uniqueItemKeys);
  // sort the items to get the latest rates at the top
  let sortedItems;
  if (items[0]._createdAt) {
    sortedItems = items.sort((a, b) => {
      if (moment(a._createdAt).isAfter(moment(b._createdAt)) ){
        return -1;
      } else {
        return 1;
      }
  })}
  // return the first item found in the sorted list (should be the one with the newest rate)
  const uniqueItems : Item[] = [];
  
  uniqueItemKeys.forEach((key)=>{
    const [label, calculationType]= key.split("|");
    console.log('key:',key);
    const firstItem = sortedItems.find((item)=>item.label===label && item.calculationType===calculationType);
    console.log('firstItem:',firstItem);
    uniqueItems.push(firstItem)})

  const freightItems = _.sortBy(uniqueItems.filter(isFreight), ['label']);
  const surchargeItems = _.sortBy(uniqueItems.filter(isFreightSurcharge), ['label']);
