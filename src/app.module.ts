import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TuitController } from './tuit/tuit.controller';
import { TuitService } from './tuit/tuit.service';

@Module({
  imports: [],
  controllers: [AppController, TuitController],
  providers: [AppService, TuitService],
})
export class AppModule {}
