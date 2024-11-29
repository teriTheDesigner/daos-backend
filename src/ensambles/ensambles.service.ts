import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ensemble } from './schemas/ensamble.schema';

@Injectable()
export class EnsemblesService {
  constructor(
    @InjectModel(Ensemble.name) private ensembleModel: Model<Ensemble>,
  ) {}

  async createEnsemble(createEnsembleDto: any, user: any): Promise<Ensemble> {
    const newEnsemble = new this.ensembleModel({
      ...createEnsembleDto,
      creator: user._id,
    });
    return newEnsemble.save();
  }
}
