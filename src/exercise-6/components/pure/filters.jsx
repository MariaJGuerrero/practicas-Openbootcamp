const Filters = ( { active, onClick, children }) => {
    if(active){
        return(
            <span className='active'>{children}</span>
        )
    }
        return(
            <button
                className='filter'
                onClick={(e) => {
                    e.preventDefault();
                    onClick();
                }}>
                    {children}
            </button>
        )
}

export default Filters;