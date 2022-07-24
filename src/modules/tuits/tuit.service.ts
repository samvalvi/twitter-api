import { Injectable, HttpException, HttpStatus, UnprocessableEntityException } from "@nestjs/common";

import { Tuit } from 'src/modules/tuits/tuit.entity';
import { CreateTuitDto, UpdateTuitDto, TuitDto } from "./dto";


@Injectable()
export class TuitService {
  private tuits: Tuit[] = [];

  getTuits(): TuitDto[] {
    return this.tuits;
  }

  getTuit(id: string): TuitDto {
    const tuit = this.tuits.find(tuit => tuit.id === id);

    if (!tuit) {
      throw new HttpException('Tuit not found', HttpStatus.NOT_FOUND);
    }

    return tuit;
  }

  createTuit(tuit: CreateTuitDto): TuitDto {
    const exist = this.tuits.find( x => x.message === tuit.message);

    if (exist) {
      throw new HttpException('Tuit already exists', HttpStatus.UNPROCESSABLE_ENTITY);
    }

    const result = this.tuits.push(tuit);
    if(result > 0) {
      return tuit;
    }
  }

  updateTuit(id: string, tuit: UpdateTuitDto): TuitDto {
    const tuitToUpdate = this.tuits.find( x => x.id === id);

    if(!tuitToUpdate) {
      throw new HttpException('Tuit not found', HttpStatus.NOT_FOUND);
    }

    tuitToUpdate.message = tuit.message;
    return tuitToUpdate;
  }

  deleteTuit(id: string): TuitDto {
    const tuitToDelete = this.tuits.find( x => x.id === id);

    if(!tuitToDelete) {
      throw new HttpException('Tuit not found', HttpStatus.NOT_FOUND);
    }

    const index = this.tuits.indexOf(tuitToDelete);
    this.tuits.splice(index, 1);
    return tuitToDelete;
  }
}
