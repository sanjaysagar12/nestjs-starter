import { Global, Module, OnModuleInit, Logger } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as path from 'path';

@Global()
@Module({})
export class FirebaseModule implements OnModuleInit {
    private readonly logger = new Logger(FirebaseModule.name);

    onModuleInit() {
        if (!admin.apps.length) {
            const serviceAccountPath = path.join(process.cwd(), 'heracle-ai-firebase-adminsdk.json');
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const serviceAccount = require(serviceAccountPath);

            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                projectId: serviceAccount.project_id,
            });

            this.logger.log('Firebase Admin SDK initialized');
        }
    }
}
