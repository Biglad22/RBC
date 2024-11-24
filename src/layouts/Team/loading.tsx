import imgSrc from '/LOGO.png';

///this acts as a loading page
const LoadingWall = ({error, className} : {error?: string|null, className?: string}) =>{
    return(
        <div className={'flex items-center justify-center flex-col gap-5 ' + (className || '')}>
            <img src={imgSrc} 
                alt="our logo"
                className=' w-8 h-8 animate-ping' 
            />
            {error && (<h4 className='text-high-l dark:text-high-d capitalize'>{error}</h4>)}
        </div>
    )
}

export default LoadingWall