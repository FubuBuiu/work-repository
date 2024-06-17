import { EntityRouters } from './EntityRouters';
import { InspectionRouters } from './InspectionRouters';
import { MovimentRouters } from './MovimentRouters';
import { ProductRouters } from './ProductRouters';
import { StockControlRouters } from './StockControlRouters';
import { UtilitiesRouters } from './UtilitiesRouters';

const GlobalRouters = {
    entity: EntityRouters,
    product: ProductRouters,
    stockControl: StockControlRouters,
    utilitie: UtilitiesRouters,
    inspection: InspectionRouters,
    moviment: MovimentRouters
};

export { EntityRouters, GlobalRouters, ProductRouters };
