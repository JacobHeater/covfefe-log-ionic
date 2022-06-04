import { Injectable } from '@angular/core';
import { RepositoryBase } from '../repository-base';

import PouchDB from 'pouchdb';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';
import { NotImplementedException } from 'src/app/exceptions/not-implemented-exception';
import { ModelBase } from 'src/app/models/model-base';
import { IdentifiersService } from 'src/app/services/identifiers/identifiers.service';
import { ArgumentMissingException } from 'src/app/exceptions/argument-missing-exception';

@Injectable({
  providedIn: 'root',
})
export abstract class PouchRepositoryBase<T extends ModelBase> extends RepositoryBase<T> {
  private database: PouchDB;

  constructor(private idSvc: IdentifiersService) {
    super();
    PouchDB.plugin(cordovaSqlitePlugin);
    this.database = new PouchDB(`${this.schemaName()}`, {
      adapter: 'cordova-sqlite',
    });
  }

  async findOneAsync(id: string): Promise<T> {
    const result = await this.database.get(id);

    return this.mapSingleDocumentToEntity(result);
  }

  async findManyAsync(filter: { [key in keyof T]: T[key] }): Promise<T[]> {
    throw new NotImplementedException();
  }

  async findAllAsync(): Promise<T[]> {
    const { rows } = await this.database.allDocs();
    let results = rows.map(async (r) => this.findOneAsync(r.id));

    results = await Promise.all(results);

    return this.mapDocumentsToEntities(results);
  }

  async insertOneAsync(entity: T): Promise<T> {
    if (!entity) {
      throw new ArgumentMissingException('entity');
    }

    if (!entity._id) {
      entity._id = this.idSvc.generateNewUuid();
    }

    const { id } = await this.database.put(entity);
    return this.findOneAsync(id);
  }

  async insertManyAsync(entities: T[]): Promise<T[]> {
    throw new NotImplementedException();
  }

  async updateOneAsync(id: string, entity: Partial<T>): Promise<T> {
    throw new NotImplementedException();
  }

  async updateManyAsync(
    filter: { [key in keyof T]: T[key] },
    entity: Partial<T>
  ): Promise<T[]> {
    throw new NotImplementedException();
  }

  async deleteOneAsync(entity: T): Promise<boolean> {
    const { _deleted } = await this.database.remove(entity);

    return _deleted;
  }

  async deleteManyAsync(id: string): Promise<boolean> {
    throw new NotImplementedException();
  }

  private mapSingleDocumentToEntity(document: any): T {
    const ctor = this.entityFactory();
    return Object.assign(new ctor(), document);
  }

  private mapDocumentsToEntities(documents: any[]): T[] {
    return documents.map((document) =>
      this.mapSingleDocumentToEntity(document)
    );
  }

  protected abstract schemaName(): string;
  protected abstract entityFactory(): new () => T;
}
