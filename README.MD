# Nodejs Tokopedia Open Api Client

this project started as my goal to use tokopedia api easily. this project has not fully tested yet. but basic functions still function perfectly.

for more use case please refer to test file.


Wrote Using Typescript and Type Definition for request and response.
Fully well documented and modulated.

## Usage
```
npm install tokopedia-client
```

## Basic Usage
```
let client = new TokopediaClient({
  fs_id: 'YOUR FS ID',
  client_id: 'YOUR CLIENT ID',
  client_secret: 'YOUR CLIENT SECRET'
})
await client.authenticate();
let result = await client.product.getProductInfo(undefined, [
  'https://www.tokopedia.com/shop-api9/testing-flash-sale-1'
]);
console.log(response);
```

There is 8 modules :
- Chat (chat)
- Logistic (logistic)
- Order (order)
- Product (product)
- Shop (shop)
- Statisic  (statistic)
- Webhook (webhook)
- Multi Origin  => for now this is not implemented (not production ready)

The left is the module name the right side is the name in client object.
for example Shop module is called this way :
```
client.shop.getShopInfo(57656372);
```

This Client made at last announcement on https://developer.tokopedia.com/openapi/guide/#/changelog:
- 24.04.2020 ~ Add Delete Product V2 here

## Reference

for more detail look at: https://developer.tokopedia.com/openapi/guide/

## Author

Made with ♡♥💕❤ By Aqualaguna (ricardosentinel7@gmail.com).

## License

MIT LICENSE

Copyright 2020 Ricardo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.