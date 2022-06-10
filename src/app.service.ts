import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'Server is running! 🚀\n\n Please check http://pizza-fresh-server-production-2893.up.railway.app/api for Swagger docs 😉';
  }
}
