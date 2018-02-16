const showFilteredShips = (shipsArr, {text, nation, detail, rarity}) => {
  return shipsArr.filter(ship => {
    const nationFilter = ship.nation.toLowerCase().match(nation.toLowerCase());
    const detailsFilter = detail.length === 0 || ship.details[detail];
    const rarityFilter = rarity.length === 0 || rarity === ship.rarity;
    return nationFilter && detailsFilter && rarityFilter;
  })
}

export default showFilteredShips;