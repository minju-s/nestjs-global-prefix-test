import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { Middleware } from './middleware';

@Module({
  imports: [],
  controllers: [AppController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Middleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
