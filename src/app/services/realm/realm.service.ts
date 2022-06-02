import { Injectable } from '@angular/core';
import * as Realm from 'realm-web';

const REALM_ID = 'empty-id';
const CLUSTER_ID = 'empty-cluster';
const DB_NAME = 'covfefe';

@Injectable({
  providedIn: 'root',
})
export class RealmService {
  app: Realm.App;

  constructor() {
    this.app = new Realm.App({ id: REALM_ID });
  }

  generateObjectId(): string {
    return new Realm.BSON.ObjectID().toString();
  }

  async openMongoCollectionAsync(schemaName: string) {
    const mongoClient = this.app.currentUser.mongoClient(CLUSTER_ID);
    const collection = mongoClient.db(DB_NAME).collection(schemaName);

    return collection;
  }
}
