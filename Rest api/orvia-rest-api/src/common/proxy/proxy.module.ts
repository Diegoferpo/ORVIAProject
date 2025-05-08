import { Module } from "@nestjs/common";
import { ClientProxyOrvia } from "./client-proxy";

@Module({
  providers: [ClientProxyOrvia],
  exports: [ClientProxyOrvia],
})
export class ProxyModule {}
