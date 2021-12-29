import Model from "./Model";

export default class userRepository {

  static instance: userRepository;

  static getInstance(): userRepository {
    if (!userRepository.instance) {
      userRepository.instance = new userRepository();
    }
    return userRepository.instance;
  }
  private model;
  private constructor() {
    this.model = Model;
  }

  createUser(props: any): any {
    const user = this.model.create(props);
    return user;
  }
  
  getUser(props: any): any {
    const user = this.model.findOne(props).exec();
    return user;
  }
}

