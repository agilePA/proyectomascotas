import { RegistrarModule } from './registrar.module';

describe('RegistrarModule', () => {
  let registrarModule: RegistrarModule;

  beforeEach(() => {
    registrarModule = new RegistrarModule();
  });

  it('should create an instance', () => {
    expect(registrarModule).toBeTruthy();
  });
});
