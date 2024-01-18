//require('dotenv').config()
import dotenv from "dotenv"
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import express from "express"
import connectDb from "./db/index.js"

dotenv.config({
    path:'./env'
})

connectDb()
