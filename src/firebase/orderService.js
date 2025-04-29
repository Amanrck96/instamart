import { db } from './config';
import { collection, addDoc, updateDoc, doc, onSnapshot, query, orderBy } from 'firebase/firestore';
import store from '../store/store';
import { addOrder, updateOrderStatus, addNotification, setOrders, setLoading, setError } from '../store/slices/orderSlice';

// Collection reference
const ordersRef = collection(db, 'orders');

// Create a new order
export const createOrder = async (orderData) => {
  try {
    store.dispatch(setLoading(true));
    const orderDoc = await addDoc(ordersRef, {
      ...orderData,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    
    store.dispatch(addNotification({
      id: Date.now(),
      type: 'success',
      message: 'Order placed successfully!'
    }));
    
    return orderDoc.id;
  } catch (error) {
    store.dispatch(setError(error.message));
    throw error;
  } finally {
    store.dispatch(setLoading(false));
  }
};

// Update order status
export const updateOrder = async (orderId, status) => {
  try {
    const orderRef = doc(db, 'orders', orderId);
    await updateDoc(orderRef, {
      status,
      updatedAt: new Date().toISOString()
    });
    
    store.dispatch(updateOrderStatus({ orderId, status }));
    store.dispatch(addNotification({
      id: Date.now(),
      type: 'info',
      message: `Order ${orderId} status updated to ${status}`
    }));
  } catch (error) {
    store.dispatch(setError(error.message));
    throw error;
  }
};

// Set up real-time listeners
export const setupOrderListeners = () => {
  const q = query(ordersRef, orderBy('createdAt', 'desc'));
  
  return onSnapshot(q, (snapshot) => {
    const orders = [];
    snapshot.forEach((doc) => {
      orders.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    store.dispatch(setOrders(orders));
    
    // Notify admin of new orders
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        store.dispatch(addNotification({
          id: Date.now(),
          type: 'info',
          message: `New order received from ${change.doc.data().customerName}`
        }));
      }
    });
  }, (error) => {
    store.dispatch(setError(error.message));
  });
};