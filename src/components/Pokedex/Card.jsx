export const Card = ({
  id,
  name,
  defaultImgUrl,
  description
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-xl border-4 border-red-600 w-60 transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
      <p className="text-right text-sm font-bold text-gray-500">
        #{String(id).padStart(3, '0')}
      </p>
      <img 
        src={defaultImgUrl} 
        alt={name} 
        className="mx-auto h-28 w-28 object-contain my-2" 
      />
      <h2 className="text-2xl text-center font-extrabold capitalize text-black border-t border-gray-200 pt-3">
        {name}
      </h2>
      <p className="text-xs text-gray-700 text-center italic mt-2">
        {description || 'Cargando descripción...'}
      </p>

    </div>
  );
};