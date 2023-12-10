import {Router  } from 'express';
const router = Router();

import {createPost, getPosts  } from '../controllers/post.controller';

router.route('/')

.get(getPosts)
.post(createPost);

export default router;