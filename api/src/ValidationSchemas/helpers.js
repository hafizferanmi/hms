import Joi from 'joi'

export const stringSchema = () => Joi.string().trim()

export const numberSchema = () => Joi.number().trim()
