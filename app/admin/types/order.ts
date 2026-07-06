export interface Order {
  id?: string;

  customerName: string;

  phone: string;

  address: string;

  notes: string;

  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];

  total: number;

  paymentMethod: string;

  transactionId?: string;

  status:
    | "Pending"
    | "Processing"
    | "Delivered"
    | "Cancelled";

  createdAt: number;
}