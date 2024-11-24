
// this is a 404 page for routes that are non-existent
const NotFound = () =>{
    return(
        <div  className="w-full h-full flex flex-col justify-center items-center gap-3">
            <h1
                className="text-high-l dark:text-high-d font-bold"
            >
                Oops
            </h1>
            <h6 className="text-medium-l dark:text-medium-d">
                Page Not Found
            </h6>
        </div>
    )
}

export default NotFound;