class Store {
  cache: any = {};
  set(key: string, value: any | string | number) {
    this.cache[key] = value;
  }
  get(key: string) {
    return this.cache[key];
  }
}
const SimpleStore = new Store();
export default SimpleStore;
