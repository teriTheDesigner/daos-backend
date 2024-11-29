import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Ensemble extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const EnsembleSchema = SchemaFactory.createForClass(Ensemble);
