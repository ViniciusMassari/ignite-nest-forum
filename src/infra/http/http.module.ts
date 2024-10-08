import { Module } from '@nestjs/common';

import { AuthenticateController } from './controllers/authenticate.controller';
import { CreateAccountController } from './controllers/create-account.controller';
import { CreateQuestionController } from './controllers/create-question.controller';
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controller';
import { DatabaseModule } from '../database/database.module';
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question';
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recent-questions';
import { RegisterStudentUseCase } from '@/domain/forum/application/use-cases/register-student';
import { CryptographyModule } from '../criptography/criptography.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-cases/authenticate-student';
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/get-question-by-slug';
import { GetQuestionBySlugController } from './controllers/get-question-by-slug.controller';
import { EditQuestionUseCase } from '@/domain/forum/application/use-cases/edit-question';
import { EditQuestionController } from './controllers/edit-question.controller';
import { DeleteQuestionUseCase } from '@/domain/forum/application/use-cases/delete-question';
import { DeleteQuestionController } from './controllers/delete-question.controller';
import { AnswerQuestionController } from './controllers/answer-question.controller';
import { AnswerQuestionUseCase } from '@/domain/forum/application/use-cases/answer-question';
import { EditAnswerController } from './controllers/edit-answer.controller';
import { EditAnswerUseCase } from '@/domain/forum/application/use-cases/edit-answer';
import { DeleteAnswerController } from './controllers/delete-answer.controller';
import { DeleteAnswerUseCase } from '@/domain/forum/application/use-cases/delete-answer';
import { FetchQuestionAnswersUseCase } from '@/domain/forum/application/use-cases/fetch-question-answers';
import { FetchQuestionAnswersController } from './controllers/fetch-question-answers.controller';
import { ChooseQuestionBestAnswerController } from './controllers/choose-question-best-answer.controller';
import { ChooseQuestionBestAnswerUseCase } from '@/domain/forum/application/use-cases/choose-question-best-answer';
import { CommentOnQuestionUseCase } from '@/domain/forum/application/use-cases/comment-on-question';
import { CommentOnQuestionController } from './controllers/comment-on-question.controller';
import { DeleteQuestionCommentUseCase } from '@/domain/forum/application/use-cases/delete-question-comment';
import { DeleteQuestionCommentController } from './controllers/delete-question-comment.controller';
import { CommentOnAnswerUseCase } from '@/domain/forum/application/use-cases/comment-on-answer';
import { CommentOnAnswerController } from './controllers/comment-on-answer.controller';
import { DeleteAnswerCommentController } from './controllers/delete-answer-comment.controller';
import { DeleteAnswerCommentUseCase } from '@/domain/forum/application/use-cases/delete-answer-comment';
import { FetchQuestionCommentsUseCase } from '@/domain/forum/application/use-cases/fetch-question-comments';
import { FetchQuestionCommentsController } from './controllers/fetch-question-comments.controller';
import { FetchAnswerCommentsUseCase } from '@/domain/forum/application/use-cases/fetch-answer-comments';
import { UploadAttachmentController } from './controllers/upload-attachment.controller';
import { UploadAndCreateAttachmentUseCase } from '@/domain/forum/application/use-cases/upload-and-create-attachment';
import { StorageModule } from '../storage/storage.module';
import { ReadNotificationUseCase } from '@/domain/notification/application/use-cases/read-notification';
import { ReadNotificationController } from './controllers/read-notification.controller';
import { FetchAnswerCommentsController } from './controllers/fetch-answer-comments.controller';

@Module({
  imports: [DatabaseModule, CryptographyModule, StorageModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
    GetQuestionBySlugController,
    EditQuestionController,
    DeleteQuestionController,
    AnswerQuestionController,
    EditAnswerController,
    DeleteAnswerController,
    FetchQuestionAnswersController,
    ChooseQuestionBestAnswerController,
    CommentOnQuestionController,
    DeleteQuestionCommentController,
    CommentOnAnswerController,
    DeleteAnswerCommentController,
    FetchQuestionCommentsController,
    FetchAnswerCommentsController,
    UploadAttachmentController,
    ReadNotificationController,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    CreateQuestionUseCase,
    FetchRecentQuestionsUseCase,
    RegisterStudentUseCase,
    AuthenticateStudentUseCase,
    GetQuestionBySlugUseCase,
    EditQuestionUseCase,
    DeleteQuestionUseCase,
    AnswerQuestionUseCase,
    EditAnswerUseCase,
    DeleteAnswerUseCase,
    FetchQuestionAnswersUseCase,
    ChooseQuestionBestAnswerUseCase,
    CommentOnQuestionUseCase,
    DeleteQuestionCommentUseCase,
    CommentOnAnswerUseCase,
    DeleteAnswerCommentUseCase,
    FetchQuestionCommentsUseCase,
    FetchAnswerCommentsUseCase,
    UploadAndCreateAttachmentUseCase,
    ReadNotificationUseCase,
  ],
})
export class HttpModule {}
