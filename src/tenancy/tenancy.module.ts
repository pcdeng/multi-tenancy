import { Global, Module, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { getConnection } from 'typeorm';

const tenantConnectionMapping = {
  a: 'tenant_a',
  b: 'tenant_b',
  main: 'main'
};

const connectionFactory = {
  provide: 'CONNECTION',
  scope: Scope.REQUEST,
  useFactory: req => {
    const tenant = (req.headers['x-tenant-id'] || 'main').toLowerCase();
    return getConnection(tenantConnectionMapping[tenant]);
  },
  inject: [REQUEST],
};

@Global()
@Module({
  providers: [connectionFactory],
  exports: ['CONNECTION'],
})
export class TenancyModule {}
