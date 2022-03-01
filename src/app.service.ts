import { ConfigType } from '@nestjs/config';
import config from './config';
import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'pg'; // 👈 config file

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>, // 👈
  ) {}
  getHello(): string {
    const apiKey = this.configService.apiKey;
    const name = this.configService.database.name;
    return `Hello World! ${apiKey} ${name}`;
  }
}
