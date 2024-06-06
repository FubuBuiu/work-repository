import { EntitysRouter } from './EntityRouters';
import { ProductRouters } from './ProductRouters';

const GlobalRouters = {
    entity: EntitysRouter,
    product: ProductRouters
};

export { EntitysRouter, GlobalRouters, ProductRouters };
