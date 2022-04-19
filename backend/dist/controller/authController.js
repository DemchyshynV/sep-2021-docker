"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const authService_1 = require("../services/authService");
const cookie_1 = require("../constants/cookie");
class AuthController {
    async registration(req, res) {
        const data = await authService_1.authService.registration(req.body);
        res.cookie(cookie_1.COOKIE.nameRefreshToken, data.refreshToken, { maxAge: cookie_1.COOKIE.maxAgeRefreshToken, httpOnly: true });
        return res.json(data);
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=authController.js.map