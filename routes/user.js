import express from "express";
import passport from "passport";
import { myProfile, logout, getAdminUsers, getAdminStats } from "../controllers/user.js";
import { authorizeAdmin, isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.get("/googlelogin", passport.authenticate("google", {
    scope:["profile"],
}))

// router.get("/login", passport.authenticate("google", {
//     scope:["profile"],
//     successRedirect: "http://localhost:4000"
// }))


router.get(
    "/login",
    passport.authenticate("google", {
      successRedirect: process.env.FRONTEND_URL,
    })
  );

// router.get("/login", passport.authenticate("google"), (req, res, next) => {
//     res.send("Logged In");
// })

router.get("/me", isAuthenticated, myProfile)

router.get("/logout", logout)
router.get("/admin/users", isAuthenticated, authorizeAdmin, getAdminUsers)
router.get("/admin/stats", isAuthenticated, authorizeAdmin, getAdminStats);

export default router;
