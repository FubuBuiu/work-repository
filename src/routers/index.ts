import { DaeRouters } from './DaeRouters';
import { EntitysRouter } from './EntityRouters';
import { ProductRouters } from './ProductRouters';

const GlobalRouters = {
    entity: EntitysRouter,
    product: ProductRouters,
    dae: DaeRouters
};

export { EntitysRouter, GlobalRouters, ProductRouters, DaeRouters };
