function legendaryFarming(inputStr) {
  let arr = inputStr.toLowerCase().split(" ");

  let legendaryItems = {
    fragments: "Valanyr",
    shards: "Shadowmourne",
    motes: "Dragonwrath",
  };

  let keyMaterials = {
    fragments: 0,
    shards: 0,
    motes: 0,
  };

  let junkMaterials = {};

  let hasToBreak = false;

  for (let i = 0; i < arr.length; i += 2) {
    let quantity = Number(arr[i]);
    let material = arr[i + 1];

    if (
      material === "shards" ||
      material === "fragments" ||
      material === "motes"
    ) {
      hasToBreak = getQuantity(material, quantity);
      
    } else {
      if (!junkMaterials.hasOwnProperty(material)) {
        junkMaterials[material] = 0;
      }
      junkMaterials[material] += quantity;
    }
    if (hasToBreak) {
      break;
    }
  }

  function sorted() {
    let sortedKeyMaterials = Object.entries(keyMaterials).sort((a, b) => {
      return b[1] - a[1] || a[0].localeCompare(b[0]);
    });

    for (let [keyMaterial, keyQuantity] of sortedKeyMaterials) {
      console.log(`${keyMaterial}: ${keyQuantity}`);
    }

    let sortedJunkMaterials = Object.entries(junkMaterials).sort((a, b) => {
      return a[0].localeCompare(b[0]);
    });

    for (let [junkMaterial, junkQuantity] of sortedJunkMaterials) {
      console.log(`${junkMaterial}: ${junkQuantity}`);
    }
  }

  function getQuantity(material, quantity) {
    keyMaterials[material] += quantity;
    let hasToBreak = false;

    if (keyMaterials[material] >= 250 && material in legendaryItems) {
      keyMaterials[material] -= 250;
      console.log(`${legendaryItems[material]} obtained!`);
      hasToBreak = true;
      sorted();
    }
    return hasToBreak;
  }
}
legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
console.log("------");
legendaryFarming(
  "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);

