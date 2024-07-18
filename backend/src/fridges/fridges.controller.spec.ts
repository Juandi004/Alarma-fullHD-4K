import { Test, TestingModule } from '@nestjs/testing';
import { FridgesController } from './fridges.controller';
import { FridgesService } from './fridges.service';

describe('FridgesController', () => {
  let controller: FridgesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FridgesController],
      providers: [FridgesService],
    }).compile();

    controller = module.get<FridgesController>(FridgesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
