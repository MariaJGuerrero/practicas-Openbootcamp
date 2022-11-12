import { connect } from "react-redux"
import Filters from "../pure/filters"
import { setVisibilityFilter } from "../../store/actions/actions"


const mapStateToProps = (state, ownProps) => {  
    return {
        active: ownProps.filter === state.filterState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
       onclick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
       }
    }
}

const FiltersContainer = connect(mapStateToProps, mapDispatchToProps)(Filters)
export default FiltersContainer;