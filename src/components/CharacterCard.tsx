import { type Character } from "@/app/page";

const CharacterCard: React.FC<{ data: Character }> = ( { data } ) => {
  return (
    <article className='flex flex-col shadow-lg bg-white border-black border-4 w-80'>
      {/* <h3>Character Card</h3> */}
      <div className="bg-red-500 h-20 border-b-2 border-black"></div>
      <div className="p-2">

        <div className="h-40 flex justify-center align-middle">
          <h4>{data.name}</h4>
        </div>
        <ul className="pt-2 h-auto">
          {data.characteristics.map( ( characteristic, index ) => (
            <li key={index}>{characteristic}</li>
          ) )}
        </ul>
      </div>
    </article >
  )
}

export default CharacterCard;