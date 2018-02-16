const showFilteredShips = (shipsArr, {text, nation, detail, rarity}) => {
  return shipsArr.filter(ship => {
    const nationFilter = ship.nation.toLowerCase().match(nation.toLowerCase());
    return nationFilter;
  })
}

export default showFilteredShips;