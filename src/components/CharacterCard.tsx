import { type Character } from "@/app/page";

const CharacterCard: React.FC<{ data: Omit<Character, "id"> }> = ( { data } ) => {
  return (
    <article className='flex flex-col shadow-lg bg-white border-black border-4 w-80'>
      <div className="bg-red-500 h-20 border-b-2 border-black"></div>
      <div className="p-5">

        <div className="min-h-40 py-5 text-center flex justify-center items-center">
          <h3>{data.name}</h3>
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