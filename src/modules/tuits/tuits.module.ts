import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { TuitController } from "./tuit.controller";
import { TuitService } from "./tuit.service";
import { Tuit } from "./tuit.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Tuit])],
  controllers: [TuitController],
  providers: [TuitService],
})
export class TuitsModule {}
