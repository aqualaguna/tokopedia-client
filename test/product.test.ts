import TokopediaClient from '../src/index';
import BaseError from '../src/error/response/BaseError';
import { SortOption } from '../src/modules/product/request/getProductByShopRequest';
import { ProductCondition, ProductQtyStatus, WeightUnit, PriceCurrency, Product } from '../src/modules/product/request/CreateProductRequest';
import { UpdateProductItem } from '../src/modules/product/request/UpdateProductRequest';

let client: TokopediaClient;

beforeAll(async() => {
   // using test account 9 openapi+seller9@tokopedia.com
   client = new TokopediaClient({
    fs_id: '13398',
    client_id: 'c782b33ecdd04b669772f25aff41335e',
    client_secret: '79c8a04cf24c4693a1d1a86048a3cb51'
  });
  await client.authenticate();
})

describe('Product Test', () => {
  it('should fail get product', async () => {
    expect.assertions(1);
    try {
      let result = await client.product.getProductInfo();
    
    } catch(e) {
      expect(e).toBeInstanceOf(BaseError);
    }
    
  });

  it('should success get product', async () => {
    expect.assertions(0);
    try {
      let result = await client.product.getProductInfo(undefined, [
        'https://www.tokopedia.com/shop-api9/testing-flash-sale-1'
      ]);
    } catch(e) {
      expect(e).toBeInstanceOf(BaseError);
    }
    
  });

  it('should success get by related shop', async () => {
    /**
     * this api has some problem. wait for bug fix
     */
    // shop openapi+seller1@tokopedia.com
    let shop_id = 479573
    expect.assertions(1);
    try {
      console.log({
        shop_id,
        page: 1,
        per_page: 2,
        sort: SortOption.Default
      })
      let result = await client.product.getProductByShop({
        shop_id,
        page: 1,
        per_page: 2,
        sort: SortOption.Default
      });
      console.log(result)
    } catch(e) {
      console.log(e)
      expect(e).toBeInstanceOf(BaseError);
    }
    
  });

  it('should success get all Product', async () => {
    expect.assertions(0);
    try {
      let result = await client.product.getAllProduct({
        page: 1,
        per_page: 10,
      });
      console.log(JSON.stringify(result, null, '\t'))
    } catch(e) {
      expect(e).toBeInstanceOf(BaseError);
    }
    
  });


  it('should success delete a Product', async () => {
    expect.assertions(0);
    try {
      let shop_id = 8212734;
      let temp = await client.product.getAllProduct({
        page: 1,
        per_page: 10,
      });
      let randomIndex = Math.round(Math.random() * (temp.data.length -1));
      let product = temp.data[randomIndex];
      console.log(product);
      let result = await client.product.deleteProduct(shop_id, [product.product_id])
      console.log(JSON.stringify(result, null, '\t'))
    } catch(e) {
      console.log(e)
      expect(e).toBeInstanceOf(BaseError);
    }
    
  });

  it('should success update price only', async () => {
    expect.assertions(0);
    try {
      let shop_id = 8212734;
      let temp = await client.product.getAllProduct({
        page: 1,
        per_page: 10,
      });
      let randomIndex = Math.round(Math.random() * (temp.data.length -1));
      let product = temp.data[randomIndex];
      console.log(product);
      let result = await client.product.updateProductPrice({
        shop_id,
        update_details: [
          {
            new_price: 1000,
            product_id: product.product_id
        
          }
        ]
      });
      console.log(JSON.stringify(result, null, '\t'))
      console.log(await client.product.getProductById(product.product_id))
    } catch(e) {
      console.log(e)
      expect(e).toBeInstanceOf(BaseError);
    }
    
  });


  it('should success update stock only', async () => {
    expect.assertions(0);
    try {
      let shop_id = 8212734;
      let temp = await client.product.getAllProduct({
        page: 1,
        per_page: 10,
      });
      let randomIndex = Math.round(Math.random() * (temp.data.length -1));
      let product = temp.data[randomIndex];
      console.log(product);
      let result = await client.product.updateProductStock({
        shop_id,
        update_details: [
          {
            new_stock: 1230,
            product_id: product.product_id
          }
        ]
      });
      console.log(JSON.stringify(result, null, '\t'))
      console.log(await client.product.getProductById(product.product_id))
    } catch(e) {
      console.log(e)
      expect(e).toBeInstanceOf(BaseError);
    }
    
  });


  it('should success get product by sku', async () => {
    expect.assertions(0);
    try {
      let result = await client.product.getProductBySku('TESTSTOCK2');
      console.log(JSON.stringify(result, null, '\t'))
    } catch(e) {
      expect(e).toBeInstanceOf(BaseError);
    }
    
  });

  it('should success get all active Product', async () => {
    // shop openapi+seller1@tokopedia.com
    let shop_id = 8212471
    expect.assertions(0);
    try {
      let result = await client.product.getAllActiveProduct({
        shop_id,
        rows:2,
        start: 1,
      });
    } catch(e) {
      expect(e).toBeInstanceOf(BaseError);
    }
  });


  it('should success get recommended category', async () => {
    // shop openapi+seller1@tokopedia.com
    expect.assertions(0);
    try {
      let result = await client.product.getCategoryRecommend('sepatu nike');
      console.log(JSON.stringify(result, null, '\t'))
    } catch(e) {
      console.log(e)
      expect(e).toBeInstanceOf(BaseError);
    }
  });
  /**
   *  {
        "id": 1845,
        "name": "Fashion Pria / Sepatu Pria / Sneakers Pria",
        "__typename": "CategoryList"
      }
   */
  it('should success get variant by category', async () => {
    let cat_id = 1845;
    expect.assertions(0);
    try {
      let result = await client.product.getVariantByCategory(cat_id);
      console.log(JSON.stringify(result, null, '\t'))
    } catch(e) {
      expect(e).toBeInstanceOf(BaseError);
    }
  });
  /**
   * 791019132
   */

  it('should success get variant by product', async () => {
    let product_id = 791019132;
    expect.assertions(0);
    try {
      let result = await client.product.getVariantByProduct(product_id);
      console.log(JSON.stringify(result, null, '\t'))
    } catch(e) {
      expect(e).toBeInstanceOf(BaseError);
    }
  });


  it('should success get etalase', async () => {
    expect.assertions(0);
    try {
      let result = await client.product.getEtalase(8212734);
      console.log(JSON.stringify(result, null, '\t'))
    } catch(e) {
      console.log(e)
      expect(e).toBeInstanceOf(BaseError);
    }
  });

  it('should fail get other shop etalase', async () => {
    expect.assertions(1);
    try {
      let result = await client.product.getEtalase(8212471);
    } catch(e) {
      expect(e).toBeInstanceOf(BaseError);
    }
  });

  it('should success check status', async () => {
    expect.assertions(0);
    try {
      let result = await client.product.checkStatus(8212734, 1352080);
      console.log(JSON.stringify(result, null, '\t'));
    } catch(e) {
      console.log(e)
      expect(e).toBeInstanceOf(BaseError);
    }
  });

  
  it('should success set inactive product', async () => {
    expect.assertions(0);
    try {
      let shop_id = 8212734;
      let products = (await client.product.getAllActiveProduct( {
        rows: 10,
        start: 1,
        shop_id,
      })).products;
      let randomIndex = Math.round(Math.random() * (products.length - 1) );
      let product = products[randomIndex];
      console.log(product)
      let result = await client.product.setInactiveProduct(shop_id, [product.id]);
      console.log(JSON.stringify(result, null, '\t'));
      console.log( await client.product.getAllProduct({
        page: 1,
        per_page: 10,
        product_id: product.id
      }))
    } catch(e) {
      console.log(e)
      expect(e).toBeInstanceOf(BaseError);
    }
  });

  it('should success set active product', async () => {
    expect.assertions(0);
    try {
      let shop_id = 8212734;
      // let products = (await client.product.getAllActiveProduct( {
      //   rows: 10,
      //   start: 1,
      //   shop_id,
      // })).products;
      // let randomIndex = Math.round(Math.random() * (products.length - 1) );
      // let product = products[randomIndex];
      // console.log(product)
      // let result = await client.product.setActiveProduct(shop_id, [791584868]);
      // console.log(JSON.stringify(result, null, '\t'));
      let temp = await client.product.getAllActiveProduct({
        shop_id,
        rows: 100,
        start: 1,
      })
      
      console.log(temp.products.find(t => t.id == 791584868))
    } catch(e) {
      console.log(e)
      expect(e).toBeInstanceOf(BaseError);
    }
  });

  it('should success create product', async () => {
    expect.assertions(0);
    try {
      let shop_id = 8212734;
      let categories = await client.product.getCategoryRecommend('Jacket Hoodie Merah');
      let randomIndex = Math.round(Math.random() * (categories.length - 1));

      let category = categories[randomIndex];
      let etalases = (await client.product.getEtalase(shop_id)).etalase;
      randomIndex = Math.round(Math.random() * (etalases.length - 1));

      let etalase : any = etalases[randomIndex]
      let product: any =  {
        name: 'Product Test 1',
        category_id: category.id,
        condition: ProductCondition.NEW,
        etalase: {
          id: etalase.etalase_id,
          // name: etalase.name
        },
        price_currency: PriceCurrency.IDR,
        min_order: 1,
        price: 10000,
        status: ProductQtyStatus.LIMITED,
        weight: 500,
        weight_unit: WeightUnit.GR,
        description: 'Product Testing Descr V2',
        is_must_insurance: false,
        is_free_return: false,
        sku: 'TST222',
        stock: 900,
        pictures: [
          {
            file_path: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Strawberry_BNC.jpg'
          }
        ],
      }
      // console.log(JSON.stringify(product, null, '\t'));
      let result = await client.product.createProduct({
        shop_id,
        products: [
         product
        ]
      });
      // check result
      let check = await client.product.checkStatus(shop_id, result.upload_id);
      // console.log(JSON.stringify(check, null, '\t'))
    } catch(e) {
      expect(e).toBeInstanceOf(BaseError);
    }
  });


  it('should success create product with Variant', async () => {
    expect.assertions(0);
    try {
      let shop_id = 8212734;
      let categories = await client.product.getCategoryRecommend('Jacket Hoodie Merah');
      let randomIndex = Math.round(Math.random() * (categories.length - 1));

      let category = categories[randomIndex];
      let etalases = (await client.product.getEtalase(shop_id)).etalase;
      randomIndex = Math.round(Math.random() * (etalases.length - 1));
      let etalase : any = etalases[randomIndex]
      let variants = await client.product.getVariantByCategory(category.id);
      // console.log(JSON.stringify(variants, null, '\t'));
      let product: Product =  {
        videos: [],
        wholesale: [],
        preorder: {
          is_active: false,
          duration: 0,
          time_unit: 'DAYS'
        },
        name: 'Product Test 1 WITH VARIANT',
        category_id: category.id,
        condition: ProductCondition.NEW,
        etalase: {
          id: etalase.etalase_id,
          // name: etalase.name
        },
        price_currency: PriceCurrency.IDR,
        min_order: 1,
        price: 10000,
        status: ProductQtyStatus.LIMITED,
        weight: 500,
        weight_unit: WeightUnit.GR,
        description: 'Product Testing Descr V2',
        is_must_insurance: false,
        is_free_return: false,
        sku: 'TST223',
        stock: 10,
        pictures: [
          {
            file_path: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Strawberry_BNC.jpg'
          }
        ],
        variant: {
          sizecharts:[],

          products: [
            {
              is_primary: true,
              price: 20000,
              stock: 10,
              sku: 'TST222',
              status: ProductQtyStatus.LIMITED,
              combination: [0, 0],
              pictures: [
                {
                  file_path: 'https://www.forever21.com/images/1_front_750/00402231-03.jpg'
                }
              ]
            },
            {
              is_primary: false,
              price: 20001,
              stock: 10,
              sku: 'TST222',
              status: ProductQtyStatus.LIMITED,
              combination: [0, 1],
              pictures: [
                {
                  file_path: 'https://www.forever21.com/images/2_side_750/00402231-03.jpg'
                }
              ]
            },
            {
              is_primary: false,
              price: 20002,
              stock: 10,
              sku: 'TST222',
              status: ProductQtyStatus.LIMITED,
              combination: [1, 0],
              pictures: [
                {
                  file_path: 'https://www.forever21.com/images/3_back_750/00395391-03.jpg'
                }
              ]
            },
            {
              is_primary: false,
              price: 20003,
              stock: 10,
              sku: 'TST222',
              status: ProductQtyStatus.LIMITED,
              combination: [1, 1],
              pictures: [
                {
                  file_path: 'https://www.forever21.com/images/2_side_750/00395391-03.jpg'
                }
              ]
            }
          ],
          selection: [
            {
              id: 6,
              unit_id: 7,
              options: [
                {
                        "unit_value_id": 24,
                        "value": "S",
                        "hex_code": "",
                },
                {
                        "unit_value_id": 25,
                        "value": "M",
                        "hex_code": "",
                },
              ]
            },
            {
              id: 1,
              unit_id: 0,
              options: [
                {
                  "unit_value_id": 11,
                  "value": "Merah",
                  "hex_code": "#ffffff",
                },
                {
                  "unit_value_id": 13,
                  "value": "Kuning",
                  "hex_code": "#ffff00",
                },
              ]
            }
          ]
        }
      }
      // console.log(JSON.stringify(product, null, '\t'));
      let result = await client.product.createProduct({
        shop_id,
        products: [
         product
        ]
      });
      // check result
      console.log(result.upload_id)
      let check = await client.product.checkStatus(shop_id, result.upload_id);
      console.log(JSON.stringify(check, null, '\t'))
    } catch(e) {
      expect(e).toBeInstanceOf(BaseError);
    }
  });
  it('should success update product with Variant', async () => {
    expect.assertions(0);
    try {
      let shop_id = 8212734;
      let product_id = 824348748;
      let product = await client.product.getProductById(product_id);
      product.name += ' Changed!'
      let producttemp : any = {
        id: product_id,
        category_id: product.category.id,
        condition: product.condition,
        etalase: {
          id: product.menu.id,
        },
        min_order: product.min_order,
        name: product.name,
        pictures: product.pictures.map((t: any) => {
          return {
            file_path: t.url_original
          }
        }),
        price: product.price,
        price_currency: product.price_currency,
        sku: product.sku,
        status: product.status,
        stock: product.stock,
        videos: product.videos,
        weight: product.weight,
        weight_unit: product.weight_unit,
        wholesale: product.wholesale,
        is_free_return: product.is_free_return,
        is_must_insurance: product.is_must_insurance,
        description: product.description,
      }

      if (product.preorder) {
        producttemp.preorder = product.preorder;
      }
      if (product.variant) {
        producttemp.variant = product.variant;
        // @ts-ignore
        producttemp.variant.products = producttemp.variant.products.map(t => {
          // @ts-ignore
          t.pictures = t.pictures.map((p: any) => {
            return {
              file_path: p.url_original
            }
          });
          return t;
        });
      }
      console.log(JSON.stringify(producttemp, null, '\t'))
      // let product = products[0];
      let result = await client.product.updateProduct({
        shop_id,
        products: [
         producttemp
        ]
      });
      // check result
      console.log(result.upload_id)
      let check = await client.product.checkStatus(shop_id, result.upload_id);
      console.log(JSON.stringify(check, null, '\t'))
    } catch(e) {
      console.log(e)
      expect(e).toBeInstanceOf(BaseError);
    }
  });

 
  
})