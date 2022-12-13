import { UuidService } from './uuid.service';

/**
 * use .name to get the name of the class
 * use .prototype.methodName.name to ensure remains the name of the method
 */
describe(UuidService.name, () => {
  it(`${UuidService.prototype.generateUuIdWithPrefix.name} should generated generate id when called with prefix`, () => {
    const service = new UuidService();
    const uuid = service.generateUuIdWithPrefix('uuid');
    expect(uuid).toContain('uuid-');
  });
});
