// SPDX-License-Identifier: MIT
pragma solidity >= 0.4.21;

contract FavoriteNumber {
 uint favoriteNumber; 
 function getFavouriteNumber() external view returns(uint) {
  return favoriteNumber;
 }
 function setFavoriteNumber(uint _favoriteNumber) external {
  favoriteNumber = _favoriteNumber;
 }
}
