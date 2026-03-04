import { InputSearchProduct } from './inputSearchProduct';
import { MenuFilters } from './menuFilters';

export function Menu() {
  return (
    <div className="px-4">
      <InputSearchProduct />

      <MenuFilters />
    </div>
  );
}
