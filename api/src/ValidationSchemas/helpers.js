import Joi from 'joi'

export const stringSchema = () => Joi.string()

export const numberSchema = () => Joi.number().trim()
