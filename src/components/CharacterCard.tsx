import { type Character } from "@/app/characters/page";

const CharacterCard: React.FC<{ data: Omit<Character, "id"> }> = ( { data } ) => {
  return (
    <article className='flex flex-col shadow-lg bg-white border-black border-4 w-72 md:w-80'>
      <div className="bg-blue-800 h-32 border-b-2 border-black"></div>
      <div className="p-5 bg-green-200 h-full">
        <div className="min-h-32 py-5 text-center flex justify-center items-center">
          <h4>{data.name}</h4>
        </div>
        <ul className="pt-2 h-auto text-base">
          {data.characteristics.map( ( characteristic, index ) => (
            <li key={index}>{characteristic}</li>
          ) )}
        </ul>
      </div>
    </article >
  )
}

export default CharacterCard;