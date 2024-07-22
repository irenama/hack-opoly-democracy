const CommunityCard: React.FC<{ text: string }> = ( { text } ) => {
  return (
    <article className='flex flex-col shadow-lg bg-white w-80 h-[450px] p-5 md:h-80 md:w-[450px]'>
      <div className="p-5 h-full border-black border-2">
        <div className="min-h-32 py-5 text-center flex justify-center items-center">
          <p className="text-7xl">❇︎</p>
        </div>
        <p>{text}</p>
      </div>
    </article >
  )
}

export default CommunityCard;