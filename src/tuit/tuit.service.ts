import { Injectable } from '@nestjs/common';
import { Tuit } from 'src/entities/tuit.entity';

@Injectable()
export class TuitService {
  private tuits: Tuit[] = [];

  getTuits(): Tuit[] {
    return this.tuits;
  }

  getTuit(id: string): Tuit {
    return this.tuits.find(tuit => tuit.id === id);
  }

  createTuit(tuit: Tuit): Tuit {
    this.tuits.push(tuit);
    return tuit;
  }

  updateTuit(id: string, tuit: Tuit): Tuit {
    const tuitToUpdate = this.tuits.find( x => x.id === id);
    tuitToUpdate.text = tuit.text;
    return tuitToUpdate;
  }

  deleteTuit(id: string): Tuit {
    const tuitToDelete = this.tuits.find( x => x.id === id);
    const index = this.tuits.indexOf(tuitToDelete);
    this.tuits.splice(index, 1);
    return tuitToDelete;
  }
}
