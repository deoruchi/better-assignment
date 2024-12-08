
export const Card = (props:{title: string, body: string}) => {
  return (
    <>
    <div className='flex flex-1 flex-col text-center gap-2 rounded-lg shadow-lg bg-black p-4 w-[100%] md:w-[50%] lg:w-[40%]'>
    <img src=''>
    </img>
    <div>
    <h3 className='text-2xl font-semibold text-bgAmber'>{props.title}</h3>
    <p className='text-lg text-primaryText'>{props.body}</p>
    </div>

    </div>

    </>
  )
}
