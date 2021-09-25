import { UuidService } from './uuid.service';

describe(UuidService.name, () => {
  it(`${UuidService.prototype.generateUuIdWithPrefix.name} should generated generate id when called with prefix`, () => {
    const service = new UuidService();
    const uuid = service.generateUuIdWithPrefix('uuid');
    expect(uuid).toContain('uuid-');
  });
});
