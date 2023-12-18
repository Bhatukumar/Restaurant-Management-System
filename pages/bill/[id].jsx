import { PDFDocument, rgb } from 'pdf-lib';

// Function to generate a PDF bill for an order
async function generateBill(order) {
  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();

  // Add a new page to the document
  const page = pdfDoc.addPage([600, 400]);

  // Create a text content object to draw text on the page
  const content = page.drawText();
  content.setFontSize(12);

  // Position to start drawing text
  let y = 350;

  // Add order details to the bill
  content.drawText(`Customer: ${order.customer}`, { x: 50, y, color: rgb(0, 0, 0) });
  y -= 20;
  content.drawText(`Address: ${order.address}`, { x: 50, y, color: rgb(0, 0, 0) });
  y -= 20;

  // Loop through the products in the order and add them to the bill
  for (const product of order.products) {
    content.drawText(`${product.name} - $${product.price}`, { x: 50, y, color: rgb(0, 0, 0) });
    y -= 20;
  }

  // Calculate the total
  const total = order.products.reduce((acc, product) => acc + product.price, 0);
  content.drawText(`Total: $${total}`, { x: 50, y, color: rgb(0, 0, 0) });

  // Save the PDF as bytes
  const pdfBytes = await pdfDoc.save();

  return pdfBytes;
}

// Example usage:
// const order = {
//   customer: "John Doe",
//   address: "123 Main St",
//   products: [
//     { name: "Product 1", price: 20.00 },
//     { name: "Product 2", price: 30.00 },
//     // Add more products as needed
//   ],
// };

generateBill(order).then((pdfBytes) => {
  // Handle the generated PDF bytes, e.g., save or send to the client for download
});
