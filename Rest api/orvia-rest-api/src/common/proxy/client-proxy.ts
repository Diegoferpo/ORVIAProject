import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';

@Injectable()
export class ClientProxyOrvia {
  private client: SQSClient;
  private queueUrl: string;

  constructor(private readonly config: ConfigService) {
    this.client = new SQSClient({ region: this.config.get('AWS_REGION') });

    const url = this.config.get<string>('SQS_USER_QUEUE_URL');
    if (!url) throw new Error('SQS_USER_QUEUE_URL is not defined in environment variables');
    this.queueUrl = url;
  }

  async send(message: any): Promise<void> {
    const command = new SendMessageCommand({
      QueueUrl: this.queueUrl,
      MessageBody: JSON.stringify(message),
    });

    try {
      await this.client.send(command);
    } catch (err) {
      console.error('Error sending message to SQS:', err);
      throw new Error('Failed to send message to SQS');
    }
  }
}
