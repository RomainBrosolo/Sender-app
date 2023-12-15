import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { MongoModuleOptions, MongoOptionsFactory } from 'nest-mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';

@Injectable()
export class InMemoryProvider implements MongoOptionsFactory {
  private uri = 'mongodb://kraken:kraken@0.0.0.0:27017/?authSource=admin';
  private dbName = 'kraken-db';
  private mongoServer: MongoMemoryServer;
  private mongoClient: MongoClient;

  async createMongoOptions(): Promise<MongoModuleOptions> {
    this.mongoServer = await MongoMemoryServer.create();
    this.uri = this.mongoServer.getUri();
    return {
      uri: this.uri,
      dbName: this.dbName,
    };
  }

  async connect() {
    if (!this.mongoClient) {
      this.mongoClient = new MongoClient(this.uri, {});
    }

    await this.mongoClient.connect();
  }

  async close(): Promise<void> {
    if (!!this.mongoServer) {
      await this.mongoServer.stop();
    }
    if (!!this.mongoClient) {
      await this.mongoClient.close();
    }
  }

  async insert(collection: string, data: any) {
    this.connect();
    await this.mongoClient
      .db(this.dbName)
      .collection(collection)
      .insertMany(data);
  }

  async clear(collection: string) {
    this.connect();
    await this.mongoClient
      .db(this.dbName)
      .collection(collection)
      .deleteMany({});
  }
}
