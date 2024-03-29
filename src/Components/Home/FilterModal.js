import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import "../../CSS/FilterModal.css";

import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";

const FilterModal = ({selectedFilters, onFilterChange, onclose }) => {
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
  onclose();
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
  return (
    <>

    </>
  )
}

export default FilterModal;