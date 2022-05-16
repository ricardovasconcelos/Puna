import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase";

describe('Submit feedback', () => {
  const createFeedbackSpy = jest.fn();
  const sendMailSpy = jest.fn();

  const submitFeedback = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy},
    {sendMail: sendMailSpy}
  );

  test('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'bug',
      comment: 'bug comment',
      screenshot: 'data:image/png;base64,123dqawqeq123asd'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  })

  test('should not be able to submit a feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'bug comment',
      screenshot: 'data:image/png;base64,123dqawqeq123asd'
    })).rejects.toThrow();
  })

  test('should not be able to submit a feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'bug',
      comment: '',
      screenshot: 'data:image/png;base64,123dqawqeq123asd'
    })).rejects.toThrow();
  })

  test('should not be able to submit a feedback without screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'bug',
      comment: 'bug comment',
      screenshot: 'test.png'
    })).rejects.toThrow();
  })
})  