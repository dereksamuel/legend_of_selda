import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.154.0/three.min.js";

class Entity {
  constructor() {
    this.id = null;
    this.parent = null;
    this.components = {};
    this.handlersMatrix = [];
  }

  registerHandler(id, handler) {
    let handlerById = this.handlersMatrix[id];
    if (!(handlerById)) {
      handlerById = [];
    }

    handlerById.push(handler);
  }

  broadcast(msg) {
    if (!(msg.topic in this.handlersMatrix)) return;

    for (let handlerArray of this.handlersMatrix[msg.topic]) {
      handlerArray(msg);
    }
  }

  addComponent(component) {
    this.parent = this;
    this.components[component.id] = component;
    component.start();
  }

  update(timeElapsed) {
    for (let component of this.components) {
      this.components[component].update(timeElapsed);
    }
  }
}

class Component {
  constructor() {
    this.id = "";
    this.parent = null;
  }

  update() {

  }

  start() {

  }
}

export default {
  Component,
  Entity
};
