import { Controller, Param, Get, Post, Body, HttpCode,
  HttpStatus, Patch, Delete } from "@nestjs/common";
import { Tuit } from 'src/entities/tuit.entity';

@Controller('tuit')
export class TuitController {
  constructor() {
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getTuits() {
    return 'Hello World!';
  }

  @Get('/:id')
  getTuit(@Param('id') id: string): Tuit {
    let tuit = new Tuit();
    tuit.id = id;
    tuit.text = 'This is a tweet!';
    return tuit;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  postTuits(@Body() tuit: Tuit): Tuit {
    return tuit;
  }

  @Patch('/:id')
  @HttpCode(HttpStatus.OK)
  patchTuit(@Param('id') id: string, @Body() tuit: Tuit): Tuit {
    return tuit;
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  deleteTuit(@Param('id') id: string): string {
    return `Tuit id: ${id} Deleted!`;
  }
}
