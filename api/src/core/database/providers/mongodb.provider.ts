import { Injectable } from '@nestjs/common';
import config from '../../../config';
import { MongoModuleOptions, MongoOptionsFactory } from 'nest-mongodb';

@Injectable()
export class MongoDBProvider implements MongoOptionsFactory {
  private uri = config.uri;
  private dbName = config.dbname;

  createMongoOptions(): MongoModuleOptions {
    return {
      uri: this.uri,

      dbName: this.dbName,
    };
  }
}
