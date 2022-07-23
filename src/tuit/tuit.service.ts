import { Injectable } from '@nestjs/common';
import { Tuit } from 'src/entities/tuit.entity';

@Injectable()
export class TuitService {
  private tuits: Tuit[] = [];
}
