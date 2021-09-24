import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UuidService {
  private numberOfGeneratedIds = 0;

  constructor() {}

  public generateUuIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw Error('Prefix can not be empty!');
    }

    const uuid = this.generateUuId;
    this.numberOfGeneratedIds++;

    return `${prefix}-${uuid}`;
  }

  public getNumberOfGeneratedUuIds(): number {
    return this.numberOfGeneratedIds;
  }

  private generateUuId(): string {
    return uuid();
  }
}
