const Street: React.FC<{ text: string }> = ( { text } ) => {
  return (
    <article className='flex flex-col shadow-lg bg-white border-black border-4 w-80 h-[450px]'>
      <div className="p-5 bg-green-200 h-full">
        <div className="min-h-32 py-5 text-center flex justify-center items-center">
          <p className="text-7xl">☟</p>
        </div>
        <p>{text}</p>
      </div>
    </article >
  )
}

export default Street;