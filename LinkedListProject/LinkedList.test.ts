import LinkedList from './LinkedList';

describe('LinkedList', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  test('should add elements to the list', () => {
    list.add(11);
    list.add(22);
    expect(list.find(11)).not.toBeNull();
    expect(list.find(22)).not.toBeNull();
  });

  test('should remove elements from the list', () => {
    list.add(11);
    list.add(22);
    expect(list.remove(22)).toBe(true);
    expect(list.find(22)).toBeNull();
  });

  test('should return null if element is not found', () => {
    expect(list.find(100)).toBeNull();
  });
});
