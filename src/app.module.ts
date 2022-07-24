import { Module } from '@nestjs/common';

import { TuitController } from './modules/tuits/tuit.controller';
import { TuitService } from './modules/tuits/tuit.service';
import { TuitsModule } from './modules/tuits/tuits.module';

@Module({
  imports: [TuitsModule]
})
export class AppModule {}
