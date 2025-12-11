var express = require("express");
const { PrismaClient } = require("@prisma/client");

var router = express.Router();
const prisma = new PrismaClient();

/* get all users*/
router.get("/", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.send(allUsers);
});

// add a user
router.post("/", async (req, res) => {
  const createUser = await prisma.user.create({ data: req.body });
  res.send(createUser);
});

// get user by id
router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const getUserById = await prisma.user.findUnique({ where: { id: id } });
  res.send(getUserById);
});

// delete user
router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const deleteUser = await prisma.user.delete({ where: { id } });
  res.send(deleteUser);
});

// edit user
router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const editUser = await prisma.user.update({ where: { id }, data: req.body });
  res.send(editUser);
});
module.exports = router;
