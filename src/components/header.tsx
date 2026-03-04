import cartImage from '../assets/icons/cart.svg';

export function Header() {
  return (
    <div className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="text-xs w-10 h-10 bg-indigo-600 flex items-center justify-center rounded-full" />

        <h1 className="font-bold">Brasa Burger House</h1>
      </div>

      <button
        type="button"
        className="p-2 cursor-pointer"
        name="Mostrar pedido"
      >
        <img className="w-5 h-5" src={cartImage} alt="Ícone de pedido" />
      </button>
    </div>
  );
}
