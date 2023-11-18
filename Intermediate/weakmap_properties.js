console.log('\n********** WEAKMAP HIDDEN PROPERTIES ***********');
// Use WeakMap to hide a property
// Set setters and getters

const _radius = new WeakMap();

class Oval {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error('Invalid radius!');
    _radius.set(this, value);
  }
}
