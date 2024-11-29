import {
  Body,
  Controller,
  Post,
  Get,
  UseGuards,
  Request,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { EnsemblesService } from './ensambles.service';
import { Ensemble } from './schemas/ensamble.schema';

@Controller('ensembles')
export class EnsemblesController {
  constructor(private ensemblesService: EnsemblesService) {}

  @UseGuards(AuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createEnsemble(@Body() createEnsembleDto: any, @Request() req: any) {
    const user = req.user;
    return this.ensemblesService.createEnsemble(createEnsembleDto, user);
  }

  @Get()
  async findAll(): Promise<Ensemble[]> {
    return this.ensemblesService.findAll();
  }
}
