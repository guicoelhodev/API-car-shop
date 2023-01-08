import express from 'express'
import { helloWorld } from '../controllers';

export const router = express.Router();

router.get('/', helloWorld)