console.log('\n********** STACK ALGORITHM ***********');
// Use private properties

const _stack = new WeakMap();

class Stack {
  constructor() {
    _stack.set(this, []);
  }

  push(value) {
    _stack.get(this).push(value);
  }

  pop() {
    const items = _stack.get(this);
    if (items.length === 0) throw new Error('Stack is empty!');

    return items.pop();
  }

  peak() {
    const items = _stack.get(this);
    if (items.length === 0) throw new Error('Stack is empty!');

    return items[items.length - 1];
  }

  get count() {
    return _stack.get(this).length;
  }
}
