import BoxIcon from "../boxIcon/boxIcon"

// this is a search input field
const SearchField = () =>{

    return(
        <div 
            className="p-2 pb-0.5 w-fit flex items-center gap-2 border-2 rounded-md border-low-l dark:border-low-d "
        >
            <button type="button">
                <BoxIcon name="search" size='sm' className="text-link-l dark:text-link-d" />
            </button>
            <input type="text" 
                name="query" 
                className="border-none pb-1 bg-transparent text-high-l dark:text-high-d focus:outline-none focus:border-none p-0"
            />
        </div>
    )
}

export default SearchField 