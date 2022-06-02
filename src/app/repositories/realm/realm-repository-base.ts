import { NotImplementedException } from 'src/app/exceptions/not-implemented-exception';
import { RealmService } from 'src/app/services/realm/realm.service';
import { RepositoryBase } from '../repository-base';

export abstract class RealmRepositoryBase<
  T extends () => T
> extends RepositoryBase<T> {
  constructor(private realmService: RealmService) {
    super();
  }

  protected get schemaName(): string {
    throw new NotImplementedException();
  }

  protected get entityFactory(): new () => T {
    throw new NotImplementedException();
  }

  async findOneAsync(id: string): Promise<T> {
    const collection = await this.openCollectionAsync();
    const result = await collection.findOne({ _id: id });

    return this.mapSingleDocumentToEntity(result);
  }

  async findAllAsync(): Promise<T[]> {
    const collection = await this.openCollectionAsync();
    const results = await collection.find();

    return this.mapDocumentsToEntities(results);
  }

  async insertOneAsync(entity: T): Promise<T> {
    const collection = await this.openCollectionAsync();
    const { insertedId } = await collection.insertOne(entity);

    return this.findOneAsync(insertedId);
  }

  private openCollectionAsync() {
    return this.realmService.openMongoCollectionAsync(this.schemaName);
  }

  private mapSingleDocumentToEntity(document: any): T {
    return Object.assign(new this.entityFactory(), document);
  }

  private mapDocumentsToEntities(documents: any[]): T[] {
    return documents.map(this.mapSingleDocumentToEntity);
  }
}
