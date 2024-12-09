import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Ensemble extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  instrument: string;

  @Prop()
  city: string;

  @Prop()
  ensembleName: string;
}

export const EnsembleSchema = SchemaFactory.createForClass(Ensemble);
