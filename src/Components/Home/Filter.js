import React,{useState} from 'react';
import FilterModal from './FilterModal';

const Filter = () => {
  const [isModleOpen , setIsModalOpen] = useState(false);

  const [ selectedFilters, setselectedfilters] = useState({});

  const handleOpenModal = () => {
    setIsModalOpen(true);

  };
  const handleCloseModal =() =>{
    setIsModalOpen (false);
  };

  const handleFilterChange = (filtername, value)=> {
    setselectedfilters((prevFilter) => ({
      ...prevFilter,
      [filtername]:value,
    }));
  };

  return (
    <>
      <span class="material-symbols-outlined filter" onClick={handleOpenModal}>
tune
</span>
{isModleOpen && (
  <FilterModal
  selectedFilters={selectedFilters}
  onFilterchange={handleFilterChange}
  onClose={handleCloseModal}
  />
)}
    </>
  )
}

export default Filter;