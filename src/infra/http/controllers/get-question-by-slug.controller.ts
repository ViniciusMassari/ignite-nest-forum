import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { Public } from '@/infra/auth/public';

import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/get-question-by-slug';
import { QuestionPresenter } from '../presenters/question-presenter';

@Controller('/questions/:slug')
@Public()
export class GetQuestionBySlugController {
  constructor(private getQuestionBySlugUseCase: GetQuestionBySlugUseCase) {}

  @Get()
  async handle(@Param('slug') slug: string) {
    const result = await this.getQuestionBySlugUseCase.execute({ slug });

    if (result.isLeft()) {
      throw new BadRequestException();
    }
    return { question: QuestionPresenter.toHTTP(result.value.question) };
  }
}
