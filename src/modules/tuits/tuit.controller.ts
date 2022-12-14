import { Controller, Param, Get, Post, Body, HttpCode,
  HttpStatus, Patch, Delete } from "@nestjs/common";

import { Tuit } from 'src/modules/tuits/tuit.entity';
import { TuitService } from "./tuit.service";
import { CreateTuitDto, UpdateTuitDto, TuitDto } from "./dto";


@Controller('tuit')
export class TuitController {
  constructor(private readonly tuitService: TuitService) {

  }


  @Get()
  @HttpCode(HttpStatus.OK)
  getTuits(): TuitDto[]{
    return this.tuitService.getTuits();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  getTuit(@Param('id') id: string): TuitDto {
    return this.tuitService.getTuit(id);
  }

  @Post('/add')
  @HttpCode(HttpStatus.CREATED)
  postTuits(@Body() tuit: CreateTuitDto): TuitDto {
    return this.tuitService.createTuit(tuit);
  }

  @Patch('/:id')
  @HttpCode(HttpStatus.OK)
  patchTuit(@Param('id') id: string, @Body() tuit: UpdateTuitDto): TuitDto {
    return this.tuitService.updateTuit(id, tuit);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  deleteTuit(@Param('id') id: string): TuitDto {
    return this.tuitService.deleteTuit(id);
  }
}
