import { Module } from '@nestjs/common';
import { TuitController } from "./tuit.controller";
import { TuitService } from "./tuit.service";

@Module({
  controllers: [TuitController],
  providers: [TuitService],
})
export class TuitsModule {}
