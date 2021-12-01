class EntityValidationError extends Error {
  constructor (entityName, message, data, ...params) {
    super(message, ...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, EntityValidationError)
    }

    this.name = this.constructor.name

    if (!entityName) {
      throw new Error('entityName has to be a non-empty string.')
    }
    this.entityName = entityName

    if (data) {
      this.data = data
    }
  }
}

export default EntityValidationError
