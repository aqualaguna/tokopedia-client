import TokopediaClient from '../src/index';
beforeAll((done) => {
  done();
})

describe('Authentication Test', () => {
  it('should success authenticate to get access token', async () => {
    // using test account 9 openapi+seller9@tokopedia.com
    let client = new TokopediaClient({
      fs_id: '13398',
      client_id: 'c782b33ecdd04b669772f25aff41335e',
      client_secret: '79c8a04cf24c4693a1d1a86048a3cb51'
    });
    await client.authenticate();
    let result = await client.product.getAllProductGql(1, 2000);
    console.log(result)
  });

 
  
})