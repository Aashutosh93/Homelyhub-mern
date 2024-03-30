import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import "../../CSS/FilterModal.css";

import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";

const FilterModal = ({selectedFilters, onFilterChange, onClose }) => {
  const [priceRange, setPriceRange] = useState({
    min: selectedFilters.priceRange?.min || 600,
    max: selectedFilters.priceRange?.max || 3000,

  });
  const [propertyType, setPropertyType] = useState(
    selectedFilters.proprtyType ||""
  );

  const [roomType, setRoomType] =useState(selectedFilters.roomType ||" ");
  const [amenities, setAmenities] = useState(selectedFilters.amenities || []);

  useEffect(() =>{
    setPriceRange({
      min: selectedFilters.priceRange?.min || 600,
      max: selectedFilters.priceRange?.max || 3000,
  
    });
    setPropertyType(selectedFilters.propertyType || "");
    setRoomType(selectedFilters.roomType || "");
    setAmenities(selectedFilters.amenities || []);

  }, [selectedFilters]);

  const handlePriceRangeChange = (value) =>{
  setPriceRange(value)
};

const handleMinInputChange = (e) =>{
  const minValue = parseInt(e.tarrgrt.value, 10);
  setPriceRange((prev) => ({...prev, min: minValue }));
};
const handleMaxInputChange = (e) =>{
  const maxValue = parseInt(e.tarrgrt.value, 10);
  setPriceRange((prev) => ({...prev, max: maxValue }));
};

const handleFilterChange = () => {
  onFilterChange("minPrice", priceRange.min);
  onFilterChange("maxPrice", priceRange.max);
  onFilterChange("propertyType", propertyType);
  onFilterChange("roomType", roomType);
  onFilterChange("amenities", amenities);
  onClose();
};

const propertyTypeOptions =[
  {
    value:"House",
    label:"House",
    icon: "house,"
  }, 
  { value:"Flat", label:"Flat", icon: "apartment"},
  {
    value:" Guest House",
    label:" Guest House",
    icon: "hotel,"
  },
  { value:"Hotel", label:"Hotel", icon: "meeting room"},
];

//options fpr room
const roomTypeOptions =[
  {
    value:"Entire Room",
    label:"HEntire Room",
    icon: "hotel,"
  }, 
  { value:"Room", 
  label:"Room", 
  icon: "meeting room"
  },
  {
    value:" AntType",
    label:" AnyType",
    icon: "Aparment,"
  },
  
];
const aminitiesOptions =[
  {
    value:"Wifi",
    label:"Wifi",
    icon: "Wifi,"
  }, 
  { value:"Kitchen", 
  label:"kitchen", 
  icon: "Kitchen"
  },
  {
    value:" Ac",
    label:" AC",
    icon: "ac_unit,"
  },
  {
    value:" Washing machine",
    label:" Washing Machine",
    icon: "local_laundary_service,"
  },
  {
    value:" Tv",
    label:" TV",
    icon: "tv,"
  },
  {
    value:" Pool",
    label:" Pool",
    icon: "pool,"
  },
  {
    value:" Free Parking",
    label:" Free Parking",
    icon: "local_parking,"
  },
];

//function to handle aminities
const handleClearFilters = ( ) => {
  setPriceRange({ min: 600, max:3000, });
  setPropertyType("");
  setRoomType("");
  setAmenities([]);

};

//function to handle changes in amenities

const handleAmenitiesChanges =(selectedAmenity) =>{
  setAmenities((prevAmenities)=> prevAmenities.include(selectedAmenity)
  ? prevAmenities.filter((item)=> item!== selectedAmenity)
  :[...prevAmenities,selectedAmenity]
  );
};

// function to handle changes in propertytype
const handlePropertyTypeChange = (selectedType) => {
  setPropertyType((prevType) =>
  prevType === selectedType ? "": selectedType
  );
};
// function to handle changes in room type
const handleRoomTypeChanges = (selectedType) => {
  setRoomType((prevType) =>
  prevType === selectedType ? "": selectedType
  );
};

  return (
    <>
    <div className='modal-backdrop'>
      <div className='modal-content'>
        <h4>
          Filter <hr/>
        </h4>
        {/*close button */}
        <button className='close-button' onClick={onClose}>
        <span>&times;</span>
        </button>

        {/* filter section */}
        <div className='modal-filters-container'>
          <div className='filter-section'>
            <label>Price Range:</label>
            <InputRange
            minVlue={600}
            maxValue={3000}
            value={priceRange}
            onChange={handlePriceRangeChange}
            
            />
            <div className='range-input'>
            <input
            type='number'
            value={priceRange.min}
            onChange={handleMinInputChange}
            />
            <span>-</span>
            <input
            type="number"
            value={priceRange.max}
            onchange={handleMaxInputChange}
            />
            </div>

          </div>

          {/*Property type filter */}

          <div className='filtersection'>
            <label>Proprty Type:</label>
            <div className='icon-box'>
              {propertyTypeOptions.map((options) =>(
                <div key={Option.value}
                className={`selectable-box ${propertyType === options.value ? "selected" :"" }`}
                onClick={() => handlePropertyTypeChange (options.value)}
                >
                  <span className='material-icons'>{options.icon}</span>
                  <span>{options.label}</span>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default FilterModal;