import * as controller from './product.controller';

const ROUTE_NAME = '/product';
export default route => {
  route.post(`${ROUTE_NAME}`, controller.add);
  route.put(`${ROUTE_NAME}/:id`, controller.update);
  route.put(`${ROUTE_NAME}/status/:status`, controller.changeStatus);
  route.get(`${ROUTE_NAME}`, controller.getAll);
  return route;
};
