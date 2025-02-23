import catchAsync from '../../utility/catchAsync';
import sendResponse from '../../utility/sendResponse';
import { OrderServices } from './order.service';

const createOrder = catchAsync(async (req, res) => {
  const user = req.user;
  const order = await OrderServices.createOrder(user, req.body, req.ip!);
  const isHas = order ? true : false;
  sendResponse(res, {
    statusCode: isHas ? 200 : 404,
    success: isHas ? true : false,
    message: isHas ? 'order created successfully' : ' order confirmed',
    data: isHas ? order : [],
  });
});

const getAllOrder = catchAsync(async (req, res) => {
  const orders = await OrderServices.getOrders();
  const isHas = orders ? true : false;
  sendResponse(res, {
    statusCode: isHas ? 200 : 404,
    success: isHas ? true : false,
    message: isHas
      ? 'All Orders retrieved successfully'
      : 'there is no order available',
    data: isHas ? orders : [],
  });
});


//verify payment
const verifyPayment = catchAsync(async (req, res) => {
  const order = await OrderServices.verifyPayment(req.query.order_id as string);
  
  sendResponse(res, {
    success: true,
    message: 'Order retrieve successfully!',
    statusCode: 200,
    data: order,
  });
});

export const OrderControllers = {
  createOrder,
  getAllOrder,
  verifyPayment,
};
