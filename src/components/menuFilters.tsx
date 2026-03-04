export function MenuFilters() {
  return (
    <div className="py-4 flex items-center gap-3 flex-nowrap w-full overflow-x-auto">
      <button
        className="px-4 font-semibold py-1.5 bg-indigo-600 text-white rounded-full cursor-pointer"
        type="button"
      >
        Entradas
      </button>
      <button
        className="px-4 font-semibold py-1.5 bg-gray-200 text-gray-600 rounded-full cursor-pointer"
        type="button"
      >
        Burgers
      </button>
      <button
        className="px-4 font-semibold py-1.5 bg-gray-200 text-gray-600 rounded-full cursor-pointer"
        type="button"
      >
        Acompanhamentos
      </button>
      <button
        className="px-4 font-semibold py-1.5 bg-gray-200 text-gray-600 rounded-full cursor-pointer"
        type="button"
      >
        Bebidas
      </button>
    </div>
  );
}
