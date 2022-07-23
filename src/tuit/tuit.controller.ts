import { Controller, Param, Get, Post } from '@nestjs/common';
import { Tuit } from 'src/entities/tuit.entity';

@Controller('tuit')
export class TuitController {
  constructor() {
  }

  @Get()
  getTuits() {
    return 'Hello World!';
  }

  @Get('/:id')
  getTuit(@Param('id') id: string): string {
    return `Tuit with id ${id}`;
  }

  @Post()
  postTuits() {
    return 'New Tuit posted!';
  }
}
