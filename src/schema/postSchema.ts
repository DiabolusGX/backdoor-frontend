import Joi from 'joi';

const postSchema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(120)
        .required(),
    description: Joi.string()
        .min(10)
        .max(2000)
        .required()
});

export default postSchema;