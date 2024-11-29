import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { EnsemblesService } from './ensambles.service';

@Controller('ensembles')
export class EnsemblesController {
  constructor(private ensemblesService: EnsemblesService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async createEnsemble(@Body() createEnsembleDto: any, @Request() req: any) {
    const user = req.user;
    return this.ensemblesService.createEnsemble(createEnsembleDto, user);
  }
}
