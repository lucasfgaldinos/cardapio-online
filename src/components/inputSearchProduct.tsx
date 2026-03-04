import lupaImage from '../assets/icons/lupa.svg';

export function InputSearchProduct() {
  return (
    <div className="w-full flex items-center gap-2 bg-gray-200 rounded-full px-3 focus-within:ring-2 focus-within:ring-indigo-600/50">
      <img
        className="w-8 h-8 opacity-40"
        src={lupaImage}
        alt="Ícone de buscar produto"
      />
      <input
        className="outline-none w-full h-11 font-semibold"
        type="text"
        name="Buscar produto"
        placeholder="Digite o nome do produto"
      />
    </div>
  );
}
