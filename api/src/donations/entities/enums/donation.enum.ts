import { registerEnumType } from '@nestjs/graphql';

export enum ArticleType {
    alimentationPack = 'Alimentation pack',
    educationPack = 'Education pack',
    monnaie = 'Monnaie',
  }
  
  registerEnumType(ArticleType, {
    name: 'ArticleType',
  });