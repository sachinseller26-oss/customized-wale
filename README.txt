CUSTOMIZED WALE – WEBSITE FILES
================================

Files
-----
index.html    Homepage
product.html  Product page (Acrylic Photo Frame) with photo upload + live preview
style.css     All colours, fonts and layout
script.js     Your settings: WhatsApp number, categories, products and prices

1. See it on your computer
--------------------------
Unzip the folder and double-click index.html. It opens in your browser.

2. Fill in your details
-----------------------
Open the files in a text editor (Notepad, or free VS Code: code.visualstudio.com).

In script.js (top of the file):
  - SETTINGS.whatsapp  -> your number with 91, e.g. "919876543210"
  - PRODUCTS           -> product names and starting prices
  - FRAME_OPTIONS      -> price for each frame size (0 shows as "₹ ___")

In index.html and product.html:
  - Replace everything in [square brackets]: offer, phone, email, address,
    delivery time, return policy, reviews.

3. Add your photos
------------------
Make a folder called "images" next to index.html and put your photos in it.
  - Categories / products: add  image: "images/mug.jpg"  in script.js, e.g.
      { name: "Photo Mugs", image: "images/mug.jpg" },
  - Hero and other boxes in the HTML: replace the placeholder <div> with
      <img src="images/your-photo.jpg" alt="describe the photo">

4. Put it online (free)
-----------------------
Netlify: go to app.netlify.com/drop and drag this whole folder onto the page.
You get a live link in seconds. Later you can connect your own domain
(e.g. customizedwale.in).

Important limits
----------------
This is the front end only. Right now:
  - "Buy now" sends the order details to your WhatsApp.
  - The cart is saved only in the visitor's browser.
  - Uploaded photos show in the preview but are NOT sent to you
    (the customer sends the photo on WhatsApp).
To take online payments and receive photos automatically you need a backend:
a payment gateway (Razorpay / Cashfree) plus a server or a store platform
(Shopify / WooCommerce). A developer can connect these files to one.
