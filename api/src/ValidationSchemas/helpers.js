import Joi from 'joi'

export const stringSchema = () => Joi.string().allow('')

export const numberSchema = () => Joi.number().trim()
