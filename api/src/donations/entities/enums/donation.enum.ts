import { registerEnumType } from '@nestjs/graphql';

export enum ArticleType {
    alimentationPack = 'Alimentation pack',
    educationPack = 'Education pack',
    monnaie = 'Monnaie',
    custom = "CUstom",
  }
  
  registerEnumType(ArticleType, {
    name: 'ArticleType',
  });