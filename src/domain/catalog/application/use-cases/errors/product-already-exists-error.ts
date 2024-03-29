import { UseCaseError } from '@/core/errors/use-case-error'

export class ProductAlreadyExistsError extends Error implements UseCaseError {
  constructor(title: string) {
    super(`Product with title "${title}" already exists`)
  }
}
