import { useState, useEffect } from "react";
import "./Rentals.css";

export const Rentals = () => {
  const [rentals, setrentals] = useState([])
  const [rentalsort, setrentalsort] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/houses").then((res) => res.json()).then((data) => { setrentals(data); setrentalsort(data) })
  }, []);

  const sortById = () => {
    const data = rentals.sort(function (a, b) {
      return a.id - b.id;
    })
    setrentalsort([...data])
  }
  const sortByAreaAsc = () => {
    const data = rentals.sort(function (a, b) {
      return a.areaCode - b.areaCode;
    })
    setrentalsort([...data])
  }
  const sortByAreaDesc = () => {
    const data = rentals.sort(function (a, b) {
      return b.areaCode - a.areaCode;
    })
    setrentalsort([...data])
  }
  const sortByRentAsc = () => {
    const data = rentals.sort(function (a, b) {
      return a.rent - b.rent;
    })
    setrentalsort([...data])
  }

  const sortByRentDesc = () => {
    const data = rentals.sort(function (a, b) {
      return b.rent - a.rent;
    })
    setrentalsort([...data])
  }
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={sortById}>Sort by ID</button>
        <button className="sortByRentAsc" onClick={sortByRentAsc}>Rent Low to high</button>
        <button className="sortByRentDesc" onClick={sortByRentDesc}>Rent High to low</button>
        <button className="sortByAreaAsc" onClick={sortByAreaAsc}>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={sortByAreaDesc}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {rentalsort.map((house, index) => (
            <tr key={house.id} className="houseDetails">
              <td className="houseId">{house.id}</td>
              <td className="houseName">{house.name} </td>
              <td className="ownersName">{house.ownerName}</td>
              <td className="address">{house.address}</td>
              <td className="areaCode">{house.areaCode}</td>
              <td className="rent">{house.rent}</td>
              <td className="preferredTenants">
                {house.preferredTenants}
              </td>
              <td className="houseImage">
                <img src={house.image} alt="house" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
