import { Module } from '@nestjs/common';
import { EnsemblesController } from './ensambles.controller';
import { EnsemblesService } from './ensambles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Ensemble, EnsembleSchema } from './schemas/ensamble.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ensemble.name, schema: EnsembleSchema },
    ]),
  ],
  controllers: [EnsemblesController],
  providers: [EnsemblesService],
})
export class EnsemblesModule {}
