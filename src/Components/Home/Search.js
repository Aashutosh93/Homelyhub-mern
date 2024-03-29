import React, { useState } from "react";

import { DatePicker, Space } from "antd";

const Search = () => {
  const {RangePicker}  = DatePicker;
  const [Keyword, setkeyword] = useState({});
  const [value, setValue] = useState([]);

  function returnDates( date, dateString){
    setValue([date[0],date[1]]);

    updateKeyword("dateIn", dateString[0]);
    updateKeyword("dateIOut", dateString[1]);

  }
  const updateKeyword = (field, value)=>{
    setkeyword((prevKeyword) => ({
      ...prevKeyword,
      [field]: value,

    }));
  };
  return (
    <>
    <div className='Searchbar'>
      <input
      className='search'
      id='search_destination'
      placeholder='Search destinations'
      type='text'
      value={Keyword.city}
      onChange={(e) => updateKeyword("city", e.target.value)}
      />

      <Space direction='vertical' size={12} className='search'>
        <RangePicker 
        value={value}
        format="YYYY-MM-DD"
        picker='date'
        className='date_picker'
        disabledDate={(current ) => {
          return current && current.isBefore(Date.now(), "day");
        }}
        onChange={returnDates}
        />
      </Space>

      <input
      className='search'
      id='addguest'
      placeholder='Add Guest'
      type='number'
      value={Keyword.guest}
      onChange={(e) => updateKeyword("guests", e.target.value)}
      />

<span class="material-symbols-outlined searchicon">
search
</span>

    </div>

    </>
  )
}

export default Search;