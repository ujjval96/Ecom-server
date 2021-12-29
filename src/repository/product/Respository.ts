import Model from "./Model";

export default class ProductRepository {

  static instance: ProductRepository;

  static getInstance(): ProductRepository {
    if (!ProductRepository.instance) {
      ProductRepository.instance = new ProductRepository();
    }
    return ProductRepository.instance;
  }
  private model;
  private constructor() {
    this.model = Model;
  }

  createProduct(props: any): any {
    const user = this.model.create(props);
    return user;
  }

  getTypes(): any {
    const user = this.model.distinct("type");
    return user;
  }

  getProducts(type: string, limit: number, skip: number): any {
    return this.model.find({ type }).skip(+skip).limit(+limit);
  }
}

