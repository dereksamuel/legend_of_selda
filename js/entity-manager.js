export class EntityManager {
  constructor() {
    this.entities = {};
    this.ids = 0;
  }

  getId() {
    this.ids++;
    return "__auto_id__" + this.ids;
  }

  add(entity, id) {
    if (!id) {
      id = this.getId();
    }

    this.entities[id] = entity;
    this.entities = {
      ...this.entities,
      [id]: entity
    };

    entity.parent = this;
    entity.id = id;
  }

  generalUpdate(timeElapsed) {
    for (let entity of this.entities) {
      entity.update(timeElapsed);
    }
  }
}
