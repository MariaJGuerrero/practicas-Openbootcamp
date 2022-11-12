import FiltersContainer from "../containers/filters-containers"

const FilterOptions = () => {
    return(
        <div className='filters'>
            <FiltersContainer filter = 'SHOW_ALL'>
                ALL
            </FiltersContainer>
             <FiltersContainer filter = 'SHOW_ACTIVE'>
                ACTIVE
             </FiltersContainer>
             <FiltersContainer filter = 'SHOW_COMPLETED'>
                COMPLETED
             </FiltersContainer>
               
            
        </div>
    )
}

export default FilterOptions;
