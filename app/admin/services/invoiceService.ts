import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function generateInvoice(order: any) {
  const doc = new jsPDF();

  // Header
  doc.setFontSize(20);
  doc.setTextColor(0, 102, 204);
  doc.text("AR Stationers", 14, 20);

  doc.setFontSize(12);
  doc.setTextColor(80);

  doc.text(`Invoice #: ${order.id}`, 14, 30);
  doc.text(
    `Date: ${new Date(order.createdAt).toLocaleDateString()}`,
    14,
    38
  );

  // Customer Details
  doc.setFontSize(14);
  doc.setTextColor(0);
  doc.text("Customer Details", 14, 50);

  doc.setFontSize(11);

  doc.text(`Name: ${order.customerName}`, 14, 60);
  doc.text(`Phone: ${order.phone}`, 14, 68);
  doc.text(`Address: ${order.address}`, 14, 76);

  // Products Table
  autoTable(doc, {
    startY: 90,
    head: [["Product", "Qty", "Price", "Total"]],
    body: order.items.map((item: any) => [
      item.name,
      item.quantity,
      `Rs. ${item.price}`,
      `Rs. ${item.price * item.quantity}`,
    ]),
  });

  // Grand Total
  const finalY =
    (doc as any).lastAutoTable?.finalY ?? 100;

  doc.setFontSize(14);
  doc.text(
    `Grand Total: Rs. ${order.total}`,
    14,
    finalY + 15
  );

  doc.setFontSize(11);
  doc.setTextColor(100);

  doc.text(
    "Thank you for shopping with AR Stationers!",
    14,
    finalY + 30
  );

  doc.save(`Invoice-${order.id}.pdf`);
}